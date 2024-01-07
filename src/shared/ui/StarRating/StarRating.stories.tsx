import type {Meta, StoryObj} from '@storybook/react';
import {StarRating} from './StarRating';

const meta = {
    title: 'shared/StarRating',
    component: StarRating,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {},
};
