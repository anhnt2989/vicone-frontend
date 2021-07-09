import React, { memo, useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import clsx from 'clsx';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { useHistory } from 'react-router';

import LogoUrl from 'assets/images/logo.png';
import MailIcon from 'assets/images/message.svg';
import PhoneIcon from 'assets/images/call.svg';
import LocationIcon from 'assets/images/location.svg';
import NewIcon from 'assets/images/hot-icon.gif';
import Routes from 'constants/routes';

import TextScroller from 'components/TextScroller';
import NavbarWrapper, { NavbarInfo } from './NavbarWrapper';

function ViconeNavbar(props) {
  const { currentLocation, operations, newsList } = props;
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    if (currentLocation) {
      const hash = currentLocation.hash;
      setCurrentHash(hash);
      if (hash && !isEmpty(hash)) {
        window.scrollTo({ top: document.getElementById(hash)?.offsetTop, behavior: 'smooth' });
      }
    }
    return () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentLocation]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarWrapper>
      <Navbar expand="lg" light>
        <NavbarBrand href="/">
          <img className="img" src={LogoUrl} alt="Vicone Logo" />
        </NavbarBrand>
        <NavbarInfo>
          <a className="navbar-info__info" href={`mailto:${operations?.contact?.email ?? 'gddhvicone@gmail.com'}`}>
            <img className="img" src={MailIcon} alt="" />
            <span>{operations?.contact?.email ?? 'gddhvicone@gmail.com'}</span>
          </a>
          <a className="navbar-info__info" href={`tel:${operations?.contact?.phone ?? '0916197889'}`}>
            <img className="img" src={PhoneIcon} alt="" />
            <span>{operations?.contact?.phone ?? '0916 197 889'}</span>
          </a>
          <a className="navbar-info__info" href="/">
            <img className="img" src={LocationIcon} alt="" />
            <span>{operations?.contact?.address ?? 'Số 10, khu dịch vụ 1, Xa La, Hà Đông, Hà Nội'}</span>
          </a>
        </NavbarInfo>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              operations && operations?.menu?.data?.map(navItem => {
                return (
                  <NavItem
                    key={`nav-item--${navItem.id}`}
                    className={clsx(
                      "vicone-navitem",
                      isEqual(currentHash, navItem.hash || '#') && 'activated'
                    )}
                  >
                    <NavLink href={navItem?.hash ?? '#'}>{navItem.name}</NavLink>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
      <TextScroller
        pauseOnHover
        speed={50}
      >
        {newsList && !isEmpty(newsList) && newsList.map(news => {
          const { id, title, slug, logo, created_at, updated_at, content } = news;
          return (
            <div key={`news--${id}`} className="d-flex align-items-center">
              <div style={{width: 30, height: 30}}>
                <img className="img" src={NewIcon} alt="new icon" />
              </div>
              <span className="auto-scroll-text__link" style={{marginRight: '1rem'}} onClick={() => history.push({ pathname: `${Routes.NEWS}/${slug}`, state: { current: { logo, created_at, updated_at, title, content, slug } } })}>{title}</span>
            </div>
          ) 
        })}
      </TextScroller>
    </NavbarWrapper>
  )
};

export default memo(ViconeNavbar)