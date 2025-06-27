import CompanyCard from "../components/CompanyCard";

export default function Companies() {
    return (
        <div className="container px-5">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Companies I have worked with</h2>
                <p className="text-foreground-muted">I've had the privilege of collaborating with these organizations and more to deliver impactful solutions.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 justify-items-center">
                <CompanyCard company="Info Support" link="https://www.infosupport.com/en/" imageUrl="/assets/companies/info-support.png" />
                <CompanyCard company="SUE" link="https://sue.nl/" imageUrl="/assets/companies/sue.png" />
                <CompanyCard company="MK Educatie" link="https://mkeducatie.nl/" imageUrl="/assets/companies/mk-educatie.png" />
                <CompanyCard company="BAS World" link="https://www.basworld.com/" imageUrl="/assets/companies/bas-world.png" />
                <CompanyCard company="PodoPrinter" link="https://podoprinter.com/" imageUrl="/assets/companies/podoprinter.png" />
                <CompanyCard company="Author-e" link="https://www.authore.com/" imageUrl="/assets/companies/author-e.png" />
            </div>
        </div>
    )
}