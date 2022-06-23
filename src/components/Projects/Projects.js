import React, {  useState } from 'react';
import fakedata from '../Data/Data.json';

const Projects = () => {
  // const [data, setData] = useState([]);

  const [noOfProject, setnoOfProject] = useState(6);
  const loadMore = () => {
   
      setnoOfProject(noOfProject + noOfProject);
    
  };
  //   console.log(data);
  const slice = fakedata.slice(0, noOfProject);

  // useEffect(() => {
  //   setData(fakedata);
  // }, []);

  return (
    <section id="projects" className="portfolio-mf ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>

              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          {slice.map((newdata) => (
            <div className="col-md-6 col-lg-4 col-12">
              <div id="card" className="card" style={{ width: '100%' }}>
                <div className="card-img">
                  <img src={newdata.img} className="img-fluid" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{newdata.name}</h5>
                  <p className="card-text">{newdata.description}</p>
                  <div className="button text-center d-grid gap-2 ">
                    <a href={newdata.website} target="/_blank" className="btn  ">
                      Live link
                    </a>
                    <a href={newdata.github} target="/_blank" className="btn ">
                      Github
                    </a>
                  </div>

                  <div className="tech mt-2">
                    <h4>
                      {newdata.technology.map((tech) => (
                        <span className="badge  text-bg-secondary ">{tech}</span>
                      ))}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-info d-grid mx-auto w-30 mt-4"
          onClick={() => loadMore()}
        >
          load more
        </button>
      </div>
    </section>
  );
};

export default Projects;
