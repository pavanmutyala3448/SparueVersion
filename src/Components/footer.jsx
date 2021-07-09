import React from "react";

import "./componentStyles/footer.css";

const Footer = () => {
  return (
    <div className='container-fluid Footer'>
    <div className='Footer-grid container'>
    <div className='FooterGrid-1'>
<h1 className='Footer-Heading'>LOGO</h1>
    </div>
    <div className='FooterGrid-2'>
<h4>Quick Links</h4>
<ul>
<li>
<a href='#'>How its Work</a>
</li>
<li>
<a href='#'>Guarantee</a>
</li>
<li>
<a href='#'>Security</a>
</li>
<li>
<a href='#'>Report Bug</a>
</li>
<li>
<a href='#'>Pricing</a>
</li>
</ul>
    </div>
    <div className='FooterGrid-3'>
    <h4>About Us</h4>
    <ul>
    <li>
    <a href='#'>About Company</a>
    </li>
    <li>
    <a href='#'>Jobs</a>
    </li>
    <li>
    <a href='#'>Teams</a>
    </li>
    <li>
    <a href='#'>Testimoniala</a>
    </li>
    <li>
    <a href='#'>Blog</a>
    </li>
    </ul>
    </div>
    <div className='FooterGrid-4'>
    <h4>Subscribe</h4>
    <input className='form-control' type='email' placeholder='Enter Email' />

    </div>
    </div>

    </div>
  );
};
export default Footer;
