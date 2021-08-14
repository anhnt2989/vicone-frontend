import React, { memo, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import isEmpty from "lodash/isEmpty";

import MapBg from "assets/images/map.png";
import ProductImg from "assets/images/product-img.jpg";
import CoffeeHeader from "assets/images/coffee-header.jpg";
import CoffeeBg from "assets/images/coffee-bg.png";
import CategoryItem from "components/CategoryItem";
import ProductItem from "components/ProductItem";
import NewsItem from "components/NewsItem";
import ClientItem from "components/ClientItem";
import { slides, products, clients } from "constants/home-items";
import Routes from "constants/routes";
import HomePageWrapper, {
  CarouselItemWrapper,
  LoadMoreButton,
} from "./HomePageWrapper";
function HomePage(props) {
  const { history, operations } = props;
  const [newsList, setNewsList] = useState([]);
  const [listPhanHoi, setListPhanHoi] = useState([]);
  const [detailReason, setDetailReason] = useState("");
  const [detailData, setDetailData] = useState([]);
  const [imgSlide, setImgSlide] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.vicone.vn/api/news?limit=5&page=1")
      .then((data) => {
        const news = data?.data?.data ?? [];
        setNewsList(news);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get(`https://api.vicone.vn/api/settings`).then((res) => {
      setListPhanHoi(res?.data?.customer?.data);
      setDetailReason(res?.data?.reason);
      setDetailData(res?.data?.reason?.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`https://api.vicone.vn/api/slide`).then(data => {
      console.log(data);
      setImgSlide(data?.data)
    })
  }, [])

  return (
    <HomePageWrapper>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {imgSlide.map((img, index) => (
          <CarouselItemWrapper key={`slide--${index}`}>
            <div className="layer" />
            <img className="img" alt="" src={img.img} />
            {
              slides.map((slide, index) =>
                <div key={index} className="slide-info">
                  <div className="logo-block">
                    <img className="img" src={slide.logo} alt="" />
                  </div>
                  <div className="text-block">
                    <h3 className="title-text text-uppercase">{slide.titleText}</h3>
                    <h1 className="brand-text text-uppercase">{slide.text}</h1>
                  </div>
                </div>
              )
            }

          </CarouselItemWrapper>
        ))}
      </Carousel>
      <section id="menu_1">
        <Container>
          <Row className="p-5 justify-content-center">
            <Col xs={12}>
              <h1 className="block-title">HỆ SINH THÁI VICONE</h1>
            </Col>
            {operations &&
              !isEmpty(operations) &&
              operations?.ecosystem?.data?.map((category, index) => (
                <Col
                  sm={12}
                  md={4}
                  lg={2}
                  key={`category--${index}`}
                  className="mt-3"
                >
                  <CategoryItem {...category} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <section className="products-section" id="menu_2">
        <Container
          style={{ background: `url(${MapBg}) center center no-repeat` }}
        >
          <Row>
            <Col xs={12}>
              <h1 className="block-title"> {detailReason?.title} </h1>
            </Col>
            <Col xs={12} lg={6} className="d-flex align-items-center">
              <div className="products">
                {products.map((product, index) => (
                  <ProductItem key={`product--${index}`} {...product} />
                ))}
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <img
                className="img"
                src={detailReason?.img}
                alt="Product Background"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="menu_3" className="events-section">
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className="block-title">TIN TỨC</h1>
            </Col>
            {newsList.length &&
              newsList.map((object, index) => (
                <Col
                  className="mt-4"
                  key={`news--${index}`}
                  xs={12}
                  md={index === 0 ? 12 : 6}
                >
                  <NewsItem isStuck={index === 0} {...object} />
                </Col>
              ))}
            <div className="text-center mt-5">
              <LoadMoreButton
                color="primary"
                onClick={() => history.push(Routes.NEWS)}
              >
                Xem thêm
              </LoadMoreButton>
            </div>
          </Row>
        </Container>
      </section>
      <section
        id="menu_4"
        className="coffee-section"
        style={{ background: `url(${CoffeeBg}) center center no-repeat` }}
      >
        <div className="section-header">
          <img className="img" src={CoffeeHeader} alt="" />
          <div className="layer" />
          <div className="slogan">
            <h1 className="title">
              VICONE GROUP
              <br />
              VÌ SỰ THÀNH CÔNG CỦA BẠN
            </h1>
          </div>
        </div>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className="block-title">KHÁCH HÀNG GỬI GẮM NIỀM TIN</h1>
            </Col>
          </Row>
          <Row>
            {listPhanHoi.map((client, index) => (
              <Col
                xs={12}
                md={6}
                lg={3}
                key={`client--${index}`}
                className="mt-4 px-5"
              >
                <ClientItem {...client} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </HomePageWrapper>
  );
}

export default memo(HomePage);
