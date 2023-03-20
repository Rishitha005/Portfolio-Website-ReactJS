import React from 'react';
import Logo from '../assets/logo.svg';
import MyCV from '../assets/S.R Samarathunga.pdf';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleDownloadCV = () => {
    // Create an anchor element with a download attribute pointing to the PDF file
    const link = document.createElement('a');
    link.href = MyCV;
    link.download = 'S.R Samarathunga.pdf';

    // Append the anchor element to the body and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the anchor element from the body
    document.body.removeChild(link);
  };

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <Link to="/">
            <img src={Logo} alt='Logo' />
          </Link>
          {/* button */}
          <button className='btn btn-sm' onClick={handleDownloadCV}>
            Download My CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

