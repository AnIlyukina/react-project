import type {Meta, StoryObj} from '@storybook/react';
import {Dropdown} from './Dropdown';
import {AppButton} from 'shared/ui/AppButton/AppButton';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {
        trigger: <AppButton>Open!!! </AppButton>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            }
        ]
    },
};
