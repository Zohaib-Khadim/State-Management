import React from 'react';
import { useGlobalContext } from './Context';

const ContextDetails = () => {
  const { state } = useGlobalContext();

  return (
    <div className="container">
      <div className="row">
        {state.myData.map((val) => {
          const { id, title, body } = val;
          return (
            <div className="col-lg-4 col-12 col-md-6" key={id}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{id}</p>
                  <p className="card-text">{body}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContextDetails;