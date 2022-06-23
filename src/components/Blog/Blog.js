import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Blog</h3>

              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="https://cutt.ly/BKcwKH5 " target="/_blank">
                  <img src="img/Blog/travel1.png" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Travel</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="https://cutt.ly/BKcwKH5" target="/_blank">
                    COX'S BAZAR Merine Drive
                  </a>
                </h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="https://cutt.ly/0Kx6CeP" target="/_blank">
                  <img src="img/Blog/terminal.png" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">VS Code</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="/">Windows terminal customize</a>
                </h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html">
                  <img src="img/others-img/post-3.jpg" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Autotype writter</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="blog-single.html">Autotype writter using React</a>
                </h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
