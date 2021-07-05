import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  .product__img-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }
  .product__text-block {
    .title {
      font-size: 18px;
      color: ${props => props.theme.navLinkColor};
      font-weight: bold;
    }
    .text {
      font-size: 12px;
      color: ${props => props.theme.prodText};
    }
  }
`;

export default Wrapper;