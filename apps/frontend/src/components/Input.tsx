import { useAppContext } from '@/core/context';
import { ChangeEvent, FC, useState } from 'react';

interface InputProps {
    field: 'numPlayer' | 'numWerewolf' | 'numSeer';
}

const maxPlayer = 18;

export const Input: FC<InputProps> = ({ field }) => {
    const { setNumbers, numbers, players, setPlayers } = useAppContext();
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (field === 'numPlayer' && +e.target.value > 18) {
            setValue(maxPlayer.toString());
            setNumbers((prev) => ({ ...prev, [field]: 18 }));
        }
        if (
            field === 'numSeer' &&
            +e.target.value + numbers.numWerewolf > numbers.numPlayer
        ) {
            setValue((numbers.numPlayer - numbers.numWerewolf).toString());
            setNumbers((prev) => ({
                ...prev,
                [field]: numbers.numPlayer - numbers.numWerewolf,
            }));
            return;
        }
        if (
            field === 'numWerewolf' &&
            +e.target.value + numbers.numSeer > numbers.numPlayer
        ) {
            setValue((numbers.numPlayer - numbers.numSeer).toString());
            setNumbers((prev) => ({
                ...prev,
                [field]: numbers.numPlayer - numbers.numSeer,
            }));
            return;
        }

        setNumbers((prev) => ({
            ...prev,
            [field]: Math.min(maxPlayer, +e.target.value),
        }));
        if (field === 'numPlayer') {
            const newPlayers = [...players];
            if (newPlayers.length < Math.min(maxPlayer, +e.target.value)) {
                while (
                    newPlayers.length < Math.min(maxPlayer, +e.target.value)
                ) {
                    newPlayers.push({
                        name: '',
                        role: '' as 'werewolf' | 'seer' | 'villager',
                    });
                }
                setPlayers(newPlayers);
            }
            if (newPlayers.length > Math.min(maxPlayer, +e.target.value))
                setPlayers((prev) =>
                    prev.slice(0, Math.min(maxPlayer, +e.target.value))
                );
        }
    };
    return (
        <input
            className="border-4 border-mued rounded-full h-8 p-4 text-center focus:border-som focus:outline-none hover:border-som transition duration-300 ease-in-out"
            type="number"
            value={value}
            onChange={(e) => handleChange(e)}
        />
    );
};
