"use client";

import { useState } from "react";
import { ViewOption, ViewSelector } from "./ViewSelector";
import { Bar, BarChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";


interface TechnologyData {
    key: string;
    value: number;
}

const _languageData: TechnologyData[] = [
    { key: "C#", value: 95 },
    { key: "Python", value: 65 },
    { key: "JavaScript TypeScript", value: 85 },
    { key: "HTML/CSS", value: 80 },
    { key: "SQL", value: 55 },
];

const _frameworkData: TechnologyData[] = [
    { key: "ASP.NET", value: 95 },
    { key: "Blazor", value: 90 },
    { key: "React", value: 80 },
    { key: "Laravel", value: 30 },
    { key: "TensorFlow", value: 65 },
];

const _otherData: TechnologyData[] = [
    { key: "Azure", value: 95 },
    { key: "Vercel", value: 50 },
    { key: "Docker", value: 85 },
    { key: "Kubernetes", value: 85 },
    { key: "CI/CD", value: 70 },
]

export default function TechnologyOverview() {
    const [selectedView, setSelectedView] = useState("frameworks");
    const viewOptions: ViewOption<"languages" | "frameworks" | "other">[] = [
        { label: "Languages", value: "languages", color: "#9a4d99" },
        { label: "Frameworks", value: "frameworks", color: "#2f7f6e" },
        { label: "Cloud & DevOps", value: "other", color: "#4b4a99" }
    ];

    function ExperienceChart(data: TechnologyData[], color: string) {
        return (
            <ResponsiveContainer width="100%" aspect={1} className="mt-4" maxHeight={300}>
                <BarChart layout="vertical" data={data} margin={{ left: 30, top: 10 }}>
                    {data.map((entry, index) =>
                        <ReferenceLine
                            key={index}
                            x={entry.value}
                            stroke="var(--color-muted)"
                            strokeDasharray="20 3"
                        />)
                    }
                    <XAxis type="number" tick={false} label={{ value: "Experience" }} />
                    <YAxis type="category" dataKey="key" />
                    <Bar dataKey="value" fill={ color } />
                </BarChart>
            </ResponsiveContainer>
        )
    }

    function View() {
        const color = viewOptions.find(o => o.value == selectedView)?.color ?? "var(--color-primary)";

        switch (selectedView) {
            case "languages":
                return ExperienceChart(_languageData, color);
            case "frameworks":
                return ExperienceChart(_frameworkData, color);
            case "other":
                return ExperienceChart(_otherData, color);
            default:
                return <></>
        }
    }

    return (
        <>
            <ViewSelector options={viewOptions} selected={selectedView} onSelect={setSelectedView} />
            {View()}
        </>
    )
}
