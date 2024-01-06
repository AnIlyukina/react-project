import type {Meta, StoryObj} from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import {ThemeDecorator} from '@/shared/config/Decorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {},
};


export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
