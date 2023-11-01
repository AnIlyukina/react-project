import type {Meta, StoryObj} from '@storybook/react';
import { AppSelect } from "./AppSelect";

const meta = {
	title: 'shared/AppSelect',
	component: AppSelect,
	tags: ['autodocs'],
	argTypes: {
	},
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		label: 'Лист'
	},
};

export const WithoutLabel: Story = {
	args: {},
};