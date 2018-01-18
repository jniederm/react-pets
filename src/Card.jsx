import React from 'react'

export default () => (
  <div className="column col-3">
    <div className="card">
      <div className="card-image">
        <img src="img/dog.jpg" className="img-responsive"/>
      </div>
      <div className="card-header">
        <div className="float-left">
          <div className="card-title h5">Puppy</div>
          <div className="card-subtitle text-gray">Dog</div>
        </div>
        <button className="btn float-right">Edit</button>
        <button className="btn float-right">Delete</button>
      </div>
    </div>
  </div>
)
