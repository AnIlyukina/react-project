import type {Meta, StoryObj} from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        src: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
        size: 150
    },
};

export const Small: Story = {
    args: {
        src: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
        size: 50,
    },
};
