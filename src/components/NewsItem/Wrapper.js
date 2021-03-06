import styled from 'styled-components';

const Wrapper = styled.div`
  .img-block {
    border-radius: 25px;
    width: 100%;
    height: 100%;
    max-height: 300px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    img {
      border-radius: 25px;
    }
  }
  .text-block {
    padding: 1rem;
    .date {
      color: ${props => props.theme.newsDateColor};
      font-size: 14px;
      &.stuck {
        font-size: 18px;
      }
    }
    .title {
      color: ${props => props.theme.navLinkColor};
      font-size: 18px;
      line-height: 32px;
      text-transform: capitalize;
      width; 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      &.stuck {
        font-weight: bold;
        font-size: 24px;
        line-height: 42px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    .text {
      &.stuck {
        font-size: 18px;
        line-height: 32px;
      }
    }
    a {
      text-decoration: none;
    }
  }
`;

export default Wrapper;