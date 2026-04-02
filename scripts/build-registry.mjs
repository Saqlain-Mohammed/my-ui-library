import fs from 'fs';
import path from 'path';

const COMPONENTS_DIR = './components/ui';
const REGISTRY_DIR = './public/registry'; 

if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
}

// --- Build Regular Button ---
const buttonCode = fs.readFileSync(path.join(COMPONENTS_DIR, 'button.tsx'), 'utf8');

const buttonRegistry = {
  name: "button",
  dependencies: [], 
  registryDependencies: [], 
  files: [
    {
      name: "button.tsx",
      content: buttonCode 
    }
  ]
};

fs.writeFileSync(
  path.join(REGISTRY_DIR, 'button.json'),
  JSON.stringify(buttonRegistry, null, 2)
);
console.log("✅ Registry built successfully! button.json created.");

// --- Build Icon Button ---
const iconButtonCode = fs.readFileSync(path.join(COMPONENTS_DIR, 'icon-button.tsx'), 'utf8');

const iconButtonRegistry = {
  name: "icon-button",
  dependencies: ["lucide-react"], // Tells CLI to install this package
  registryDependencies: [], 
  files: [
    {
      name: "icon-button.tsx",
      content: iconButtonCode 
    }
  ]
};

fs.writeFileSync(
  path.join(REGISTRY_DIR, 'icon-button.json'),
  JSON.stringify(iconButtonRegistry, null, 2)
);

console.log("✅ Registry built successfully! icon-button.json created.");