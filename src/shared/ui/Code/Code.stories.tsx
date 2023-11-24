import type {Meta, StoryObj} from '@storybook/react';
import {Code} from "./Code";

const meta = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'gngndgr rgrgrgr'
    },
};
