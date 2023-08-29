import {defineConfig} from 'orval';

export default defineConfig({
  petstore: {
    input: './src/api/listly.yaml',
    output: {
      mode: 'tags-split',
      target: './src/api/endpoints',
      schemas: './src/api/models',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/api/customAxiosInstance.ts',
          name: 'customAxiosInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});
