import type {Meta, StoryObj} from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entries/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
};
