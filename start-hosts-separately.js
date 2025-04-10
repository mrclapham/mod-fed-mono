// This script only builds everything but doesn't start the servers
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('📦 Building everything for Module Federation...');

// Build the UI library
console.log('\n🔨 Building shared UI library...');
execSync('pnpm build --filter=ui-library', { stdio: 'inherit' });

// Build the remote app
console.log('\n🔨 Building remote app...');
execSync('pnpm build --filter=remote', { stdio: 'inherit' });

// Build the host app
console.log('\n🔨 Building host app...');
execSync('pnpm build --filter=host', { stdio: 'inherit' });

// Check if remoteEntry.js exists
const remoteEntryPath = path.join(__dirname, 'apps/remote/dist/remoteEntry.js');
const remoteEntryAssetsPath = path.join(__dirname, 'apps/remote/dist/assets/remoteEntry.js');

if (fs.existsSync(remoteEntryPath)) {
  console.log(`\n✅ Remote entry file exists at: ${remoteEntryPath}`);
} else if (fs.existsSync(remoteEntryAssetsPath)) {
  console.log(`\n✅ Remote entry file exists at: ${remoteEntryAssetsPath}`);
  console.log(`\n🔄 Host is now configured to use this location.`);
} else {
  console.error(`\n❌ Remote entry file NOT found at either:`);
  console.error(`   - ${remoteEntryPath}`);
  console.error(`   - ${remoteEntryAssetsPath}`);
  
  console.log('\nChecking dist directory contents:');
  const distPath = path.join(__dirname, 'apps/remote/dist');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log(`Files in remote/dist: ${files.join(', ')}`);
    
    const assetsPath = path.join(__dirname, 'apps/remote/dist/assets');
    if (fs.existsSync(assetsPath)) {
      const assetFiles = fs.readdirSync(assetsPath);
      console.log(`Files in remote/dist/assets: ${assetFiles.join(', ')}`);
    }
  } else {
    console.error('dist directory does not exist');
  }
}

console.log('\n🚀 Build complete!');
console.log('\nTo start the servers:');
console.log('1. In one terminal run: pnpm remote:preview');
console.log('2. In another terminal run: pnpm host:dev');