const path = require(`path`);

// Normally this would be an env var, but this works for the demo
const locale = 'en-US';

exports.createPages = async ({ graphql, actions, reporter }) => {
    const datoCmsQueryResult = await graphql(`
        {
            allDatoCmsArticle(filter: { locale: {eq: "${locale}"} }) {
                nodes {
                    slug
                    title
                    body
                    image {
                        alt
                        fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                }
            }
        }
    `);

    const blogArticleNodes = datoCmsQueryResult.data.allDatoCmsArticle.nodes || [];
    reporter.info(`Fetched ${blogArticleNodes.length} blog articles from Dato CMS`);

    blogArticleNodes.forEach(blogArticleNode => {
        reporter.info(`Creating page for blogArticleNode ${JSON.stringify(blogArticleNode, null, 2)}`);
        actions.createPage({
            path: `/${blogArticleNode.slug}`,
            component: path.resolve(`./src/templates/blogArticle.jsx`),
            context: {
                title: blogArticleNode.title,
                body: blogArticleNode.body,
                image: blogArticleNode.image,
            }
        });
    });
};
