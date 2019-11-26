import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="company">
        <div className="company__copyright">&copy; Wolnik Ltd</div>
        <div className="company__address">First Floor<br/>
        Telecom House<br/>
        125-135 Preston Road<br/>
        Brighton, BN1 6AF<br/></div>
      </div>
      <div className="design-credits">
        Design: <a href="http://html5up.net">HTML5 UP</a>
      </div>
      <div className="bluetooth-sig-application"></div>
    </footer>
  );
}
