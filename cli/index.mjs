#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
let componentName = process.argv[2];

// If the user typed "add", grab the next word instead!
if (componentName === "add") {
  componentName = process.argv[3];
}

if (!componentName) {
  console.error("❌ Please provide a component name. Example: my-ui add button");
  process.exit(1);
}

const REGISTRY_URL = `http://localhost:3000/registry/${componentName}.json`;
const OUTPUT_DIR = './test-downloads/components/ui';

async function addComponent() {
  try {
    console.log(`⏳ Fetching '${componentName}' from registry...`);

    const response = await fetch(REGISTRY_URL);
    
    if (!response.ok) {
      throw new Error(`Component '${componentName}' not found. Is your dev server running?`);
    }

    const componentData = await response.json();

    // Check for and install NPM dependencies
    if (componentData.dependencies && componentData.dependencies.length > 0) {
      console.log(`📦 Installing dependencies: ${componentData.dependencies.join(', ')}...`);
      execSync(`npm install ${componentData.dependencies.join(' ')} --legacy-peer-deps`, { stdio: 'inherit' });
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    componentData.files.forEach(file => {
      const filePath = path.join(OUTPUT_DIR, file.name);
      fs.writeFileSync(filePath, file.content);
      console.log(`✅ Successfully installed ${file.name} into ${OUTPUT_DIR}/`);
    });

    console.log(`🎉 Component '${componentName}' is ready to use!`);

  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

addComponent();