'use client';

import { Card } from '@/components';
import { Button } from '@/components/Button';
import { useAppContext } from '@/core/context';
import { NextPage } from 'next';
import Link from 'next/link';

const IndexPage: NextPage = () => {
    const { players } = useAppContext();
    return (
        <div
            style={{
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1rem',
            }}
        >
            <h1 style={{ fontSize: '3rem', padding: '1rem' }}>
                Werewolf (Now Villager)
            </h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                }}
            >
                {players.map((p, index) => {
                    return (
                        <Card
                            key={index}
                            role={p.role}
                            text={`${index + 1}. ${p.name}`}
                        />
                    );
                })}
            </div>
            <div className="mt-4">
                <Link href={'/'}>
                    <Button>กลับ</Button>
                </Link>
            </div>
        </div>
    );
};

export default IndexPage;
