import type { Meta, StoryObj } from '@storybook/react';
import {AppButton, ThemeButton} from './AppButton';

const meta = {
    title: 'shared/Button',
    component: AppButton,
    parameters: {
        layout: 'centered',
    },
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
