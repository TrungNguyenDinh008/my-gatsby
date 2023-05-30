import * as React from "react"
import{
    font,
    navBarItem,
    navBarLink,
    navBarLogo,
    navBarGrid,
    container,
    header
    
    } from "../components/style.module.css" 
    import { Link, useStaticQuery, graphql } from 'gatsby'


   
const Layout = ({pageTitle}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
              human {
                fullName
              }
            }
          }
        }
    `)
    return (
        
        <body>
        <div className={font}>
            <nav>
                <ul className={navBarGrid}>
                    <li className={navBarItem}>
                    <Link to="/" className={navBarLink}>Home</Link>
                    </li>
                    <li className={navBarItem}>
                    <Link to="/about" className={navBarLink}>About</Link>
                    </li>
                    <li className={navBarItem}>
                    <Link to="/blog" className={navBarLink}>Blog</Link>
                    </li>
                    <li className={navBarItem}>
                    <Link to="/contact" className={navBarLink}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <main className={container}>
                <h1 className={header}>{pageTitle}</h1>
            </main>
        </div>
        </body>
       
    )
}
export default Layout