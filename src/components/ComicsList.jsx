import Card from './Card'


export default function ComicsList({ comics }) {
    return (
        <section className="products">
            <div className="container">
                <h2>Products List</h2>

                <div className="row">

                    {
                        comics.map(item => (<Card key={item.id} item={item} />))
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

