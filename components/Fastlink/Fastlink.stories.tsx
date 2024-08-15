import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Fastlink } from './Fastlink'

export default {
  title: 'Modules/Fastlink',
  component: Fastlink,
} as ComponentMeta<typeof Fastlink>

const Template: ComponentStory<typeof Fastlink> = (
  args: ComponentProps<typeof Fastlink>
) => <Fastlink {...args} />

export const AllOptions = Template.bind({})
