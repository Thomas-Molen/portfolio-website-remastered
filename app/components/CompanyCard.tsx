import Image from "next/image"

interface CompanyCardProps {
  company: string;
  link: string;
  imageUrl?: string;
}

export default function CompanyCard({ company, link, imageUrl }: CompanyCardProps) {
  return (
    <a href={link} target="_blank" className="relative group overflow-hidden flex items-center justify-center border border-muted rounded-md 
                                              w-full aspect-[5/2] sm:aspect-[5/3] md:aspect-[2/1] lg:aspect-[3/2] bg-background">
      {
        imageUrl && (
          <Image
            src={imageUrl}
            alt={company}
            fill
            sizes="(max-width: 639px) 286px, (max-width: 767px) 193px, (max-width: 1023px) 230px, (max-width: 1279px) 182px, 191px"
            className="opacity-30 hover:opacity-80 transition-opacity duration-300 object-cover"
            priority
          />)
      }
      <p className="text-xl font-bold z-1 pointer-events-none">
        {company}
      </p>
    </a>
  );
}