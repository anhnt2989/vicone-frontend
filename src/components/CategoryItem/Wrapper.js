import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.categoryItemBg};
  border-radius: 8px;
  .image-block {
    border-radius: 10px 8px;
    max-width: 180px;
    max-height: 170px;
    margin: 0 auto;
    .img {
      width: 180px;
      height: 170px;
      min-width: 100%;
      min-height: 100%;
      border-radius: 10px 8px;
    }
  }
  .text-block {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    min-height: 72px;
    .title {
      color: ${props => props.theme.navLinkColor};
      font-weight: bold;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default Wrapper;