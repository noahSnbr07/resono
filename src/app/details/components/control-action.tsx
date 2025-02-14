import Image from "next/image";

interface ControlActionInterface {
    svg: string;
    name: string;
    onCLick: () => void;
}

export default function ControlAction({ svg, name, onCLick }: ControlActionInterface) {


    return (
        <button onClick={() => onCLick()}>
            <Image
                src={svg}
                title={`${name} icon`}
                alt={`${name} icon`}
                height={24}
                width={24}
            />
        </button>
    );
}