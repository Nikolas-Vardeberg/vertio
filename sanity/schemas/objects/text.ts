import { TextT } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Text',
  title: 'Text',
  type: 'object',
  icon: TextT,
  fields: [
    defineField({
        type: 'boolean',
        name: 'isDark',
        title: 'Is Dark?',
        initialValue: true,
        validation: (rule) => rule.required(),
      }),
      defineField({
        type: 'string',
        name: 'heading',
        title: 'Heading',
      }),
      defineField({
        type: 'text',
        name: 'body',
        title: 'Body',
        validation: (rule) => rule.required(),
      }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'Heading',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Text',
        media,
        title,
      }
    },
  },
})