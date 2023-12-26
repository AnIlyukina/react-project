import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetailsComment} from "./ArticleDetailsComment";

const meta = {
    title: 'ArticleDetailsComment',
    component: ArticleDetailsComment,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleDetailsComment>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
};
