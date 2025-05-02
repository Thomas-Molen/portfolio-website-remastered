import React from "react";

interface AchievementCardProps {
    title: string;
    body: string;
    description: string;
    icon?: React.ReactNode;
}

export default function AchievementCard({title, body, description, icon}: AchievementCardProps) {
    return (
        <div className="flex flex-auto flex-col justify-around bg-background border border-muted rounded-md p-6 font-medium hover:bg-primary/50 transition-colors">
            <div className="mb-2 flex flex-row items-center justify-between">
                <p className="text-sm">{title}</p>
                {icon}
            </div>
            <p className="text-2xl font-bold">{body}</p>
            <p className="text-xs text-foreground-muted">{description}</p>
        </div>
    )
}