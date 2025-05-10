'use client';

import React from "react";

export interface ViewOption<T> {
    label: string;
    value: T;
    color?: string;
}
const _defaultColor = "var(--color-background)";

interface ViewSelectorProps<T> {
    options: ViewOption<T>[];
    selected: T;
    onSelect: (value: T) => void;
}

export function ViewSelector<T>({
    options,
    selected,
    onSelect
}: ViewSelectorProps<T>) {
    return (
        <div className={`rounded-sm bg-background-muted grid justify-items-center p-1 gap-x-1`}
            style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
            {options.map((option) => {
                if (option.value === selected) return (
                    <div key={String(option.value)} className="flex items-center justify-center rounded-sm py-1 w-full"
                        style={{ backgroundColor: option.color ?? _defaultColor }}>
                        <p className="text-center">{option.label}</p>
                    </div>
                )
                else return (
                    <div key={String(option.value)} className="flex items-center justify-center rounded-sm py-1 w-full cursor-pointer"
                        onClick={() => onSelect(option.value)}>
                        <p className="relative z-10 text-center text-opacity-100 pointer-events-none">
                            {option.label}
                        </p>
                    </div>
                )
            })}
        </div>
    );
}
