import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

function CategoryItem(props) {
  const { backgroundUrl, title, categoryUrl='/' } = props;
  return (
    <Wrapper>
      <Link to={categoryUrl}>
        <div className="image-block">
          <img className="img" src={backgroundUrl && backgroundUrl} alt="" />
        </div>
        <div className="text-block">
          <h5 className="title">{title && title}</h5>
        </div>
      </Link>
    </Wrapper>
  );
};

export default memo(CategoryItem);