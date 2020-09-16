import React from "react";
import "./footer.css";

const Footer = () => {
    return(
    <div className="main-footer">
        <div className="container">
        <div className="row">
            <div className="col">
                <ul className="list-unstyled">
                    <li>Maryland, USA</li>
                    <li><a href="mailto:info@monaassemi.com" class="fa fa-inbox">Email Mona</a></li>
                    <li><a href="https://www.facebook.com/mona.assemi" class="fa fa-facebook">Facebook</a></li>
                    <li><a href="https://twitter.com/monaassemi" class="fa fa-twitter">Twitter</a></li>
                    <li><a href="https://www.instagram.com/mona_assemi/" class="fa fa-instagram">Instagram</a></li>
                </ul>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                  &copy;{new Date().getFullYear()} Mona Assemi Jewelry | All rights reserved | Terms of Service | Privacy
                </p>
            </div>
        </div>
        </div>
    </div>
    )
}
export default Footer;