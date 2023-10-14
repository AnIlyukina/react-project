import type {Preview} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/Decorator/ThemeDecorator';
import {Theme} from '../../src/app/providers/ThemePtovider';
import {RouterDecorator} from '../../src/shared/config/Decorator/RouterDecorator';
import {StyleDecorator} from '../../src/shared/config/Decorator/StyleDecorator';
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT),
    ]

};


export default preview;
