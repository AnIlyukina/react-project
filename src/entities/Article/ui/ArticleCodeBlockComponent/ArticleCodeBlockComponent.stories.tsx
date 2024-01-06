import type {Meta, StoryObj} from '@storybook/react';
import {ArticleCodeBlockComponent} from './ArticleCodeBlockComponent';
import {StoreDecorator} from '@/shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'entries/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    // @ts-ignore
    args: {},
};
Normal.decorators = [StoreDecorator({})];
