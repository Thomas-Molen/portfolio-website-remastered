export default function Footer() {
    return (
        <div className="container xl:max-w-7xl py-5 mx-auto flex justify-between text-foreground-muted text-sm">
            <p>
                Open source project by <a href="https://github.com/Thomas-Molen/portfolio-website-remastered" target="_blank" className="text-primary">Thomas Van der Molen</a>.
            </p>
            <a className="underline" href="https://github.com/Thomas-Molen/portfolio-website-remastered/blob/4fe9544510c2a079e164c5d462c76ed3d4c4dc41/LICENSE" target="_blank">MIT License</a>
        </div>
    )
}