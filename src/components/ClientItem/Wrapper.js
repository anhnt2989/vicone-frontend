import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  border-radius: 10px;
  position: relative;
  z-index: 3;
  .img-block {
    border-radius: 10px;
    .img {
      border-radius: 10px;
    }
  }
  .info-block {
    padding: 1rem 0.5rem;
    min-height: 180px;
    .full-name {
      color: ${props => props.theme.navLinkColor};
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }
    .summary {
      font-size: 12px;
      line-height: 18px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 80%;
    background-color: ${props => props.theme.clientBg};
    border-radius: 10px;
    z-index: -1;
    padding: 0 2rem;
  }
`;

export default Wrapper;