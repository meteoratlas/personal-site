import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {vars} from './vars'

export default defineConfig({
  name: 'default',
  title: 'personal',

  projectId: vars.projectId,
  dataset: vars.dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
