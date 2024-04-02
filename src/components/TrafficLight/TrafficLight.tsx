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
                className={[
                    'bg-[#000] rounded-[8px] inline-flex flex-col p-[8px] gap-[8px]'
                ]
                    .filter((cls) => !!cls)
                    .join(' ')}>
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
            {/* <div className="flex flex-col">
                <div className="pt-10 flex gap-2 justify-between">
                    <label htmlFor="red" id="red">Red time (s)</label>
                    <input type="number" className="border-solid border-[1px] rounded-md" defaultValue={config['red'].duration / 1000} min={0} max={99} onBlur={(e) => {
                        const newDuration = parseInt(e.target.value, 10);
                        if (!isNaN(newDuration)) {
                            config['red'].duration = newDuration * 1000;
                            console.log(config);

                        }
                    }} />
                </div>
                <div className="pt-10 flex gap-2 justify-between">
                    <label htmlFor="yellow" id="yellow">Yellow time (s)</label>
                    <input type="number" className="border-solid border-[1px] rounded-md" defaultValue={config['yellow'].duration / 1000} min={0} max={5} onBlur={(e) => {
                        const newDuration = parseInt(e.target.value, 10);
                        if (!isNaN(newDuration)) {
                            config['yellow'].duration = newDuration * 1000;
                            console.log(config);

                        }
                    }} />
                </div>
                <div className="pt-10 flex gap-2 justify-between">
                    <label htmlFor="green" id="green">Green time (s)</label>
                    <input type="number" className="border-solid border-[1px] rounded-md" defaultValue={config['green'].duration / 1000} min={0} max={99} onBlur={(e) => {
                        const newDuration = parseInt(e.target.value, 10);
                        if (!isNaN(newDuration)) {
                            config['green'].duration = newDuration * 1000;
                            console.log(config);

                        }
                    }} />
                </div>
            </div> */}
        </div>
    )
}
