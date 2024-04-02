import { useEffect, useState } from "react";

type Color = 'red' | 'yellow' | 'green';

const config: Record<Color, { backgroundColor: string; duration: number; next: Color }> = {
    red: {
        backgroundColor: 'red',
        duration: 5000,
        next: 'green',
    },
    yellow: {
        backgroundColor: 'yellow',
        duration: 300,
        next: 'red',
    },
    green: {
        backgroundColor: 'green',
        duration: 4000,
        next: 'yellow',
    },
};

export const TrafficLight = () => {
    const [currentColor, setCurrentColor] = useState<Color>('green');

    useEffect(() => {
        const { duration, next } = config[currentColor];

        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);

        return () => {
            clearTimeout(timerId);
        };
    }, [currentColor]);
    return (
        <div className="flex flex-col items-center pt-3">
            <div
                className={'bg-[#000] rounded-[8px] inline-flex flex-col p-[8px] gap-[8px]'}>
                {Object.keys(config).map((color) => (
                    <div
                        key={color}
                        className="w-12 h-12 rounded-[9999px] bg-[#555]"
                        style={{
                            backgroundColor: color === currentColor ? config[color].backgroundColor : undefined
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
