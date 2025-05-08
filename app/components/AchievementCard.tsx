import React from "react";
import styles from './AchievementCard.module.css';

interface AchievementCardProps {
    title: string;
    body: string;
    description: string;
    icon?: React.ReactNode;
    appearDelay?: string;
}

export default function AchievementCard({title, body, description, icon, appearDelay = "0s"}: AchievementCardProps) {
    return (
        <div className={`flex flex-auto flex-col h-full justify-around bg-background border border-muted rounded-md p-6 font-medium ${styles.slideUp}`}
            style={{ animationDelay: appearDelay }}>
            <div className="mb-2 flex flex-row items-center justify-between">
                <p className="text-sm">{title}</p>
                {icon}
            </div>
            <p className="text-2xl font-bold">{body}</p>
            <p className="text-xs text-foreground-muted">{description}</p>
        </div>
    )
}