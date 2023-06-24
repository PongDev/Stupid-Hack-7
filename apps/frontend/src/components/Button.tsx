import { FC, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick && (() => onClick())}
            className="rounded-full px-16 py-2 bg-som hover:bg-orange-500"
        >
            {children}
        </button>
    );
};
