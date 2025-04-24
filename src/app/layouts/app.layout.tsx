import { Outlet } from 'react-router-dom';
import { DashboardLayout, PageContainer, type Navigation } from '@toolpad/core';
import { Person, Dashboard, ShoppingCart, Login, ListAlt } from '@mui/icons-material';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import theme from '../../theme/theme';
import danmcodeIcon from '../../assets/icons/danmcode_icon.png';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <Dashboard />,
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCart />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Analytics',
    },
    {
        segment: 'reports',
        title: 'Usuarios',
        icon: <Person />,
        children: [
            {
                segment: 'sales',
                title: 'Inicios de sesión',
                icon: <Login />,
            },
            {
                segment: 'traffic',
                title: 'Lista de usuarios',
                icon: <ListAlt />,
            },
        ],
    },
];

const BRANDING = {
    logo: < img src={danmcodeIcon} alt="Danmcode icon" />,
    title: '',
};

export default function AppLayout() {
    return (
        <ReactRouterAppProvider
            navigation={NAVIGATION}
            branding={BRANDING}
            theme={theme}
        >
            <DashboardLayout defaultSidebarCollapsed>
                <PageContainer>
                    <Outlet />
                </PageContainer>
            </DashboardLayout>
        </ReactRouterAppProvider>
    );
}