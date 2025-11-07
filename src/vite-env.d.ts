// 1. Declare the shape of import.meta
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 2. Declare the shape of the environment variables
interface ImportMetaEnv {
  // This tells TypeScript that VITE_NBA_API_KEY is a required string property.
  readonly VITE_NBA_API_KEY: string;

  // Add other VITE_ variables here as you use them, e.g.:
  // readonly VITE_ANOTHER_VAR: string;
}