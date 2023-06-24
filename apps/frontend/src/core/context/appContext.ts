'use client';
import { createContext, useContext } from 'react';

export type themeOptionsType = 'default' | 'dark' | 'subaru' | 'bocchi';

interface IAppContext {
    themeOptions: themeOptionsType;
    handleThemeOptions: (newTheme: themeOptionsType) => void;
    players: string[];
}

export const AppContext = createContext<IAppContext>({
    themeOptions: 'default',
    handleThemeOptions: () => null,
    players: [],
});

export function useAppContext() {
    return useContext(AppContext);
}
