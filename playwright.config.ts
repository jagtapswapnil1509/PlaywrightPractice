import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Restrict Playwright to the intended tests folder so tests in other
  // chapters or accidental imports won't be discovered when running from
  // the workspace root.
  testDir: './Chapter_19_PlaywrightBasics/tests',
  fullyParallel: true,
  retries: 0,
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
