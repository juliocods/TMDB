import React from "react";

const Users = () => {
  return (
    <>
      <div className="row p-5">
        <div className="col-3"></div>
        <div className="col mt-5 mb-5">
          <div className="card mb-3 p-5" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://image.shutterstock.com/image-vector/user-icon-flat-style-person-260nw-1212192763.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">NAME LAST NAME</h5>
                  <small className="text-muted">EMAIL</small>
                  <p className="card-text">LISTA FAVORITOS</p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Users;
