

export const ArticlePlaceholder = ({ title, body }) => {
    console.log(title)
    return (
        <div className="article_placeholder">
            <h1 className="title">
                {title}
            </h1>
            <div className="body">
                {body}
            </div>

        </div>
    )
}