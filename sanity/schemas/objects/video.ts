import { Square, VideoCamera } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Video',
  title: 'Video',
  type: 'object',
  icon: VideoCamera,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
    }),
    defineField({
        type: 'image',
        options: {
          hotspot: true,
        },
        name: 'videoImage',
        title: 'Video Image',
      }),
      defineField({
        type: 'string',
        name: 'videoImageAlt',
        title: 'Video Image Alt',
      }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'heroImage',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Dual Grid',
        media,
        title,
      }
    },
  },
})
