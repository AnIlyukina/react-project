import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from '@/shared/config/Decorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {},
};
Light.decorators = [
    StoreDecorator({ login: { username: '123', password: '123' } }),
];

export const Dark: Story = {
    args: {},
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ login: { username: '123', password: '123' } }),
];

export const WithError: Story = {
    args: {},
};
WithError.decorators = [
    StoreDecorator({
        login: { username: '123', password: '123', error: 'Ошибочка вышла' },
    }),
];

export const Loading: Story = {
    args: {},
};
Loading.decorators = [StoreDecorator({ login: { isLoading: true } })];
