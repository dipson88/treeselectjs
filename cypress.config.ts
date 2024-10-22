import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    downloadsFolder: '__tests__/cypress/downloads',
    fileServerFolder: '__tests__/cypress/fixtures',
    screenshotsFolder: '__tests__/cypress/screenshots',
    specPattern: '__tests__/cypress/**/*.cy.ts',
    supportFile: '__tests__/cypress/support/e2e.ts',
    supportFolder: '__tests__/cypress/support',
    videosFolder: '__tests__/cypress/videos'
  }
})
