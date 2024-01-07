import type {Meta, StoryObj} from '@storybook/react';
import {RatingCard} from './RatingCard';

const meta = {
    title: 'shared/Rating',
    component: RatingCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {},
};
