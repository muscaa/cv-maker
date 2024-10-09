export interface SliderProps {
    min?: number;
    max?: number;
    defaultValue?: number;
    step?: number;
}

export default function Slider(props: SliderProps) {
    return (
        <input
            type="range"
            className="
                appearance-none w-full h-2 cursor-pointer rounded-full
                bg-background-4 bg-opacity-25
                border border-background-4 border-opacity-25

                [&::-moz-range-thumb]:appearance-none [&::-ms-thumb]:appearance-none [&::-webkit-slider-thumb]:appearance-none
                [&::-moz-range-thumb]:bg-primary [&::-ms-thumb]:bg-primary [&::-webkit-slider-thumb]:bg-primary
                [&::-moz-range-thumb]:border-none [&::-ms-thumb]:border-none [&::-webkit-slider-thumb]:border-none
            "
            min={props.min}
            max={props.max}
            defaultValue={props.defaultValue}
            step={props.step}
        />
    );
}
