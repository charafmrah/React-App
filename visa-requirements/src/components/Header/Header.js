import React from 'react';
import Option from './../Option/Option';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <h1 className="navbar-brand">Visa requirements for a passport from:</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <form className="d-flex w-50 p-3" role="search">
            <select className="form-select " aria-label="select a country">
              <option defaultValue>Choose the country</option>
              <Option value={1} text={'United States'} />
              <Option value={1} text={'Algeria'} />
              <Option value={1} text={'France'} />
              <Option value={1} text={'Canada'} />
            </select>
          </form>

        </div>
      </div>
    </nav>
    );
}

export default Header;