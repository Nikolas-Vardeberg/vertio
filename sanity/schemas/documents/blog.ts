import { Browser } from 'phosphor-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'blog',
  title: 'Blogs',
  icon: Browser,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [
        defineArrayMember({ type: 'MainHero' }),
        defineArrayMember({ type: 'Quote' }),
        defineArrayMember({ type: "Fastlink" }),
        defineArrayMember({ type: "DualGrid" }),
        defineArrayMember({ type: "Video" }),
        defineArrayMember({ type: "MediaModul" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})
