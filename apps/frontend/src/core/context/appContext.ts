'use client';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type themeOptionsType = 'default' | 'dark' | 'subaru' | 'bocchi';

export type PlayersType = {
    name: string;
    role: 'werewolf' | 'seer' | 'villager';
}[];

interface IAppContext {
    themeOptions: themeOptionsType;
    handleThemeOptions: (newTheme: themeOptionsType) => void;
    numbers: {
        numPlayer: number;
        numWerewolf: number;
        numSeer: number;
    };
    setNumbers: Dispatch<
        SetStateAction<{
            numPlayer: number;
            numWerewolf: number;
            numSeer: number;
        }>
    >;
    players: PlayersType;
    setPlayers: Dispatch<SetStateAction<PlayersType>>;
    randomRoles: () => void;
}

export const AppContext = createContext<IAppContext>({
    themeOptions: 'default',
    handleThemeOptions: () => null,
    numbers: {
        numPlayer: 0,
        numWerewolf: 0,
        numSeer: 0,
    },
    setNumbers: () => null,
    players: [],
    setPlayers: () => null,
    randomRoles: () => null,
});

export function useAppContext() {
    return useContext(AppContext);
}
