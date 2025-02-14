"use client";

import ControlAction from "./control-action";
import detailsControlsAction from "@/constants/details-controls";

export default function Controls() {


    return (
        <div className="flex flex-col gap-4 bg-stack rounded-lg p-4 w-full">
            <input
                className="accent-accent rounded-lg appearance-none bg-stack w-full"
                step={.01}
                min={0}
                max={1}
                type="range"
            />
            <div className="flex justify-between">
                {detailsControlsAction.map((action) => (
                    <ControlAction
                        onCLick={action.onClick}
                        key={action.id}
                        name={action.name}
                        svg={action.svg}
                    />
                ))}
            </div>
        </div>
    );
}