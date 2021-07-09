import React, { Children } from "react";
import styled from 'styled-components';
import Marquee from "react-fast-marquee";

const StyledMarquee = styled(Marquee)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 98;
  width: 80%;
  a {
    color: ${props => props.theme.navLinkColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TextScroller = (props) => {
  return (
    <StyledMarquee {...props}>
      {Children.toArray(props.children)}
    </StyledMarquee>
  )
};

export default TextScroller;