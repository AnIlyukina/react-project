import { Story } from '@storybook/react';
import 'app/styles/index.scss';
export const StyleDecorator = (StoryComponent: Story) => (
    <div>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <StoryComponent />
    </div>
);