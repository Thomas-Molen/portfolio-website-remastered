'use client';

import React from "react";

export interface ViewOption<T> {
    label: string;
    value: T;
}

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
                    <div key={String(option.value)} className="flex items-center justify-center rounded-sm py-1 w-full bg-background">
                        <p className="text-center">{option.label}</p>
                    </div>
                ) : (
                    <div key={String(option.value)} className="flex items-center justify-center py-1">
                        <p className="text-center text-foreground-muted cursor-pointer" onClick={() => onSelect(option.value)}>
                            {option.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
