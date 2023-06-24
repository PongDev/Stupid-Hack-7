'use client';

import { Card, Input } from '@/components';
import { FC } from 'react';

export const Index: FC = () => {
    return (
        <div className="h-screen w-screen bg-red-100">
            <h1>werewolf</h1>
            <div className="flex space-x-3">
                <Input />
                <Card text="as" role="villager" />
                <Card text="as" role="werewolf" />
                <Card text="as" role="seer" />
                <p className="text-namnguen">ds</p>
            </div>
        </div>
    );
};
