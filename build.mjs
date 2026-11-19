
import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

for (const file of ['index.html', 'src.js', 'style.css', 'sw.js']) {
  await cp(file, `dist/${file}`);
}

await cp('public/manifest.webmanifest', 'dist/manifest.webmanifest');

console.log('Build completed successfully into dist/');
