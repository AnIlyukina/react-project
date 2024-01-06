import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetailsComment} from './ArticleDetailsComment';
import {StoreDecorator} from '@/shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComment',
    component: ArticleDetailsComment,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleDetailsComment>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    //@ts-ignore
    args: {},
};

Primary.decorators = [StoreDecorator({})];
