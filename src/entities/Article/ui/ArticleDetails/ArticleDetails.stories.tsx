import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';

const meta = {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {
        id: '1',
    },
};
