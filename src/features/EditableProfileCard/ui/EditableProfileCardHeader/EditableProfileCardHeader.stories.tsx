import type {Meta, StoryObj} from '@storybook/react';
import {EditableProfileCardHeader} from './EditableProfileCardHeader';
import {StoreDecorator} from 'shared/config/Decorator/StoreDecorator';

const meta = {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
};
Primary.decorators = [StoreDecorator({})];