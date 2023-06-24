'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { AppContext, themeOptionsType } from './appContext';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [themeOptions, setThemeOptions] =
        useState<themeOptionsType>('default');

    useEffect(() => {
        const themeOp = localStorage.getItem('themeOptions');
        if (themeOp) {
            setThemeOptions(themeOp as themeOptionsType);
        }
    }, []);

    const handleThemeOptions = (newTheme: themeOptionsType) => {
        setThemeOptions(newTheme);
        localStorage.setItem('themeOptions', newTheme);
    };

    const [players, setPlayers] = useState([]);

    return (
        <AppContext.Provider
            value={{
                players,
                themeOptions,
                handleThemeOptions,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
