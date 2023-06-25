'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WarningText = styled.div`
    text-align: center;
    font-size: 96px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #ff0000;
    color: #ffffff;
`;

interface RootLayoutProps {
    children: React.ReactNode;
}

const ResponsivePage = ({ children }: RootLayoutProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile && (
                <WarningText>
                    <div>จอเล็กไปจ้า</div>
                    <div
                        style={{
                            fontSize: '48px',
                        }}
                    >
                        เดี๋ยวเพื่อน ๆ มองไม่เห็น
                    </div>
                </WarningText>
            )}
            {!isMobile && children}
        </>
    );
};

export default ResponsivePage;
