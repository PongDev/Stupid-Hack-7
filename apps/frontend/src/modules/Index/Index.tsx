'use client';

import { Card, Input } from '@/components';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';
import { useAppContext } from '@/core/context';
import Link from 'next/link';
import { FC } from 'react';

export const Index: FC = () => {
    const { numbers, players, randomRoles } = useAppContext();
    return (
        <div className="h-screen w-screen">
            <h1 className="text-6xl text-center mb-10">Werewolf</h1>
            <div className="flex space-x-3 mb-10 justify-center">
                <div className="flex flex-col items-center m-2">
                    <p className="mb-2">จำนวนผู้เล่นทั้งหมด</p>
                    <Input field="numPlayer" />
                </div>
                <div className="flex flex-col items-center m-2">
                    <p className="mb-2">จำนวนหมาป่า</p>
                    <Input field="numWerewolf" />
                </div>
                <div className="flex flex-col items-center m-2">
                    <p className="mb-2">จำนวนผู้รอบรู้</p>
                    <Input field="numSeer" />
                </div>
            </div>
            {players.length > 0 && (
                <>
                    <h1 className="text-center text-4xl mb-4">ชื่อ</h1>
                    <div className="m-4 flex flex-col items-center">
                        {players.map((p, index) => (
                            <div>
                                <span className="mr-2">{index + 1}. </span>
                                <TextInput
                                    key={index}
                                    id={index}
                                    text={p.name}
                                />
                            </div>
                        ))}
                        <Link href={'/role'}>
                            <Button onClick={randomRoles}>สุ่มบท</Button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};
