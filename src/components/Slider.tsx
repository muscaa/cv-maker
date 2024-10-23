import { useRef } from "react";

export interface SliderProps {
    min: number;
    max: number;
    value: number;
    step?: number;
    onAction?: (value: number) => void;
    className?: string;
}

export default function Slider(props: SliderProps) {
    const ref = useRef<HTMLInputElement>(null);

    const calcSliderBackground = (props: SliderProps, value: number) => {
        const progress = ((value - props.min) / (props.max - props.min)) * 100;
        return `linear-gradient(to right, var(--primary-dark) ${progress}%, transparent ${progress}%)`;
    };

    return (
        <div className={`flex py-1 min-w-4 relative ${props.className}`}>
            <div
                className="
                    w-full h-2 rounded-full
                    bg-background-4 bg-opacity-25
                    shadow-md shadow-shadow
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

                    props.onAction?.(value);
                }}
            />
        </div>
    );
}
