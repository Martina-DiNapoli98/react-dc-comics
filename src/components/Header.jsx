import Logo from './Logo'
export default function Header() {
    const menu = ['Characters', 'comics', 'movies', 'tv', 'games', 'collectibles', 'videos', 'fans', 'news', 'shop']
    return (
        <header>
            <div className="container">
                <Logo />

                <ul>
                    {
                        menu.map((item, index) => (<li key={index}><a href="">{item}</a></li>))
                    }
                </ul>
            </div>

            <div className="jumbotron">

            </div>

        </header>

    )
}

