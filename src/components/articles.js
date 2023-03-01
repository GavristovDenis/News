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


    console.log(articlesArray)
    return (
        <div className="articles_container">
            {articlesArray.map((index, post) => {
                return <ArticlePlaceholder key={index} title={post.title} body={post.body} />
            })}

        </div>
    )
}