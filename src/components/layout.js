import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import { FaTwitter, FaGithub, FaTshirt, FaEnvelopeOpen } from "react-icons/fa";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
      <div className="site-widgets">
          <a href="https://twitter.com/tolks1189" target="_blank" rel="noopener noreferrer"><FaTwitter size="2.25rem" color="#33F0FF"/></a>
          <a href="https://github.com/tolks11" target="_blank" rel="noopener noreferrer"><FaGithub size="2.25rem" color="#FF33FA"/></a>
          <a href="https://dandrpromotions.com" target="_blank" rel="noopener noreferrer"><FaTshirt size="2.25rem" color="#FF9833 "/></a>
          <a href="https://tolks.me/contact" target="_blank" rel="noopener noreferrer"><FaEnvelopeOpen size="2.25rem" color="red" /></a>
      </div>
        <p>&copy; {new Date().getFullYear()} Cincy Crypto</p>
      </footer>
    </div>
  )
}
