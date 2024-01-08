import type {Meta, StoryObj} from '@storybook/react';
import {NotificationItem} from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    //@ts-ignore
    args: {},
};
