import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}
export function RequireAuth(props: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const { children, roles } = props;

    const userRole = useSelector(getUserRoles);

    const hasRequiresRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRoles) => {
            return userRole?.includes(requiredRoles);
        });
    }, [roles, userRole]);

    if (!hasRequiresRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }
    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    return children;
}
