import React, { memo, useState, useEffect } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import parse from 'html-react-parser';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { BreadCrumbsWrapper } from 'containers/NewsPage/Wrapper';
import Routes from 'constants/routes';
import appConfig from 'constants/appConfig';

import Wrapper from './Wrapper';


function NewsDetailsPage(props) {
  const location = useLocation();
  const [currentNews, setCurrentNews] = useState();

  useEffect(() => {
    if (location) {
      const news = location?.state?.current ?? null;
      setCurrentNews(news);
    }
  }, [location]);
  
  return (
    <Wrapper>
      <BreadCrumbsWrapper>
        <Breadcrumb>
          <BreadcrumbItem><Link to={Routes.HOME}>Trang chủ</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to={Routes.NEWS}>Tin tức</Link></BreadcrumbItem>
          <BreadcrumbItem active>{currentNews?.slug ?? 'Chi tiết'}</BreadcrumbItem>
        </Breadcrumb>
      </BreadCrumbsWrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="title">{currentNews?.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="d-flex align-items-center w-100 h-100 time-text">
              <div>
                <span>Tạo: {dayjs(currentNews?.created_at).format('DD/MM/YYYY HH:mm')}</span>
              </div>
              <div>
                <span>Sửa lần cuối: {dayjs(currentNews?.updated_at).format('DD/MM/YYYY HH:mm')}</span>
              </div>
            </div>
          </Col>
        </Row>
        {currentNews?.logo && <Row className="mt-5">
          <Col xs={12}>
            <img className="img" src={`${appConfig.BASE_URL}${currentNews?.logo}`} alt={currentNews?.slug} />
          </Col>
        </Row>}
        <Row className="mt-5">
          <Col xs={12}>
            {currentNews && parse(currentNews?.content)}
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default memo(NewsDetailsPage);