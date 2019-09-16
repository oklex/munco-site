import React from "react";
import BlogList from "../../components/BlogList/BlogList";
import "./Blog.scss";
import Helmet from "react-helmet";
const chilling: string = "/img/chilling.jpg";

class Blog extends React.Component<{}, {}> {
  componentDidMount = () => {
    document.body.scrollTop = 0;
    console.log('blog')
  };

  render() {
    return (
      <div id="blog-home">
        <Helmet>
          <title>Student features - munco</title>
          <meta
            name="description"
            content="Check out notable students in the model un community."
          />
          <link rel="canonical" href="https://wwww.munco.ca/features" />
        </Helmet>
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
