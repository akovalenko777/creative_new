import logo from './../assets/imgs/logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MainNav } from '../data/navigation';

function SiteHeader(){
    const location = useLocation();
    console.log(location);

    let headerContent = null;
    if(location.pathname === '/'){
        headerContent = (
        <>
            <h6 className="subtitle">Small Team With Big Ideas</h6>
            <h1 className="title">Creative Studio</h1>
            <div className="buttons text-center">
                <a href="#service" className="btn btn-primary rounded w-lg btn-lg my-1">Our Service</a>
                <a href="#contact" className="btn btn-outline-light rounded w-lg btn-lg my-1">Contact Us</a>
            </div>
        </>);
    }

  return (
    <>
    <nav className="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {MainNav.map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <NavLink className="nav-link" to={item.to}>{item.title}</NavLink>
                            </li>
                        )
                    })}
{/*                     
                    <li className="nav-item">
                        <NavLink className="nav-link" to="about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#service">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-primary btn-sm ml-lg-3" href="components.html">Components</a>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
    <header className={location.pathname === '/' ? 'header' : 'header small'}>
      <div className="overlay">
        {headerContent}
      </div>      
    </header>
    
    </>
  )
}

export default SiteHeader;