import { AppProvider } from '$context/appProvider';
import { Layout } from '$modules/Layout';
import '$styles/globals.css';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
    title: 'werewolf',
    description: 'โง่',
};

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-poppins',
});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${poppins.variable}`}>
                <AppProvider>
                    <Layout>{children}</Layout>
                </AppProvider>
            </body>
        </html>
    );
}
