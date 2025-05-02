interface SimpleCardProps {
  company: string;
  link: string;
}

export default function SimpleCard({ company, link }: SimpleCardProps) {
  return (
    <a href={link} target="_blank" className="border border-muted rounded-md p-6 py-12 bg-background">
      <p className="text-xl font-bold text-center">
        {company}
      </p>
    </a>
  );
}