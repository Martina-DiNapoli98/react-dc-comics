import ComicsList from "./ComicsList";

export default function Main() {
    return (
        <main>
            <section className="up">
                <ComicsList />
            </section>
            <section className="down">
                <ul>
                    <li>
                        <a href="">
                            <img className="icon" src="./buy-comics-digital-comics.png" alt="" width={30} />
                            <span>
                                DIGITAL COMICS
                            </span>
                        </a>

                    </li>
                    <li>
                        <a href="">
                            <img className="icon" src="./buy-comics-merchandise.png" alt="" width={30} />
                            <span>
                                DC MERCHANDISE
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img className="icon" src="./buy-comics-subscriptions.png" alt="" width={30} />
                            <span>
                                SUBSCRIPTIONS
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img className="icon" src="./buy-comics-shop-locator.png" alt="" width={20} />
                            <span>
                                COMIC SHOP LOCATOR
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img className="icon" src="./buy-dc-power-visa.svg" alt="" width={30} />
                            <span>
                                DC POWER VISA
                            </span>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
};