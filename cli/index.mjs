#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Read what the user types in the terminal
const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

if (command !== 'add' || !componentName) {
  console.error("❌ Usage: npx saqlain-ui add <component-name>");
  process.exit(1);
}

// The URL to your new alias dictionary
const INDEX_URL = 'https://my-ui-library-vpgx.vercel.app/registry/index.json';
const OUTPUT_DIR = path.join(process.cwd(), 'components/ui');

async function fetchComponent() {
  try {
    process.stdout.write(`🔍 Searching for '${componentName}'... `);

    // 1. Fetch the master index file first
    const indexResponse = await fetch(INDEX_URL);
    if (!indexResponse.ok) throw new Error("Failed to reach the registry.");
    const masterIndex = await indexResponse.json();

    // 2. Check if the component exists in our alias dictionary!
    if (!masterIndex[componentName]) {
      console.log(`❌ Not found.`);
      console.log(`\nOops! '${componentName}' doesn't exist in the registry.`);
      console.log(`👉 Available components: ${Object.keys(masterIndex).join(', ')}\n`);
      process.exit(1);
    }

    console.log(`Found!`);
    console.log(`⏳ Downloading '${componentName}'...`);

    // 3. It exists! Fetch the exact URL from our dictionary
    const componentInfo = masterIndex[componentName];
    const componentResponse = await fetch(componentInfo.downloadUrl);
    
    if (!componentResponse.ok) throw new Error("Failed to download the component data.");
    const componentData = await componentResponse.json();

    // 4. Save it to the user's project
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const fileInfo = componentData.files[0];
    const filePath = path.join(OUTPUT_DIR, fileInfo.name);

    fs.writeFileSync(filePath, fileInfo.content);
    console.log(`✅ Successfully installed ${fileInfo.name} into ./components/ui/`);

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}\n`);
  }
}

fetchComponent();