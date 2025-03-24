import list from '../data/list'
export default function List() {
    return (
        list.map((item, index) => (<ul key={index}><li ><h4>{item.title}</h4></li>{item.links.map((link, i) => (<li key={i}><a href={link.href}>{link.name}</a></li>))}</ul>))
    )
};