import type {Meta, StoryObj} from '@storybook/react';
import ArticleRating from './ArticleRating';
import {StoreDecorator} from '@/shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {
        articleId: '1',
    },
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        }
    })
];

