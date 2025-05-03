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
    const [selectedView, setSelectedView] = useState("languages");
    const viewOptions: ViewOption<"languages" | "frameworks" | "other">[] = [
        { label: "Languages", value: "languages" },
        { label: "Frameworks", value: "frameworks" },
        { label: "Cloud & DevOps", value: "other" }
    ];

    function ExperienceChart(data: TechnologyData[]) {
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
                    <Bar dataKey="value" fill="currentColor" className="text-primary brightness-85" />
                </BarChart>
            </ResponsiveContainer>
        )
    }

    function View() {
        switch (selectedView) {
            case "languages":
                return ExperienceChart(_languageData);
            case "frameworks":
                return ExperienceChart(_frameworkData);
            case "other":
                return ExperienceChart(_otherData);
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
