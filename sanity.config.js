import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';

const sanityConfig = defineConfig({
  projectId: '5azs66ei',
  dataset: 'production',
  title: 'Trinity Anglican Church, Halifax, Nova Scotia',
  apiVersion: '2023-04-23',
  basePath: '/admin',

  plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});

export default sanityConfig;
