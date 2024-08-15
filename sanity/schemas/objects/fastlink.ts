import { FastForward, Link } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Fastlink',
  title: 'Hurtig Link',
  type: 'object',
  icon: FastForward,
  fields: [
    defineField({
      type: 'string',
      name: 'eyebrow',
      title: 'Tittel',
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'fastlinkImage',
      title: 'Hurtiglink Bilde',
    }),
    defineField({
      type: 'string',
      name: 'fastlinkImageAlt',
      title: 'Hurtiglink Image Alt',
    }),
    defineField({
        type: "array",
        name: "blocks",
        title: "Blocks",
        of: [
            {
                type: "object",
                name: "hurtigLink",
                icon: Link,
                fields: [
                    defineField({
                        type: "string",
                        name: "service",
                        title: "Tjeneste",
                        validation: (rule) => rule.required(),
                    }),
                    defineField({
                        type: "string",
                        name: "url",
                        title: "Lenke",
                        validation: (rule) => rule.required(),
                    })
                ]
            }
        ]
    })
  ],
  preview: {
    select: {
      title: 'eyebrow',
    },
    prepare({ title, }) {
      return {
        subtitle: 'Hurtiglink',
        title,
      }
    },
  },
})
