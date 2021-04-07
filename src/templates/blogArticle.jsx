import React from "react";

export default function BlogArticle(props) {
    return (
        <>
            {
                props.pageContext.title === null &&
                'Title is null'
            }
            <h1>{props.pageContext.title}</h1>
            <h3>Has only default locale/language alt text set</h3>
            <p>Alt: {props.pageContext.image.alt}</p>
            <img src={props.pageContext.image.fluid.src} alt={props.pageContext.image.alt} />
            <h3>Has all locale/language alt texts set</h3>
            <p>Alt: {props.pageContext.image2.alt}</p>
            <img src={props.pageContext.image2.fluid.src} alt={props.pageContext.image2.alt} />
        </>
    );
}
