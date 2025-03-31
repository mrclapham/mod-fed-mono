// This script ensures proper build and start order for Module Federation in dev mode
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('📦 Setting up Module Federation development environment...');

// Build the UI library
console.log('\n🔨 Building shared UI library...');
execSync('pnpm build --filter=ui-library', { stdio: 'inherit' });

// Build the remote app
console.log('\n🔨 Building remote app...');
execSync('pnpm build --filter=remote', { stdio: 'inherit' });

// Check if remoteEntry.js exists
const remoteEntryPath = path.join(__dirname, 'apps/remote/dist/remoteEntry.js');
if (fs.existsSync(remoteEntryPath)) {
  console.log(`\n✅ Remote entry file exists at: ${remoteEntryPath}`);
} else {
  console.error(`\n❌ Remote entry file NOT found at: ${remoteEntryPath}`);
  console.log('Checking dist directory contents:');
  const distPath = path.join(__dirname, 'apps/remote/dist');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log(`Files in remote/dist: ${files.join(', ')}`);
  } else {
    console.error('dist directory does not exist');
  }
}

// Start preview servers
console.log('\n🚀 Starting preview servers...');
execSync('pnpm run preview --filter=remote', { stdio: 'inherit', detached: true });

// Wait a bit for remote to start
console.log('\n⏳ Waiting for remote server to start...');
setTimeout(() => {
  console.log('\n🚀 Starting host dev server...');
  execSync('pnpm run dev --filter=host', { stdio: 'inherit' });
}, 3000);