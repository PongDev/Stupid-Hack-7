import { FC, PropsWithChildren } from 'react';

export const Button: FC<PropsWithChildren> = ({ children }) => {
    return (
        <button className="w-1/3 rounded-full px-16 py-2 bg-som hover:bg-orange-500">
            {children}
        </button>
    );
};
