import React, {ErrorInfo, ReactNode, Suspense} from 'react';
import {PageError} from '@/widgets/PageError/ui/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoudaryState {
    hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoudaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback=''>
                    <PageError/>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;