import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="global-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
          </footer>
        </div>
      </div>
    )}
  />
)
    }

// const Layout = ({ location, title, children }) => {
//   const rootPath = `${__PATH_PREFIX__}/`
//   const isRootPath = location.pathname === rootPath
//   let header

//   if (isRootPath) {
//     header = (
//       <h1 className="main-heading">
//         <Link to="/">{title}</Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <Link className="header-link-home" to="/">
//         {title}
//       </Link>
//     )
//   }

//   return (
//     <div className="global-wrapper" data-is-root-path={isRootPath}>
//       <header className="global-header">{header}</header>
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.com">Gatsby</a>
//       </footer>
//     </div>
//   )
// }

export default Layout
