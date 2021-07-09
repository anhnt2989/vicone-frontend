import styled from 'styled-components';

const NavbarWrapper = styled.div`
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.navbarBg};
  position: sticky;
  top: 0;
  z-index: 99;
  position: relative;
  .auto-scroll-text__link {
    color: ${props => props.theme.navLinkColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .navbar {
    .navbar-toggler {
      box-shadow: none;
      outline: none;
      margin: 1rem 1rem 0 1rem;
    }
    .navbar-collapse {
      justify-content: flex-end;
      position: relative;
      padding-right: 10%;
      margin-top: 2rem;
      @media only screen and (max-width: 768px) {
        padding-right: 0;
      }
    }
    .navbar-brand {
      padding-left: 3rem;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    .vicone-navitem {
      transition: all 0.3s cubic-bezier(.17,.67,.83,.67);
      text-align: center;
      a {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 18px;
        color: ${props => props.theme.navLinkColor} !important;
      }
      &:after {
        content: "";
        display: block;
        margin-top: 10px;
        height: 5px;
        background: ${props => props.theme.navLinkActivatedColor};
        opacity: 0;
        transition: all 0.2s cubic-bezier(.17,.67,.83,.67);
      }
      &.activated {
        a {
          color: ${props => props.theme.navLinkActivatedColor} !important;
        }
        &:after {
          opacity: 1;
        }
      }
    }
    
    @media only screen and (max-width: 768px) {
      padding-top: 1.8rem;
    }
    @media only screen and (max-width: 618px) {
      padding-top: 3rem;
    }
  }
`;

export const NavbarInfo = styled.div`
  background-color: ${props => props.theme.navLinkColor};
  position: absolute;
  right: 0;
  top: 0;
  min-width: 50%;
  max-width: 70%;
  padding: 6px 8px;
  text-align: center;
  .navbar-info__info {
    font-size: 12px;
    margin-right: 30px;
    color: ${props => props.theme.mainWhite};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    .img {
      margin-right: 5px;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -36px;
    width: 0;
    height: 0;
    border-top: 36px solid ${props => props.theme.navLinkColor};
    border-left: 36px solid transparent;
    @media only screen and (max-width: 645px) {
      left: -60px;
      border-top: 60px solid ${props => props.theme.navLinkColor};
      border-left: 60px solid transparent;
    }
  }
  @media only screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    &:before {
      display: none;
    }
  }
`;

export default NavbarWrapper;