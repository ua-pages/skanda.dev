import { root, run } from './_utils.mjs';

console.log('Starting full portfolio app bootstrap...');
console.log('This will install dependencies and start API + Web in dev mode.');

run('npm', ['run', 'install:all'], root, 'Step 1/2: install all dependencies');
run('npm', ['run', 'dev:all'], root, 'Step 2/2: start API + Web');

console.log('\n✓ App bootstrap completed.');
