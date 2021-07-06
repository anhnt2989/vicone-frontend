import styled from 'styled-components';
import { Button } from 'reactstrap';

const HomePageWrapper = styled.div`
  .block-title {
    text-align: center;
    color: ${props => props.theme.navLinkColor};
    font-weight: bold;
    margin-bottom: 3rem;
    font-size: 48px;
  }
  .products-section {
    background-color: ${props => props.theme.productsSectionBg};
    padding-top: 1rem;
    padding-bottom: 3rem;
    z-index: 9;
    .container {
      position: relative;
      z-index: 0;
      .block-title {
        margin-top: 3rem;
      }
      .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        text-align: center;
      }
      .products {
        margin: auto 0;
      }
    }
  }
  .events-section {
    padding-bottom: 3rem;
    .container {
      .block-title {
        margin-top: 3rem;
      }
    }
  }
  .coffee-section {
    padding-bottom: 5rem;
    .section-header {
      position: relative;
      .layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.coffeeLinearGradient};
        z-index: 9;
      }
      .slogan {
        background-color: ${props => props.theme.navLinkColor};
        position: absolute;
        left: 50%;
        bottom: -40px;
        transform: translateX(-50%);
        padding: 1rem;
        min-width: 60%;
        z-index: 9;
        .title {
          font-weight: 900;
          font-size: 48px;
          line-height: 64px;
          color: ${props => props.theme.altWhite};
          text-align: center;
        }
        @media only screen and (max-width: 1212px) {
          position: inherit;
          bottom: 0;
        }
        @media only screen and (max-width: 500px) {
          display: none;
        }
      }
    }
    background-color: ${props => props.theme.productsSectionBg};
    .container {
      padding: 5rem 0;
      .block-title {
        font-size: 24px;
      }
    }
  }
`;

export const CarouselItemWrapper = styled.div`
  max-height: calc(100vh - 120px);
  position: relative;
  .layer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: ${props => props.theme.slideLinearGradient};
  }
  .slide-info {
    z-index: 9;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    .logo-block {
      max-width: 170px;
      margin: auto;
    }
    .text-block {
      margin-top: 1rem;
      .title-text, .brand-text {
        color: ${props => props.theme.mainWhite};
        font-weight: bold;
      }
      .brand-text {
        position: relative;
        margin-top: 1rem;
        font-size: 48px;
        &:before, &:after {
          content: "";
          background-color: ${props => props.theme.mainWhite};
          position: absolute;
          width: 10%;
          height: 10px;
        }
        &:before {
          top: 50%;
          left: 20%;
          transform: translateY(-50%);
        }
        &:after {
          top: 50%;
          right: 20%;
          transform: translateY(-50%);
        }
      }
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const LoadMoreButton = styled(Button)`
  max-width: 200px;
  background-color: ${props => props.theme.loadMoreBtn};
  border-color: ${props => props.theme.loadMoreBtn};
`;

export default HomePageWrapper;