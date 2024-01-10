import { AppButton, ThemeButton } from '@/shared/ui/AppButton/AppButton';
import { render, screen } from '@testing-library/react';

describe('AppButton', () => {
    test('проверка отрисовки в дом', () => {
        render(<AppButton> Test </AppButton>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('проверка наличия класса', () => {
        render(<AppButton theme={ThemeButton.CLEAR}> Test </AppButton>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
