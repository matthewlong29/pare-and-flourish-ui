import "normalize.css"
import React, {Fragment} from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
import BlogCard from "../components/BlogCard";

class HomeIndex extends React.Component {
  constructor() {
    super();
  }

  /**
   * createBlogCards
   * TODO: explain what this function does
   */
  createBlogCards = () => {
    const post = this.props.data.allMarkdownRemark.edges
    let cards = []
    for (let i = 0; i < post.length; i++) {
      cards.push(
        <BlogCard 
          postPath={post[i].node.frontmatter.path} 
          title={post[i].node.frontmatter.title} 
          imagePath={post[i].node.frontmatter.attachments[0].publicURL}
          excerpt={post[i].node.frontmatter.excerpt}
        />
      )
    }

    return cards
  } // end createBlogCards

  render() {
    return (
      <div> {/*TODO: use React.Fragment instead*/}
        <Helmet>
          <title>Pare and Flourish</title>
          <meta name="description"/>
        </Helmet>

        <div id="main">
          <section id="latest-blogs"> {/*TODO: experiment with better container techniques*/}
            <h2>Latest <span className="secondWord">Blogs</span></h2>
            <p className="firstParagraph">We dedicate our time to this blog to inspire and encourage our readers to grow personally and professionally. It is our hope that we add authenticity to your week.</p>
            <div className="BlogCard-container">
              {this.createBlogCards()} {/*TODO: experiment more with looping instead?*/}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HomeIndex

export const blogEntry = graphql`
  query blogEntry {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            path
            excerpt
            attachments {
              publicURL
            }
          }
        }
      }
    }
  }
`
