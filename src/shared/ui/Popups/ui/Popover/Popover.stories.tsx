import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta = {
    title: 'shared/Popup/Popover',
    component: Popover,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    //@ts-ignore
    args: {},
};
