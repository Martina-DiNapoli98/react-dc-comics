import Card from './Card'
import comics from '../data/comics'

export default function ComicsList() {
    return (
        <section className="products">
            <div className="container">
                <h2>Products List</h2>

                <div className="row">

                    {
                        comics.map(item => (<Card thumb={item.thumb} title={item.title} />))
                    }
                </div>
            </div>
            <div className='button-down'>
                <button className='button-d' type='button'>
                    LOAD MORE
                </button>
            </div>

        </section>
    )
}

