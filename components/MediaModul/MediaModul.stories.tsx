import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MediaModul } from './MediaModul'

export default {
  title: 'Modules/MediaModul',
  component: MediaModul,
} as ComponentMeta<typeof MediaModul>

const Template: ComponentStory<typeof MediaModul> = (
  args: ComponentProps<typeof MediaModul>
) => <MediaModul {...args} />

export const AllOptions = Template.bind({})
