import { useRef } from "react";

export interface SliderProps {
    min: number;
    max: number;
    value: number;
    step?: number;
}

function calcSliderBackground(props: SliderProps, value: number) {
    const progress = ((value - props.min) / (props.max - props.min)) * 100;
    return `linear-gradient(to right, var(--primary-dark) ${progress}%, transparent ${progress}%)`;
}

export default function Slider(props: SliderProps) {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="flex p-[1.375rem] w-full">
            <div className="flex w-full justify-center items-center relative">
                <div
                    className="
                        w-full h-2 rounded-full
                        bg-background-4 bg-opacity-25
                    "
                >
                </div>
                <input
                    ref={ref}
                    type="range"
                    className="
                        appearance-none outline-none absolute w-full h-2 rounded-full cursor-pointer
                        bg-transparent component-slider
                    "
                    style={{
                        background: calcSliderBackground(props, props.value),
                    }}
                    min={props.min}
                    max={props.max}
                    defaultValue={props.value}
                    step={props.step}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const value = Number(event.target.value);

                        if (ref.current) {
                            ref.current.style.background = calcSliderBackground(props, value);
                        }
                    }}
                />
            </div>
        </div>
    );
}
