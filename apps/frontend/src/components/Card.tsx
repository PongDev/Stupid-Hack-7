'use client';

import clsx from 'clsx';
import { FC } from 'react';

interface CardProps {
    text: string;
    role: 'villager' | 'seer' | 'werewolf';
}

export const Card: FC<CardProps> = ({ text, role }) => {
    return (
        <>
            {role === 'villager' && (
                <div
                    className={clsx(
                        `rounded-xl p-10 border-2 border-red border-mued`
                    )}
                >
                    <p className="text-lg">{text}</p>
                </div>
            )}
            {role === 'seer' && (
                <div
                    className={clsx(
                        `rounded-xl p-10 border-2 border-red border-som border-dashed`
                    )}
                >
                    <p className="text-lg">{text}</p>
                </div>
            )}
            {role === 'werewolf' && (
                <div
                    className={clsx(
                        `rounded-xl p-10 border-2 border-red border-som`
                    )}
                >
                    <p className="text-lg">{text}</p>
                </div>
            )}
        </>
    );
};
