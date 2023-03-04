import { useEffect, useState } from "react"
import { ArticlePlaceholder } from "./articlePlaceholder"
export const Articles = () => {


    const [articlesArray, setArticlesArray] = useState([])

    useEffect(() => {

        const get = async () => {
            await fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(data => setArticlesArray([...articlesArray, data]))
        }
        get()



    }, [])

    if (articlesArray.length === 0) {
        return <div>Loading</div>
    }

    return (
        <div className="articles_container">
            {articlesArray[0].map((post, index) => {

                return <ArticlePlaceholder key={index} title={post.title} body={post.body} />
            })}

        </div>
    )
}