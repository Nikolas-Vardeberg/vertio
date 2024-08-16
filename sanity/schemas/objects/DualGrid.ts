import { Columns, Square } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'DualGrid',
  title: 'Dobbelt Grid',
  type: 'object',
  icon: Columns,
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
        type: "array",
        name: "rows",
        title: "Rader",
        of: [
            {
                type: "object",
                name: "grid",
                icon: Square,
                fields: [
                    defineField({
                        type: 'image',
                        options: {
                          hotspot: true,
                        },
                        name: 'rowsImage',
                        title: 'Rows Image',
                    }),
                    defineField({
                        type: 'string',
                        name: 'rowsImageAlt',
                        title: 'Rows Image Alt',
                    }),
                    defineField({
                        type: "string",
                        name: "tittel",
                        title: "Tittel",
                    })
                ]
            }
        ]
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
