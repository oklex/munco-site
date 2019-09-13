import React from "react";
import BlogList from "../../components/BlogList/BlogList";
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
          <div className="banner-overlay">
            <div className="banner-title">
              
              <h1>Student Features</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>This is our MUN community</h3>
          
          <div className="referral-btn blueText">
              <a href="https://forms.gle/rzHMmwdG7ay9LrCc6" target="_blank">
                <p>refer someone you know &gt;</p>
              </a>
            </div>
        </div>
        <BlogList />
        <div className="container">
          <div className="d-flex flex-row-reverse referral-btn">
            <div className="referral-btn blueText">
              <a href="https://forms.gle/rzHMmwdG7ay9LrCc6" target="_blank">
                <p>refer someone you know &gt;</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
