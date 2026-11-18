import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist',{recursive:true});
for(const file of ['index.html','src.js','style.css']) await cp(file,`dist/${file}`);
await cp('public/manifest.webmanifest','dist/manifest.webmanifest'); await cp('public/sw.js','dist/sw.js');
console.log('Built BurnClock Pro into dist/');
