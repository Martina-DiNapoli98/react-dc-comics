import Logo from './Logo'
export default function Header() {
    return (
        <header>
            <div className="container">
                <Logo />

                <ul>
                    <li><a href="">Characters</a></li>
                    <li><a href="">comics</a></li>
                    <li><a href="">movies</a></li>
                    <li><a href="">tv</a></li>
                    <li><a href="">games</a></li>
                    <li><a href="">collectibles</a></li>
                    <li><a href="">videos</a></li>
                    <li><a href="">fans</a></li>
                    <li><a href="">news</a></li>
                    <li><a href="">shop</a></li>
                </ul>
            </div>

            <div className="jumbotron">

            </div>

        </header>

    )
}