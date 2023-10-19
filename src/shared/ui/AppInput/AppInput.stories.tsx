import type {Meta, StoryObj} from '@storybook/react';
import {AppInput} from './AppInput';
import {ThemeDecorator} from 'shared/config/Decorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppInput',
    component: AppInput,
    tags: ['autodocs'],
    argTypes: {
    },

} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {
        placeholder: 'Text',
        autofocus: true,
        value: '11111'

    },
};

export const Dark: Story = {
    args: {
        placeholder: 'Text',
        autofocus: true,
        value: '11111'
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];