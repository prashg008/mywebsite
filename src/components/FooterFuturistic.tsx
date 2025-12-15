const FooterFuturistic = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-futuristic">
      <div className="container">
        <p className="mb-2">
          &copy; {currentYear} <strong className="gradient-cyber-text">PRASHANTH G</strong>. All rights reserved.
        </p>
        <p className="footer-tagline">
          BUILT WITH REACT · TYPESCRIPT · VITE
        </p>
      </div>
    </footer>
  );
};

export default FooterFuturistic;
