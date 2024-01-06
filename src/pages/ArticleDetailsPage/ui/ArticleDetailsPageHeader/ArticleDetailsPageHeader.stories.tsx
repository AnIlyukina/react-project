import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';
import {StoreDecorator} from '@/shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
};

Primary.decorators = [StoreDecorator({})];
