'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WarningText = styled.div`
    text-align: center;
    font-size: 24px;
    margin-top: 50px;

    @media screen and (max-width: 767px) {
        font-size: 36px;
    }
`;

interface RootLayoutProps {
    children: React.ReactNode;
}

const ResponsivePage = ({ children }: RootLayoutProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
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
                    <div>หน้าจอเล็กเกินไป</div>
                    <div>ยืดโทรศัพท์คุณให้หน้าจอใหญ่ขึ้น</div>
                </WarningText>
            )}
            {!isMobile && children}
        </>
    );
};

export default ResponsivePage;
