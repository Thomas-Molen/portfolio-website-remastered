export default function Footer() {
    return (
        <div className="container py-5 text-center sm:flex sm:justify-between text-foreground-muted text-sm">
            <p>
                <a href="https://github.com/Thomas-Molen/portfolio-website-remastered" target="_blank">Open source project by <span className="text-primary">Thomas Van der Molen</span></a>
            </p>
            <a className="underline" href="https://github.com/Thomas-Molen/portfolio-website-remastered/blob/4fe9544510c2a079e164c5d462c76ed3d4c4dc41/LICENSE" target="_blank">MIT License</a>
        </div>
    )
}