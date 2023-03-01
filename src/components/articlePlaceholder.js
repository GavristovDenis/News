

export const ArticlePlaceholder = ({ title, body }) => {

    return (
        <div className="article_placeholder">
            <div className="title">
                {title}
            </div>
            <div className="body">
                {body}
            </div>

        </div>
    )
}