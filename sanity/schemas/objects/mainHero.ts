import { TextHOne } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'MainHero',
  title: 'Main Hero',
  type: 'object',
  icon: TextHOne,
  fields: [
    defineField({
      type: 'boolean',
      name: 'darkBackground',
      title: 'Has Dark Background',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
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
      name: 'heroImage',
      title: 'Hero Image',
    }),
    defineField({
      type: 'string',
      name: 'heroImageAlt',
      title: 'Hero Image Alt',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'heroImage',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Main Hero',
        media,
        title,
      }
    },
  },
})
