import React from "react";
import "./styles/footer.css"
const Footer = () => {
    return(
    <div className="main-footer">
        <div className="container">
        <div className="row">
            <div className="col">
                <h4>Mona Assemi Jewelry</h4>
                <ul className="list-unstyled">
                    <li>Maryland, USA</li>
                </ul>
            </div>
            <div className="col">
            <h4>Contact</h4>
                <ul className="list-unstyled">
                    <li>Email:mailto</li>
                    <li>Love to hear from you</li>
                </ul>
            </div>
            <div className="col">
            <h4>Social</h4>
                <ul className="list-unstyled">
                    <li><a href="https://www.facebook.com/mona.assemi" class="fa fa-facebook">Facebook</a></li>
                    <li><a href="https://twitter.com/monaassemi" class="fa fa-twitter">Twitter</a></li>
                    <li><a href="https://www.instagram.com/mona_assemi/" class="fa fa-insta">Instagram</a></li>
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