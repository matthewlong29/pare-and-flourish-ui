import React from "react"
import Link from "gatsby-link"
import "./styles.scss"


//TODO: implement first tile
class FirstOutsideTile extends React.Component {
  render() {
    <div className="outsideTile first">
      <span>“Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.”</span>
    </div>
  }
}

//TODO: implement last tile
//TODO: implement loadMore function
class SecondOutsideTile extends React.Component {
  render() {
    <div className="outsideTile second loadMore">
      <span>Click here to load more blogs!</span>
    </div>
  }
}

//TODO: create "filler" BlogCard to show before query happens similar to LinkedIn, etc..
export default({postPath, title, imagePath, excerpt}) => (
  <article className="card">
    <Link to={postPath} className="tile">
      <figure className="tileImage">
        <img src={imagePath} alt={title} />
      </figure>
      <header>
        <h3>{title}</h3>
      </header>
      <main>
        <span>{excerpt}</span>
      </main>
      <div className="tileOverlay">
        <span>Read More</span>
      </div>
    </Link>
  </article>
)

//TODO: props.isRequired