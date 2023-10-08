import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ThemeProvider from 'app/providers/ThemePtovider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
import {ErrorBoundary} from 'app/providers/errorBoundery';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
