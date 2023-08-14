import logo from './../assets/imgs/logo.png';
// import fbIcon from '../assets/imgs/icons/fb-icon.svg';
import { ReactComponent as FbIcon } from '../assets/imgs/icons/fb-icon.svg';


function SiteFooter(){
  return (
    <section className="has-bg-img py-0">
        <div className="container">
            <div className="footer">
                <div className="footer-lists">
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">ABOUT US</h6>
                        </li>
                        <li className="list-body">
                            <a href="/" className="logo">
                                <img src={logo} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page" />
                                <h6>Creative Studio</h6>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis fugit maxime deleniti minus optio accusamus, quam maiores explicabo sunt.</p> 
                            <p className="mt-3">
                                Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a className="d-inline text-primary" href="http://www.devcrud.com">DevCRUD</a>
                            </p>                   
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">USEFUL LINKS</h6>
                        </li>
                        <li className="list-body">
                            <div className="row">
                                <div className="col">
                                    <a href="#about">About</a>
                                    <a href="#service">Service</a>
                                    <a href="#portfolio">Portfolio</a>
                                    <a href="#testmonail">Testimonial</a>
                                </div>
                                <div className="col">
                                    <a href="#team">Team</a>
                                    <a href="#blog">Blog</a>
                                    <a href="/">Faq</a>
                                    <a href="/">Privacy Policy</a>                  
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">CONTACT INFO</h6>
                        </li>
                        <li className="list-body">
                            <p>Contact us and we'll get back to you within 24 hours.</p>
                            <p><i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB Country</p>
                            <p><i className="ti-email"></i>  info@website.com</p>
                            <div className="social-links">
                                <a href="javascript:void(0)" className="link fb-link">
                                    {/* <i className="ti-facebook"></i> */}
                                    {/* <img src={fbIcon} alt="" /> */}
                                    <FbIcon width="30" height="30" />
                                </a>
                                <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt"></i></a>
                                <a href="javascript:void(0)" className="link"><i className="ti-google"></i></a>
                                <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt"></i></a>
                                <a href="javascript:void(0)" className="link"><i className="ti-instagram"></i></a>
                                <a href="javascript:void(0)" className="link"><i className="ti-rss"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    </section>
  )
}

export default SiteFooter;