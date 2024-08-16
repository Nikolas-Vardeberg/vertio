
import { FastForward, Link, NewspaperClipping } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'MediaModul',
  title: 'Media Modul',
  type: 'object',
  icon: NewspaperClipping,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
        type: 'string',
        name: 'body',
        title: 'Body',
      }),
   
    defineField({
        type: "array",
        name: "module",
        title: "Module",
        of: [
            {
                type: "object",
                name: "mediaModuleBox",
                icon: Link,
                fields: [
                    defineField({
                        type: "string",
                        name: "heading",
                        title: "Heading",
                        validation: (rule) => rule.required(),
                    }),
                    defineField({
                        type: "boolean",
                        name: "imageOnRight",
                        title: "Bilde på Venstre",
                        initialValue: true,
                    }),
                    defineField({
                        type: 'image',
                        options: {
                          hotspot: true,
                        },
                        name: 'image',
                        title: 'Bilde',
                      }),
                      defineField({
                        type: 'string',
                        name: 'imageAlt',
                        title: 'Media Module Image Alt',
                      }),
                      defineField({
                        type: "array",
                        name: "textLink",
                        title: "Tekst Link",
                        of: [
                           {
                            type: "object",
                            name: "textlink",
                            icon: Link,
                            fields: [
                                defineField({
                                    type: "string",
                                    name: "text",
                                    title: "Tekst",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    type: "string",
                                    name: "url",
                                    title: "Url",
                                    validation: (rule) => rule.required(),
                                }),
                            ]
                           }
                        ]
                      }),
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
