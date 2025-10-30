import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  if (!content.includes(scriptTag)) {
    content = content.replace('</head>', `  ${scriptTag}\n  </head>`);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Injected console capture script into ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (path.extname(file) === '.html') {
      injectScript(filePath);
    }
  });
}

if (fs.existsSync(distDir)) {
  walkDir(distDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Dist directory not found. Run build first.');
}