export default function Footer() {
    return (
        <footer>
            <div className="row-up">
                <div className="col">
                    <ul>
                        <li><h4>DC COMICS</h4></li>
                        <li><a href="">Characters</a></li>
                        <li><a href="">comics</a></li>
                        <li><a href="">movies</a></li>
                        <li><a href="">tv</a></li>
                        <li><a href="">games</a></li>
                        <li><a href="">collectibles</a></li>
                        <li><a href="">videos</a></li>
                        <li><a href="">fans</a></li>
                        <li><a href="">news</a></li>
                        <li><h4>SHOP</h4></li>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                    <ul>
                        <li><h4>DC</h4></li>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy Policy (New)</a></li>
                        <li><a href="">Ad Choices</a></li>
                        <li><a href="">Advertising</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Subscriptions</a></li>
                        <li><a href="">Talent Workshops</a></li>
                        <li><a href="">CPSC Certificates</a></li>
                        <li><a href="">Ratings</a></li>
                        <li><a href="">Shop Help</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                    <ul>
                        <li><h4>SITES</h4></li>
                        <li><a href="">DC</a></li>
                        <li><a href="">MAD Magazine</a></li>
                        <li><a href="">DC Kids</a></li>
                        <li><a href="">DC Universe</a></li>
                        <li><a href="">DC Power Visa</a></li>
                    </ul>
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