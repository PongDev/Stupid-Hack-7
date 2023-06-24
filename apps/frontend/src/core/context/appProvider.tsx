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

    const randomRoles = () => {
        const newPlayers = [...players];
        const roles = ['werewolf', 'seer', 'villager'];
        const numRoles = {
            werewolf: numbers.numWerewolf,
            seer: numbers.numSeer,
            villager: numbers.numPlayer - numbers.numWerewolf - numbers.numSeer,
        };
        const rolesArr = [];
        for (const [key, value] of Object.entries(numRoles)) {
            for (let i = 0; i < value; i++) {
                rolesArr.push(key);
            }
        }
        for (let i = 0; i < newPlayers.length; i++) {
            const randomIndex = Math.floor(Math.random() * rolesArr.length);
            newPlayers[i].role = rolesArr[randomIndex] as
                | 'werewolf'
                | 'seer'
                | 'villager';
            rolesArr.splice(randomIndex, 1);
        }
        setPlayers(newPlayers);
        console.log(newPlayers);
    };

    return (
        <AppContext.Provider
            value={{
                themeOptions,
                handleThemeOptions,
                numbers,
                setNumbers,
                players,
                setPlayers,
                randomRoles,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
