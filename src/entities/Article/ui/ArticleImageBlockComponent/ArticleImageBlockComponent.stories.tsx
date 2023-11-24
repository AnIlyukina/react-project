import type {Meta, StoryObj} from '@storybook/react';
import {ArticleImageBlockComponent} from './ArticleImageBlockComponent';

const meta = {
    title: 'shared/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    // @ts-ignore
    args: {},
};
