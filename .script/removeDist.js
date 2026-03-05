const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const packagesDir = path.join(repoRoot, 'packages')

function removeDist(dir) {
  const distPath = path.join(dir, 'dist')

  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true })
    console.log(`Removed: ${distPath}`)
  }
}

// Remove dist in each package
if (fs.existsSync(packagesDir)) {
  const entries = fs.readdirSync(packagesDir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory()) {
      removeDist(path.join(packagesDir, entry.name))
    }
  }
}

// Remove root dist if present
removeDist(repoRoot)
