import type {Meta, StoryObj} from '@storybook/react';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'shared/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {},
};
