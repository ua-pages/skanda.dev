import { apiDir, webDir, ensurePackageJson, ensureProjectDirs } from './_utils.mjs';

ensureProjectDirs();
ensurePackageJson(apiDir, 'portfolio-api');
ensurePackageJson(webDir, 'portfolio-web');

console.log('\n✓ No build step required — projects are plain JS/WebComponents.');
console.log('  Start dev servers with: npm run dev:all');
