import React from 'react';

const Connect = () => {
  return (
    <div className="container page-container"> {/* page-containerクラスを追加 */}
      <h2 className="page-first-heading">Contact</h2> {/* page-first-headingクラスを追加 */}
      <div className="contact-info"> {/* h5をdivに変更 */}
        <address>
          <p className="affiliation">
            大阪工業大学 ロボティクス＆デザイン工学部<br />
            システムデザイン工学科
          </p>
          <p>
            <strong>住所:</strong><br />
            大阪府大阪市北区茶屋町1-45
          </p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:sota.yo4da@gmail.com">sota.yo4da@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong><br />
            <a 
              href="https://www.linkedin.com/in/Yo4da-Sota-166166372" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Sota Yoshida
            </a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default Connect;