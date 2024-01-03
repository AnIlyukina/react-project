import type {Meta, StoryObj} from '@storybook/react';
import {ArticleTextBlockComponent} from './ArticleTextBlockComponent';
import {StoreDecorator} from 'shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'entries/Article/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Normal: Story = {
    args: {
        // @ts-ignore
        block: {

        }
    },
};

Normal.decorators = [StoreDecorator({})];
