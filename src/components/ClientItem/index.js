import React, { memo } from "react";
import "./index.css";
import Wrapper from "./Wrapper";

function ClientItem(props) {
  const { img, name, message } = props;
  return (
    <Wrapper>
      <div className="img-block">
        <img className="img widthImg" src={img} alt="" />
      </div>
      <div className="info-block">
        <h5 className="full-name">{name && name}</h5>
        <p className="summary">{message && message}</p>
      </div>
    </Wrapper>
  );
}

export default memo(ClientItem);
