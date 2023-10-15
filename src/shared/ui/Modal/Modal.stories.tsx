import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from './Modal';
import {ThemeDecorator} from 'shared/config/Decorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {
        isOpen: true,
        children: 'dvhsdjvgds sv ksdjvh d vjkdhv fk hvjdf vdjkfvdfkv dfkjv dfv'
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'dvhsdjvgds sv ksdjvh d vjkdhv fk hvjdf vdjkfvdfkv dfkjv dfv'
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];