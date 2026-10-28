// vitest.config.ts
import {defineProject} from "vitest/config";
import {playwright} from "@vitest/browser-playwright";

export default defineProject({
    test: {
        globals: true, // Allows using `describe`, `it`, `expect` without imports
        //setupFiles: './src/setupTests.ts', // File for test setup (see below)
        include: ['src/**/*.test.ts'],
        exclude: ['src/**/*.browser.test.ts'],
        projects: [
            {
                test: {
                    globals: true,
                    include: ['src/**/*.test.{ts,tsx}'],
                    // color of the name label can be changed
                    name: { label: 'jsdom', color: 'green' },
                    environment: 'jsdom',
                    setupFiles: './src/setupTests.ts', // File for test setup
                }
            }
        ],
    }
})