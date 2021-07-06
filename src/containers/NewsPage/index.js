import React, { memo, useState, useEffect } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import head from 'lodash/head';
import drop from 'lodash/drop';
import isEqual from 'lodash/isEqual';

import Routes from 'constants/routes';

import NewsItem from 'components/NewsItem';

import Wrapper, { BreadCrumbsWrapper } from './Wrapper';

function NewsPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios.get(`http://api.vicone.vn/api/news?limit=${5}&page=${currentPage}`)
    .then(data => {
      const list = data?.data?.data ?? [];
      const current = data?.data?.current_page ?? 1;
      const pagesCount = data?.data?.last_page ?? 0;
      setNewsList(list);
      setCurrentPage(current);
      setTotalPages(pagesCount);
    })
    .catch(err => {
      console.log(err);
    })
  }, [currentPage]);

  const renderPaginationItems = () => {
    let items = [];
    for (let index = 1; index <= totalPages; index++) {
      items.push(
        <PaginationItem key={`pagination-item--${index}`} active={isEqual(currentPage, index)}>
          <PaginationLink onClick={() => setCurrentPage(index)}>
            {index}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return items;
  };

  return (
    <Wrapper>
      <BreadCrumbsWrapper>
        <Breadcrumb>
          <BreadcrumbItem><Link to={Routes.HOME}>Trang chủ</Link></BreadcrumbItem>
          <BreadcrumbItem active>Tin tức</BreadcrumbItem>
        </Breadcrumb>
      </BreadCrumbsWrapper>
      <Container className="my-5">
        {newsList.length > 0 ?
          <Row>
            <Col xs={12}>
              <NewsItem isStuck {...head(newsList)} />
            </Col>
            <React.Fragment>
              {
                drop(newsList).map((news, index) => (
                  <Col className="mt-5" key={`news--${index}`} xs={12} md={6}>
                    <NewsItem {...news} />
                  </Col>
                ))
              }
            </React.Fragment>
            <div className="pagination">
              <Pagination size="lg">
                <PaginationItem disabled={isEqual(currentPage, 1)}>
                  <PaginationLink first onClick={() => setCurrentPage(1)} />
                </PaginationItem>
                <PaginationItem disabled={currentPage <= 1}>
                  <PaginationLink previous onClick={() => setCurrentPage(currentPage - 1)} />
                </PaginationItem>
                {renderPaginationItems()}
                <PaginationItem disabled={currentPage >= totalPages}>
                  <PaginationLink next onClick={() => setCurrentPage(currentPage + 1)} />
                </PaginationItem>
                <PaginationItem disabled={isEqual(currentPage, totalPages)}>
                  <PaginationLink last onClick={() => setCurrentPage(totalPages)} />
                </PaginationItem>
              </Pagination>
            </div>
          </Row>
          :
          <div className="empty-content">Hiện chưa có tin mới</div>
        }
      </Container>
    </Wrapper>
  );
}

export default memo(NewsPage);