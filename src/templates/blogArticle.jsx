import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function BlogArticle(props) {
    const { image, title, body } = props.pageContext;
    return (
        <>
            <GatsbyImage image={image.gatsbyImageData} alt={image.alt} />
            <h1>{title}</h1>
            <p>{body}</p>
        </>
    );
}
