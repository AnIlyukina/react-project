import type {Meta, StoryObj} from '@storybook/react';
import {PageError} from './PageError';
import {ThemeDecorator} from 'shared/config/Decorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemePtovider';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PageError>;

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
