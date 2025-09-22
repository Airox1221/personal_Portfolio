import React, { useRef, useLayoutEffect, useEffect } from 'react';
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActivebox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    const link = lastActiveLink.current;
    activeBox.current.style.top = link.offsetTop + 'px';
    activeBox.current.style.left = link.offsetLeft + 'px';
    activeBox.current.style.width = link.offsetWidth + 'px';
    activeBox.current.style.height = link.offsetHeight + 'px';
  };

  useLayoutEffect(() => {
    initActivebox();
    window.addEventListener('resize', initActivebox);
    return () => window.removeEventListener('resize', initActivebox);
  }, []);

  const activelist = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    initActivebox();
  };

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active', ref: lastActiveLink },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:!hidden'},
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activelist}
        >
          {label}
        </a>
      ))}
      <div className='active-box' ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
