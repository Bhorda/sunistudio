// import React from "react"
// import { Link, graphql } from "gatsby"
// import { css } from "@emotion/core"
// import styled from "@emotion/styled"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const Content = styled.div`
//   margin: 0 auto;
//   max-width: 860px;
//   padding: 1.45rem 1.0875rem;
// `

// const ArticleDate = styled.h5`
//   display: inline;
//   color: #606060;
// `

// const MarkerHeader = styled.h3`
//   display: inline;
//   border-radius: 1em 0 1em 0;
//   background-image: linear-gradient(
//     -100deg,
//     rgba(255, 250, 150, 0.15),
//     rgba(255, 250, 150, 0.8) 100%,
//     rgba(255, 250, 150, 0.25)
//   );
// `
// const MarkerHeader = styled.h3`
//   display: inline;
//   border-radius: 1em 0 1em 0;
//   background-color: #FCAF38;
// `

// const ReadingTime = styled.h5`
//   display: inline;
//   color: #606060;
// `

// const IndexPage = ({ data }) => {
//   return (
//     <Layout>
//       <SEO title="Blog" />
//         {data.allMarkdownRemark.edges
//           .filter(({ node }) => {
//             const rawDate = node.frontmatter.rawDate
//             const date = new Date(rawDate)
//             return date < new Date()
//           })
//           .map(({ node }) => (
//             <div key={node.id}>
//               <Link
//                 to={node.frontmatter.path}
//                 css={css`
//                   text-decoration: none;
//                   color: inherit;
//                 `}
//               >
//                 <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
//               </Link>
//               <div>
//                 <ArticleDate>{node.frontmatter.date}</ArticleDate>
//               </div>
//               <p>{node.excerpt}</p>
//             </div>
//           ))}
//     </Layout>
//   )
// }

// export default IndexPage

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             rawDate: date
//             path
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `


import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MarkerHeader = styled.h3`
  display: inline;
  color: #4D4D4D;
  text-decoration: underline;
  text-decoration-color: #FCAF38;
  text-underline-offset: 3px;
  text-underline-height: 2px;
  position: relative;  
`
  // ::after {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   transform: scaleX(0);
  //   height: 3px;
  //   bottom: 0;
  //   left: 0;
  //   background-color: #FCAF38;
  //   // background-color: rgba(0, 0, 0, 0.8);
  //   transform-origin: bottom right;
  //   transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  // }

  // :hover::after {
  //   transform: scaleX(1);
  //   transform-origin: bottom left;
  // }


const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location}>
  //       <SEO title="All posts" />
  //       {/* <Bio /> */}
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout>
      <SEO title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline"><MarkerHeader>{title}</MarkerHeader></span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
