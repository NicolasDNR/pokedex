import { Modal } from "..";

import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
              <div className="footer__container grid">

                <div>
                  <h2 className="footer__title">Pokedex</h2>
                  <span className="footer__subtitle">PokeAPI</span><br/>
                </div>

                <div className="footer__modal">
                  <Modal />
                </div>

              <p className="footer__copy">&copy; Denoyer Nicolas. All right reserved.</p>

              </div>
            </div>
        </footer>
    )
}

export default Footer;