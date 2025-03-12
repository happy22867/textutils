import React from 'react';
import PropTypes from 'prop-types';
import{ Link } from 'react-router-dom';
export default function Navbar(props) {



  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>

            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">About</Link> */}
              <a className="nav-link" href="#"></a>

            </li>
          </ul>
          <button className="btn btn-success mx-2" onClick={()=>{
             
          
           if(props.mode==='dark') {document.body.style.backgroundColor='#042f20'
            props.btnClass("success");
              

           }
           else{
            document.body.style.backgroundColor="white"
           }
          }}>GREEN</button>
          <button className="btn btn-primary mx-2"onClick={()=>{
            
           
           if(props.mode==='dark') {
            document.body.style.backgroundColor='#160340';
            props.btnClass("primary");
          
           }
           else{
            document.body.style.backgroundColor="white"
           }

          }}>BLUE</button>
          <button className="btn btn-secondary mx-2" onClick={()=>{
             
            props.btnClass("secondary");
            
            if(props.mode==='dark') {document.body.style.backgroundColor='#313131'
              props.btnClass("secondary");

            }
            else{
             document.body.style.backgroundColor="white"
            }
            
          }}>GREY</button>
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

// Prop validation with defaultProps
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aabout: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Set a title here',
  aabout: 'About text here',
};
