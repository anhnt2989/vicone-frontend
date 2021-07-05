import React, { memo } from 'react';

import Wrapper from './Wrapper';

function ClientItem(props) {
  const { imgUrl, fullName, summary } = props;
  return (
    <Wrapper>
      <div className="img-block">
        <img className="img" src={imgUrl} alt="" />
      </div>
      <div className="info-block">
        <h5 className="full-name">{fullName && fullName}</h5>
        <p className="summary">{summary && summary}</p>
      </div>
    </Wrapper>
  );
};

export default memo(ClientItem);