import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;


// export const Normal = Story = {
//     args: {},
// };
