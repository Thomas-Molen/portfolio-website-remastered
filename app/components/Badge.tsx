interface BadgeProps {
    body: string;
}

export default function Badge({ body }: BadgeProps) {
    return (
        <div className="bg-primary/10 text-primary rounded-lg py-1 px-3 block w-fit">
            {body}
        </div>
    )
} 