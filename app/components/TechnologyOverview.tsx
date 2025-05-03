"use client";

import { useState } from "react";
import { ViewOption, ViewSelector } from "./ViewSelector";

export default function TechnologyOverview() {
    const [selectedView, setSelectedView] = useState("languages");
    const viewOptions: ViewOption<"languages" | "frameworks" | "other">[] = [
        { label: "Languages", value: "languages" },
        { label: "Frameworks", value: "frameworks" },
        { label: "Cloud & DevOps", value: "other" }
      ];

    return (
        <>
            <ViewSelector options={viewOptions} selected={selectedView} onSelect={setSelectedView} />
            <div>

            </div>
        </>
    )
}
