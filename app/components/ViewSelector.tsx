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
        <div className="rounded-sm bg-background-muted grid grid-cols-1 sm:grid-cols-3 justify-items-center p-1 gap-x-3">
            {options.map((option) => {
                const isSelected = option.value === selected;

                return isSelected ? (
                    <div key={String(option.value)} className="flex items-center justify-center rounded-sm py-1 w-full"
                        style={{ backgroundColor: option.color ?? _defaultColor }}>
                        <p className="text-center">{option.label}</p>
                    </div>
                ) : (
                    <div key={String(option.value)} className="relative group flex items-center justify-center rounded-sm py-1 w-full overflow-hidden cursor-pointer"
                        onClick={() => onSelect(option.value)}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ backgroundColor: option.color ?? _defaultColor }} />
                        <p className="relative z-10 text-center text-opacity-100 pointer-events-none">
                            {option.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
