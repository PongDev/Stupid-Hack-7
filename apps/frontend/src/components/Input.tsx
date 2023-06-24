import { useAppContext } from '@/core/context';
import { log } from 'console';
import { ChangeEvent, FC, useState } from 'react';

interface InputProps {
    field: 'numPlayer' | 'numWerewolf' | 'numSeer';
}

export const Input: FC<InputProps> = ({ field }) => {
    const { setNumbers, numbers, players, setPlayers } = useAppContext();
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (field === 'numPlayer' && +e.target.value > 18) {
            setValue('18');
            setNumbers((prev) => ({ ...prev, [field]: 18 }));
            return;
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

        setNumbers((prev) => ({ ...prev, [field]: +e.target.value }));
        if (field === 'numPlayer') {
            const newPlayers = [...players];
            if (newPlayers.length < +e.target.value) {
                while (newPlayers.length < +e.target.value) {
                    newPlayers.push({
                        name: '',
                        role: '' as 'werewolf' | 'seer' | 'villager',
                    });
                }
                setPlayers(newPlayers);
            }
            if (newPlayers.length > +e.target.value)
                setPlayers((prev) => prev.slice(0, +e.target.value));
        }
    };
    return (
        <input
            className="border-2 border-black rounded-full h-8 p-4 text-center"
            type="number"
            value={value}
            onChange={(e) => handleChange(e)}
        />
    );
};
