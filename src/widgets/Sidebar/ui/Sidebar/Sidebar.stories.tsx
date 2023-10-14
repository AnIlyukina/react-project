import type {Meta, StoryObj} from '@storybook/react';
import {Sidebar} from './Sidebar';
import {ThemeDecorator} from 'shared/config/Decorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemePtovider';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Sidebar>;

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
