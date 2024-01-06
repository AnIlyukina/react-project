import type {Meta, StoryObj} from '@storybook/react';
import {AppText, TextSize, TextTheme} from './AppText';
import {ThemeDecorator} from '@/shared/config/Decorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppText',
    component: AppText,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextPrimary: Story = {
    args: {
        text: 'Text',
        title: 'Title'
    },
};

export const TextError: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        theme: TextTheme.ERROR
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title'
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const TextDark: Story = {
    args: {
        text: 'Text',
        title: 'Title'
    },
};

TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title'
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Text',
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];


export const SizeL: Story = {
    args: {
        text: 'Text',
        title: 'Title dvdvdv dvdvdv dvdv',
        size: TextSize.L
    },
};

export const SizeM: Story = {
    args: {
        text: 'Text',
        title: 'Title dvdvdv dvdvdv dvdv',
        size: TextSize.M
    },
};

export const SizeS: Story = {
    args: {
        text: 'Text',
        title: 'Title dvdvdv dvdvdv dvdv',
        size: TextSize.S
    },
};