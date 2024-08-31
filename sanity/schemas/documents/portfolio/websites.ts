import { Browser } from 'phosphor-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'websites',
  title: 'Websites',
  icon: Browser,
  fields: [
    defineField({
        name: "projectTitle",
        title: "Title",
        type: "string",
    }),
    defineField({
        title: "slug",
        name: "slug",
        type: "slug",
        description: "The link which the project will be at. eg. projects/slug",
        options: {
            source: "projectTitle",
            maxLength: 96,
        }
    }),
  ],
  preview: {
    select: {
        title: "projectTitle",
    }
  }
})
