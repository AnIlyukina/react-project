import type { Meta, StoryObj } from '@storybook/react';
import { AppSelect } from './AppSelect';

const meta = {
    title: 'shared/AppSelect',
    component: AppSelect,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Лист',
        value: '2',
        options: [
            {
                value: '1',
                content: 'Первый',
            },
            {
                value: '2',
                content: 'Второй',
            },
        ],
    },
};

export const WithoutLabel: Story = {
    args: {
        value: '1',
        options: [
            {
                value: '1',
                content: 'Первый',
            },
            {
                value: '2',
                content: 'Второй',
            },
        ],
    },
};
