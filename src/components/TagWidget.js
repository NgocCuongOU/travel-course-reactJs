import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Apis, { endpoints } from "../configs/Apis"

function TagWidget() {

    const [tags, setTags] = useState([])

    useEffect(() => {
        loadTags()
    }, [])

    const loadTags = async () => {
        try {
            const res = await Apis.get(endpoints['tags'])

            setTags(res.data)
        } catch(error) {
            console.error(error)
        }
    } 



    return (
        <aside className="single-sidebar-widget tag">
            <h4 className="widget-title">
                Tag
            </h4>
            <ul className="tag-list">
                {
                    tags.map(tag => {
                        return (
                            <li className="tag-list_item" key={tag.id}>
                                <Link>{tag.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default TagWidget