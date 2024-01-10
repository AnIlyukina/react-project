import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/Decorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/Decorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {},
};
Light.decorators = [
    StoreDecorator({
        profile: {
            data: {
                username: 'admin',
                avatar: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
                age: 11,
                country: Country.Russia,
                first: 'SA',
                lastname: 'sdfji',
                city: 'asas',
                currency: Currency.EUR,
            },
        },
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            data: {
                username: 'admin',
                avatar: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
                age: 11,
                country: Country.Russia,
                first: 'SA',
                lastname: 'sdfji',
                city: 'asas',
                currency: Currency.EUR,
            },
        },
    }),
];
