import { Outlet, useNavigate } from 'react-router-dom';
import { DashboardLayout, PageContainer, type Navigation, type Session } from '@toolpad/core';
import { Person, Login, ListAlt, Home } from '@mui/icons-material';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import theme from '../../theme/theme';
import pisaIcon from '../../assets/icons/pisa.svg';
import { useMemo, useState } from 'react';
import { useAuth } from '../contexts/auth.context';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'COMPONENTES',
    },
    {
        segment: 'dashboard',
        title: 'Inicio',
        icon: <Home />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'USUARIOS',
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
    logo: < img src={pisaIcon} alt="Danmcode icon" />,
    title: '',
};

export default function AppLayout() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [session, setSession] = useState<Session | null>({
        user: {
            name: `${user?.fullname}`,
            email: user?.email,
            image: 'https://danmcode.github.io/danmcode-landing-page/assets/img/danmcode-da-1.jpg',
        },
    });

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const authentication = useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Daniel Alexander Muelas',
                        email: 'danmcode@gmail.com',
                        image: 'https://danmcode.github.io/danmcode-landing-page/assets/img/danmcode-da-1.jpg',
                    },
                });
            },
            signOut: () => {
                handleLogout();
            },
        };
    }, []);


    return <ReactRouterAppProvider
        navigation={NAVIGATION}
        branding={BRANDING}
        theme={theme}
        session={session}
        authentication={authentication}
    >
        <DashboardLayout defaultSidebarCollapsed>
            <PageContainer>
                <Outlet />
            </PageContainer>
        </DashboardLayout>
    </ReactRouterAppProvider>

}