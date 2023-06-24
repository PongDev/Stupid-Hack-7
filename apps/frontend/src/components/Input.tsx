import { FC, useState } from 'react';

export const Input: FC = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <input
                className="border-2 border-black rounded-full h-8 p-4"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};
