import React, { memo } from "react";
import { Container, Row, Col } from "reactstrap";

import FooterBg from "assets/images/footer-bg.png";
import LogoUrl from "assets/images/logo.png";
import MailIcon from "assets/images/message.svg";
import PhoneIcon from "assets/images/call.svg";
import HomeIcon from "assets/images/home.svg";
import ZaloIcon from "assets/images/zalo.svg";
import FacebookIcon from "assets/images/facebook.svg";
import InstagramIcon from "assets/images/instagram.svg";
import TelegramIcon from "assets/images/telegram.svg";
import WhatsappIcon from "assets/images/whatsapp.svg";
import YoutubeIcon from "assets/images/youtube.svg";
import LocationIcon from "assets/images/location.svg";

import Wrapper from "./Wrapper";

function ViconeFooter(props) {
  const { operations } = props;
  return (
    <Wrapper id="menu_5">
      <footer
        className="upper"
        style={{ background: `url(${FooterBg}) center center` }}
      >
        <Container>
          <Row>
            <Col xs={4} className="mt-3">
              <div className="upper-footer__fragment">
                <h5 className="title">
                  {operations?.contact?.text ?? "Liên hệ với chúng tôi"}
                </h5>
                <div className="items">
                  <p>
                    <a
                      className="item"
                      href={`mailto:${operations?.contact?.email ?? "gddhvicone@gmail.com"
                        }`}
                    >
                      <img className="img" src={MailIcon} alt="" />
                      <span>
                        {operations?.contact?.email ?? "gddhvicone@gmail.com"}
                      </span>
                    </a>
                  </p>
                  <p>
                    <a
                      className="item"
                      href={`tel:${operations?.contact?.phone ?? "0916197889"}`}
                    >
                      <img className="img" src={PhoneIcon} alt="" />
                      <span>
                        {operations?.contact?.phone ?? "0916 197 889"}
                      </span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="/">
                      <img className="img" src={LocationIcon} alt="" />
                      <span>
                        {operations?.contact?.address ??
                          "Số 10, khu dịch vụ 1, Xa La, Hà Đông, Hà Nội"}
                      </span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="http://vicone.vn/ ">
                      <img className="img" src={HomeIcon} alt="" />
                      <span>http://vicone.vn/ </span>
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={4} className="mt-3">
              <div className="upper-footer__fragment">
                <h5 className="title">Menu</h5>
                <div className="items">
                  <p>
                    <a className="item" href="#products">
                      <span>Sản phẩm</span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="#events">
                      <span>Sự kiện</span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="#coffee">
                      <span>Cafe VICONE</span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="#contact">
                      <span>Liên hệ</span>
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={4} className="mt-3">
              <div className="upper-footer__fragment">
                <h5 className="title">Hệ sinh thái Vicone</h5>
                <div className="items">
                  <p>
                    <a className="item" href="/">
                      <span>Vicone Milk</span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="/">
                      <span>Du lịch</span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="/">
                      <span>Bất động sản</span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="/">
                      <span>Quỹ đầu tư</span>
                    </a>
                  </p>
                  <p>
                    <a className="item" href="/">
                      <span>Hệ thống Health & Beauty</span>
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className="downer">
        <Container>
          <Row>
            <Col xs={6} lg={8} className="d-flex align-items-center">
              <img
                width="81"
                height="49"
                className="img"
                src={LogoUrl}
                alt="Vicone Logo"
              />
              <span
                className="footer-title"
                title="CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI VÀ DỊCH VỤ VICONE"
              >
                CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI VÀ DỊCH VỤ VICONE
              </span>
            </Col>
            <Col xs={6} lg={4} className="d-flex align-items-center">
              <a href="/">
                <span>
                  <img className="img" src={ZaloIcon} alt="" />
                </span>
              </a>
              <a href="/">
                <span>
                  <img className="img" src={FacebookIcon} alt="" />
                </span>
              </a>
              <a href="/">
                <span>
                  <img className="img" src={InstagramIcon} alt="" />
                </span>
              </a>
              <a href="/">
                <span>
                  <img className="img" src={TelegramIcon} alt="" />
                </span>
              </a>
              <a href="/">
                <span>
                  <img className="img" src={WhatsappIcon} alt="" />
                </span>
              </a>
              <a href="/">
                <span>
                  <img className="img" src={YoutubeIcon} alt="" />
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </Wrapper>
  );
}

export default memo(ViconeFooter);
