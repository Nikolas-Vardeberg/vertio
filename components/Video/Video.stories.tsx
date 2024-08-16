import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Video } from './Video'

export default {
  title: 'Modules/Video',
  component: Video,
} as ComponentMeta<typeof Video>

const Template: ComponentStory<typeof Video> = (
  args: ComponentProps<typeof Video>
) => <Video {...args} />

export const AllOptions = Template.bind({})
