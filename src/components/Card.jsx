
export default function Card({ item }) {

    return (
        <div className="col-2">
            <div className="card">
                <img src={item.thumb} alt={item.title} />
                <div>{item.title}</div>
            </div>
        </div>
    )

};