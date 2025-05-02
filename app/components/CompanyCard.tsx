import Image from "next/image"

interface CompanyCardProps {
  company: string;
  link: string;
  imageUrl?: string;
}

export default function CompanyCard({ company, link, imageUrl }: CompanyCardProps) {
  return (
    <a href={link} target="_blank" className="relative group overflow-hidden flex items-center justify-center border border-muted rounded-md w-40 sm:w-48 aspect-[3/2] bg-background">
      <p className="text-xl font-bold">
        {company}
      </p>
      {
        imageUrl && (
          <Image
            src={imageUrl}
            alt={company}
            fill
            className="opacity-0 group-hover:opacity-20 transition-opacity duration-300 object-contain"
            priority
          />)
      }
    </a>
  );
}