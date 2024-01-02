import type {Meta, StoryObj} from '@storybook/react';
import AboutPage from './AboutPage';
import {ThemeDecorator} from 'shared/config/Decorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta = {
    title: 'pages/AdminPanelPage',
    component: AboutPage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof AboutPage>;

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
