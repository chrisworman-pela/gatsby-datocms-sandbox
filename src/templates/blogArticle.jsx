import React from "react";

export default function BlogArticle(props) {
    return (
        <>
            {
                props.pageContext.title === null &&
                'Title is null'
            }
            <h1>{props.pageContext.title}</h1>
            {
                props.pageContext.body === null &&
                'Body is null'
            }
            <p>{props.pageContext.body}</p>
        </>
    );
}
