'use client';

import { Card } from '@/components';
import { Button } from '@/components/Button';
import { useAppContext } from '@/core/context';
import { NextPage } from 'next';
import Link from 'next/link';

const IndexPage: NextPage = () => {
    const { players } = useAppContext();
    return (
        <div className="h-screen w-screen pt-16 font-poppins flex flex-col items-center">
            <h1 className="text-4xl text-center mb-8">Werewolf</h1>
            <div className="grid grid-cols-4 gap-8 max-w-7xl">
                {players.map((p, index) => {
                    return (
                        <Card key={index} role={p.role} text={`${p.name}`} />
                    );
                })}
            </div>
            <div className="mt-8">
                <Link href={'/'}>
                    <Button>กลับ</Button>
                </Link>
            </div>
        </div>
    );
};

export default IndexPage;
