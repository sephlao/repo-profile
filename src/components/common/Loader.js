import React from 'react';
import './Loader.scss';
class Loading extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<div id="query-loader">
      <div className="loader">
        <span />
        <span />
        <span />
        <span />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>);
  }
}

export default Loading;
