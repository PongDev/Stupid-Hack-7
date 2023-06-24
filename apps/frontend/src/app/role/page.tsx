import { NextPage } from 'next';
import { CSSProperties } from 'react';

const IndexPage: NextPage = () => {
    const cardStyle: CSSProperties = {
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '5px',
    };

    return (
        <div
            style={{
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <h1>Werewolf (Now Villager)</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}
            >
                <div style={cardStyle}>People1</div>
                <div style={cardStyle}>People2</div>
                <div style={cardStyle}>People3</div>
                <div style={cardStyle}>People4</div>
                <div style={cardStyle}>People5</div>
                <div style={cardStyle}>People6</div>
                <div style={cardStyle}>People7</div>
                <div style={cardStyle}>People8</div>
            </div>
        </div>
    );
};

export default IndexPage;
