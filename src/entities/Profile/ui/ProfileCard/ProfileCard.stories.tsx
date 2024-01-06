import type {Meta, StoryObj} from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import {ThemeDecorator} from '@/shared/config/Decorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';

const meta = {
    title: 'entries/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {
    },

} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        profileData: {
            username: 'admin',
            avatar: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
            age: 11,
            country: Country.Russia,
            first: 'SA',
            lastname: 'sdfji',
            city: 'asas',
            currency: Currency.EUR
        }
    },
};
export const Dark: Story = {
    args: {
        profileData: {
            username: 'admin',
            avatar: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
            age: 11,
            country: Country.Russia,
            first: 'SA',
            lastname: 'sdfji',
            city: 'asas',
            currency: Currency.EUR
        }
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const WithError: Story = {
    args: {
        error: 'true'
    },
};


export const Loading: Story = {
    args: {
        isLoading: true
    },
};



