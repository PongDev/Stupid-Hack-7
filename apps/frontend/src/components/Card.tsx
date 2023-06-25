'use client';

import { FC } from 'react';

interface CardProps {
    text: string;
    role: 'villager' | 'seer' | 'werewolf';
}

export const Card: FC<CardProps> = ({ text, role }) => {
    return (
        <div
            className={`w-72 h-60 p-6 flex flex-col gap-2 rounded-3xl border-4 relative ${
                role === 'villager' ? 'border-mued' : 'border-som'
            }
            ${role === 'seer' && 'border-dashed'}`}
        >
            <h2 className="text-xl text-mued">{text}</h2>
            <h1 className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {role === 'villager' && 'ชาวบ้าน'}
                {role === 'seer' && 'ผู้หยั่งรู้'}
                {role === 'werewolf' && 'หมาป่า'}
            </h1>
        </div>
    );
};
