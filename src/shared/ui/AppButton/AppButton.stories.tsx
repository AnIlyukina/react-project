import type {Meta, StoryObj} from '@storybook/react';
import {AppButton, ThemeButton} from './AppButton';
import {ThemeDecorator} from 'shared/config/Decorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemePtovider';

const meta = {
    title: 'shared/Button',
    component: AppButton,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];