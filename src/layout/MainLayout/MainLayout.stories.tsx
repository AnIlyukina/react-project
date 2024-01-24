import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './MainLayout';

const meta = {
    title: 'shared/MainLayout',
    component: MainLayout,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    // @ts-ignore
    args: {},
};
