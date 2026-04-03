import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'components/ui');
const registryDir = path.join(process.cwd(), 'public/registry');

if (!fs.existsSync(registryDir)) {
  fs.mkdirSync(registryDir, { recursive: true });
}

const components = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

// UPGRADE: We changed this from an Array [] to an Object {}
// This acts as an alias dictionary for instant retrieval!
const masterIndex = {};

components.forEach(file => {
  const name = file.replace('.tsx', '');
  const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');

  // 1. Build the individual component JSON
  const componentData = {
    name: name,
    aliases: [name], // We can even add alternative names here later (like 'btn')
    type: "components:ui",
    files: [
      {
        name: file,
        content: content
      }
    ]
  };
  fs.writeFileSync(path.join(registryDir, `${name}.json`), JSON.stringify(componentData, null, 2));

  // 2. UPGRADE: Create the direct alias key in our master dictionary
  masterIndex[name] = {
    name: name,
    type: "components:ui",
    file: file,
    // We can pre-build the exact live URL to make it incredibly easy for the CLI to fetch!
    downloadUrl: `https://my-ui-library-vpgx.vercel.app/registry/${name}.json`
  };
});

// 3. Save the master alias dictionary as index.json
fs.writeFileSync(path.join(registryDir, 'index.json'), JSON.stringify(masterIndex, null, 2));

console.log(`✅ Registry built! Alias dictionary generated for ${components.length} components.`);