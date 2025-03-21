import Logo from './Logo'
export default function Header() {
    return (
        <header>
            <div className="container">
                <Logo />
                <ul>
                    <li>Characters</li>
                    <li>comics</li>
                    <li>movies</li>
                    <li>tv</li>
                    <li>games</li>
                    <li>collectibles</li>
                    <li>videos</li>
                    <li>fans</li>
                    <li>news</li>
                    <li>shop</li>
                </ul>
            </div>

        </header>
    )
}