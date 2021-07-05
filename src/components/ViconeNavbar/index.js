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

import LogoUrl from 'assets/images/logo.png';
import MailIcon from 'assets/images/message.svg';
import PhoneIcon from 'assets/images/call.svg';
import LocationIcon from 'assets/images/location.svg';
import NavbarWrapper, { NavbarInfo } from './NavbarWrapper';

const navbarItems = [
  {
    id: 1,
    label: 'Giới thiệu',
    hash: '#info'
  },
  {
    id: 2,
    label: 'Sản phẩm',
    hash: '#products'
  },
  {
    id: 3,
    label: 'Sự kiện',
    hash: '#events'
  },
  {
    id: 4,
    label: 'Cafe Vicone',
    hash: '#coffee'
  },
  {
    id: 5,
    label: 'Liên hệ',
    hash: '#contact'
  },
];

function ViconeNavbar(props) {
  const { currentLocation } = props;
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
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img className="img" src={LogoUrl} alt="Vicone Logo" />
        </NavbarBrand>
        <NavbarInfo>
          <a className="navbar-info__info" href="mailto:gddhvicone@gmail.com">
            <img className="img" src={MailIcon} alt="" />
            <span>gddhvicone@gmail.com</span>
          </a>
          <a className="navbar-info__info" href="tel:0916197889">
            <img className="img" src={PhoneIcon} alt="" />
            <span>0916 197 889</span>
          </a>
          <a className="navbar-info__info" href="/">
            <img className="img" src={LocationIcon} alt="" />
            <span>số 10, khu dịch vụ 1,  Xa La, Hà Đông, Hà Nội</span>
          </a>
        </NavbarInfo>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              navbarItems.map(navItem => {
                return (
                  <NavItem
                    key={`nav-item--${navItem.id}`}
                    className={clsx(
                      "vicone-navitem",
                      isEqual(currentHash, navItem.hash) && 'activated'
                    )}
                  >
                    <NavLink href={navItem.hash}>{navItem.label}</NavLink>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
    </NavbarWrapper>
  )
};

export default memo(ViconeNavbar)