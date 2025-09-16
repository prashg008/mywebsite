import { Fragment } from 'react';

const SocialLinks = () => {
  return (
    <Fragment>
      <div className="links">
        <span>
          <a href="https://github.com/prashg008" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square fa-3x fa-fw" />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/prashanthg008/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-3x fa-fw" />
          </a>
        </span>
        <span>
          <a href="mailto:prashanthg008@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope-square fa-3x fa-fw" />
          </a>
        </span>
      </div>
    </Fragment>
  );
};

export default SocialLinks;