import React, { memo } from 'react';
import { Row, Col } from 'reactstrap';
import Wrapper from './Wrapper';

function ProductItem(props) {
  const { icon, title, text } = props;
  return (
    <Wrapper>
      <Row>
        <Col xs={3}>
          <div className="product__img-block">
            <img className="img" src={icon || ''} alt="" />
          </div>
        </Col>
        <Col xs={9}>
          <div className="product__text-block">
            <h5 className="title">{title && title}</h5>
            <p className="text">{text && text}</p>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default memo(ProductItem);