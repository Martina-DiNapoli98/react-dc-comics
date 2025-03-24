import List from './List'

export default function Footer({ list }) {

    return (
        <footer>
            <div className="row-up">
                <div className="col">
                    {
                        <List list={list} />
                    }
                    <img src="./dc-logo-bg.png" alt="" width={400} />
                </div>
            </div>
            <div className="row-down">
                <button className="button" type="button">
                    SIGN UP NOW!
                </button>

                <ul>
                    <h4>
                        FOLLOW US
                    </h4>
                    <li>
                        <a href=""><img src="./footer-facebook.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href=""><img src="./footer-twitter.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href=""> <img src="./footer-youtube.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href=""><img src="./footer-pinterest.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href=""> <img src="./footer-periscope.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}