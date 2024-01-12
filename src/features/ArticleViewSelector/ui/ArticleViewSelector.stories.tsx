import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';

const meta = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
