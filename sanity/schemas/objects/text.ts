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
        initialValue: false,
      }),
      defineField({
        type: "array",
        name: "content",
        title: "Content",
        of: [
          {
            type: "block",
          }
        ],
        validation: (rule) => rule.required().min(1),
      })

  ],
  preview: {
    select: {
      content: 'content',
      isDark: 'isDark',
    },
    prepare({ content, isDark }) {
      return {
        title: 'Text Block',
        subtitle: isDark ? 'Dark Mode' : 'Light Mode',
      }
    },
  },
})