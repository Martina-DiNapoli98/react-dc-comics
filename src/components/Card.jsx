
export default function Card({ thumb, title }) {

    return (
        <div className="col-2">
            <div className="card">
                <img src={thumb} alt={title} />
                <div>{title}</div>
            </div>
        </div>
    )

}