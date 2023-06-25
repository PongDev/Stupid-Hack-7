import { Layout } from '$modules/Layout';
import '$styles/globals.css';
import { AppProvider } from '$context/appProvider';
import { Metadata } from 'next';
import ResponsivePage from '@/modules/Responsive/Responsive';

export const metadata: Metadata = {
    title: 'werewolf',
    description: 'โง่',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <AppProvider>
                    <ResponsivePage>
                        <Layout>{children}</Layout>
                    </ResponsivePage>
                </AppProvider>
            </body>
        </html>
    );
}
