import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Quote } from './Quote'

export default {
  title: 'Modules/Quote',
  component: Quote,
} as ComponentMeta<typeof Quote>

const Template: ComponentStory<typeof Quote> = (
  args: ComponentProps<typeof Quote>
) => <Quote {...args} />

export const AllOptions = Template.bind({})
