import type {Meta, StoryObj} from '@storybook/react';
import {ArticleInfiniteList} from "./ArticleInfiniteList";

const meta = {
    title: 'ArticleInfiniteList',
    component: ArticleInfiniteList,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
};
