import { Layout } from '$modules/Layout';
import '$styles/globals.css';
import { Metadata } from 'next';
// import { AppProvider } from "src/core/contexts/appProvider";

export const metadata: Metadata = {
    title: 'werewolf',
    description: 'โง่',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en">
                <body>
                    {/* <AppProvider> */}
                    <Layout>{children}</Layout>
                    {/* </AppProvider> */}
                </body>
            </html>
        </>
    );
}
