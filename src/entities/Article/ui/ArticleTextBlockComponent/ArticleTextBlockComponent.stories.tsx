import type {Meta, StoryObj} from '@storybook/react';
import {ArticleTextBlockComponent} from './ArticleTextBlockComponent';

const meta = {
    title: 'shared/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {},
};
