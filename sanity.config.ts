'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {resolve} from './sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schema'
import {structure} from './sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'
import { languagesSanity } from './config/i18n/i18n-config'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schemaTypes
  },
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draftMode/enable',
        },
      },
      resolve,
    }),
    documentInternationalization({
      supportedLanguages: languagesSanity,
      schemaTypes: [], // HERE YOU CAN SPECIFY WHICH SCHEMA TYPES TO ENABLE IT FOR
    }),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Spanish'},
      ],
      defaultLanguages: ['es'],
      fieldTypes: ['string'],
    })
  ],
})