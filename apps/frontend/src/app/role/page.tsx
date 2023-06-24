'use client';

import { NextPage } from 'next';
import { CSSProperties } from 'react';
import { Card } from '@/components';

const IndexPage: NextPage = () => {
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
                <Card role="villager" text="People 1" />
                <Card role="villager" text="People 2" />
                <Card role="villager" text="People 3" />
                <Card role="villager" text="People 4" />
                <Card role="villager" text="People 5" />
                <Card role="villager" text="People 6" />
                <Card role="villager" text="People 7" />
                <Card role="villager" text="People 8" />
            </div>
        </div>
    );
};

export default IndexPage;
