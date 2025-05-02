import SimpleCard from "../components/CompanyCard";

export default function Companies() {
    return (
        <>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Companies I have worked with</h2>
                <p className="text-foreground-muted">I've had the privilege of collaborating with these organizations to deliver impactful solutions.</p>
            </div>
            <div className="relative">
                <div className="grid grid-cols-6 gap-4">
                    <SimpleCard company="Info Support" link="https://www.infosupport.com/en/" />
                    <SimpleCard company="SUE" link="https://sue.nl/" />
                    <SimpleCard company="MK Educatie" link="https://mkeducatie.nl/" />
                    <SimpleCard company="Bas World" link="https://www.basworld.com/"/>
                    <SimpleCard company="PodoPrinter" link="https://podoprinter.com/"/>
                    <SimpleCard company="Author-e" link="https://www.authore.com/"/>
                </div>
            </div>
        </>
    )
}