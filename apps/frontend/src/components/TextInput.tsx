import { useAppContext } from '@/core/context';
import { ChangeEvent, FC, useState } from 'react';

interface TextInputProps {
    id: number;
    text: string;
}

export const TextInput: FC<TextInputProps> = ({ id, text }) => {
    const { setPlayers } = useAppContext();
    const [value, setValue] = useState(text);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setPlayers((prev) => {
            const newPlayers = [...prev];
            newPlayers[id].name = e.target.value;
            return newPlayers;
        });
    };
    return (
        <input
            className="border-2 border-black rounded-full h-8 p-4 text-center mb-4"
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
        />
    );
};
