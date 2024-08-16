/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from './sanity/lib/sanity.api'
import { deskStructure } from './sanity/plugins/deskStructure'
import { previewDocumentNode } from './sanity/plugins/previewPane'
import { productionUrl } from './sanity/plugins/productionUrl'
import { pageStructure, singletonPlugin } from './sanity/plugins/settings'
import footer from './sanity/schemas/documents/footer'
import navigation from './sanity/schemas/documents/navigation'
import { media } from 'sanity-plugin-media'
import page from './sanity/schemas/documents/page'
import mainHero from './sanity/schemas/objects/mainHero'
import quote from './sanity/schemas/objects/quote'
import Fastlink from './sanity/schemas/objects/fastlink'
import DualGrid from './sanity/schemas/objects/DualGrid'
import video from './sanity/schemas/objects/video'
import mediaModule from './sanity/schemas/objects/mediaModule'
import blog from './sanity/schemas/documents/blog'
import text from './sanity/schemas/objects/text'
import image from './sanity/schemas/objects/image'


const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [page.name]

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      // Documents
      page,
      blog,
      navigation,
      footer,
      // Objects
      mainHero,
      quote,
      DualGrid,
      Fastlink,
      video,
      mediaModule,
      text,
      image
    ],
  },
  plugins: [
    deskTool({
      structure: deskStructure,
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
})
