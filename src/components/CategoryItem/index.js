import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

function CategoryItem(props) {
  const { img, name, link='/' } = props;
  return (
    <Wrapper>
      <Link to={link}>
        <div className="image-block">
          <img className="img" src={img && img} alt="" />
        </div>
        <div className="text-block">
          <h5 className="title">{name && name}</h5>
        </div>
      </Link>
    </Wrapper>
  );
};

export default memo(CategoryItem);