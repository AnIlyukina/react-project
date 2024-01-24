import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Row: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'row',
    },
};

export const Column: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'column',
    },
};

export const RowGap4: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'row',
        gap: '4',
    },
};

export const RowGap8: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'row',
        gap: '8',
    },
};

export const RowGap16: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'row',
        gap: '16',
    },
};

export const RowGap32: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'row',
        gap: '32',
    },
};

export const ColumnGap16: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'column',
        gap: '16',
    },
};

export const ColumnGap32: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: 'column',
        gap: '32',
    },
};
