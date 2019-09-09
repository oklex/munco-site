import React from "react";
import BlogList from '../../components/BlogList/BlogList'
import "./Blog.scss";
const chilling: string = "/img/chilling.jpg";

class Blog extends React.Component<{}, {}> {

  // componentDidMount = () => {
  //   window.scrollTo(0, 0);
  // };
  
  render() {
    return (
      <div id="blog-home">
        <div className="blog-header">
          <img
            className="banner-img"
            src={chilling}
            alt="student in suit playing accordion"
          ></img>
          <div className='banner-overlay'>
            <div className='banner-title'>
            <h3>Features</h3>
            </div>
          </div>
        </div>
        <div className='container'>
          <h5>This is our Community</h5>
        </div>
        <BlogList/>
      </div>
    );
  }
}

export default Blog;
