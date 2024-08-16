import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DualGrid } from './DualGrid'

export default {
  title: 'Modules/DualGrid',
  component: DualGrid,
} as ComponentMeta<typeof DualGrid>

const Template: ComponentStory<typeof DualGrid> = (
  args: ComponentProps<typeof DualGrid>
) => <DualGrid {...args} />

export const AllOptions = Template.bind({})
