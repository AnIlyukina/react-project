import type {Meta, StoryObj} from '@storybook/react';
import {Skeleton} from "./Skeleton";
import {ThemeDecorator} from "shared/config/Decorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        width: '100%',
        height: 200
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: 200
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
CircleDark.decorators = [ThemeDecorator(Theme.PINK)];

export const PrimaryPink: Story = {
    args: {
        width: '100%',
        height: 200
    },
};
PrimaryPink.decorators = [ThemeDecorator(Theme.PINK)];

export const CirclePink: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
CirclePink.decorators = [ThemeDecorator(Theme.PINK)];