// jest.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname equivalent in ESM scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  // Use ts-jest as the transformer for .ts files
  preset: 'ts-jest', 
  
  // Set the test environment to JSDOM for React components (even though this is a utility, it's safer for a React project)
  testEnvironment: 'jsdom',
  
  // Define which files Jest should look for (matching your package.json script)
  testMatch: [
    "**/tests/**/*.test.ts" 
  ],
  
  // **Crucial for ESM/TypeScript:** Tell ts-jest where your tsconfig is and to handle modules
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      // This setting forces ts-jest to compile modules as CommonJS for Jest's runtime
      // If you are using Node 18+ and want true ESM, you would use module: 'node', 
      // but CJS is simpler for initial setup.
      isolatedModules: true, 
    },
  },

  // This prevents issues with third-party ESM dependencies if they sneak into node_modules
  // For most React projects, this is fine to omit initially.
  // transformIgnorePatterns: ['/node_modules/'],
};

export default config;