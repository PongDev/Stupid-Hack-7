'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { AppContext, PlayersType, themeOptionsType } from './appContext';

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

    const [players, setPlayers] = useState<PlayersType>([]);
    const [numbers, setNumbers] = useState({
        numPlayer: 0,
        numWerewolf: 0,
        numSeer: 0,
    });

    return (
        <AppContext.Provider
            value={{
                themeOptions,
                handleThemeOptions,
                numbers,
                setNumbers,
                players,
                setPlayers,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
