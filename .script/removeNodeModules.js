const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const packagesDir = path.join(repoRoot, 'packages')

function removeNodeModules(dir) {
  const nodeModulesPath = path.join(dir, 'node_modules')

  if (fs.existsSync(nodeModulesPath)) {
    fs.rmSync(nodeModulesPath, { recursive: true })
    console.log(`Removed: ${nodeModulesPath}`)
  }
}

// Remove node_modules in each package
if (fs.existsSync(packagesDir)) {
  const entries = fs.readdirSync(packagesDir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory()) {
      removeNodeModules(path.join(packagesDir, entry.name))
    }
  }
}

// Remove root node_modules if present
removeNodeModules(repoRoot)
