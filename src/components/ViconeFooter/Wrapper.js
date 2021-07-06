import styled from 'styled-components';

const Wrapper = styled.div`
  .upper {
    .upper-footer__fragment {
      max-width: fit-content;
      margin: 0 auto;
      .title {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: ${props => props.theme.mainWhite};
        &:after {
          content: "";
          display: block;
          margin-top: 10px;
          height: 2px;
          background: ${props => props.theme.mainWhite};
        }
      }
      .items {
        .item {
          text-decoration: none;
          color: ${props => props.theme.mainWhite};
          .img {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .downer {
    background-color: ${props => props.theme.navLinkColor};
    padding: 1rem 0;
    display: flex;
    align-items; center;
    .footer-title {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${props => props.theme.mainWhite};
    }
  }
`;

export default Wrapper;