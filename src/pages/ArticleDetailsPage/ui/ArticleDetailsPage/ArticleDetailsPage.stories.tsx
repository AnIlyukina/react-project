import type {Meta, StoryObj} from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import {StoreDecorator} from '@/shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {},
};
Normal.decorators = [StoreDecorator({})];
