import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Linkは不要なので削除も可
import pythonImage from '../images/python.png';
import CImage from '../images/C.jpg';
import javascriptImage from '../images/js.png';
import RaspberryPiImage from '../images/raspberrypi.png';
import ArduinoImage from '../images/arduino-logo.svg';
import ReactImage from '../images/React.png';
import HTMLImage from '../images/html.png';
import CSSImage from '../images/css.png';
import NextjsImage from '../images/nextjs-2.svg';

// --- データ定義 ---
const skillsData = [
  { image: pythonImage, alt: 'Python logo', title: 'Python', description: 'Python/MicroPythonが使えます' },
  { image: javascriptImage, alt: 'JavaScript logo', title: 'Javascript', description: 'Javascriptが使えます。' },
  { image: CImage, alt: 'C/C++ logo', title: 'C言語/C++', description: 'C言語/C++が使えます' },
  { image: RaspberryPiImage, alt: 'Raspberry Pi logo', title: 'RaspberryPi', description: 'RaspberryPiを用いた開発ができます' },
  { image: ArduinoImage, alt: 'Arduino logo', title: 'Arduino', description: 'ArduinoやM5などのマイコンを用いた開発ができます。' },
  { image: ReactImage, alt: 'React logo', title: 'React', description: 'ReactでちょっとしたWebページを開発することができます。'},
  { image: HTMLImage, alt: 'HTML logo', title: 'HTML', description: 'HTMLでちょっとしたWebページの開発をすることができます。'},
  { image: CSSImage, alt: 'css logo', title: 'css', description: 'cssでちょっとしたWebページを開発することができます。'},
  { image: NextjsImage, alt: 'next', title: 'NEXT.JS', description: 'next.jsを使用することができます。'}
];

const qualificationsData = [
  { name: '普通自動車免許', date: '2022年取得' },
  { name: 'ITパスポート', date: '2024年取得' },
  { name: '基本情報技術者', date: '2025年取得' }
];


const Skill = () => {
  // useNavigateフックを呼び出す
  const navigate = useNavigate();

  // 戻るボタンの処理を関数として定義
  const handleBack = () => {
    navigate(-1); // 履歴を一つ戻る
  };

  return (
    <div className='container-fluid text-center page-container'>
      
      {/* --- スキル セクション --- */}
      <section id="skills" className="my-5">
        <h2 className="title page-first-heading">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <img src={skill.image} alt={skill.alt} />
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 資格セクション --- */}
      <section id="qualifications" className="my-5">
        <h2 className="title">licenses</h2>
        <ul className="list-group">
          {qualificationsData.map((qual) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={qual.name}>
              {qual.name}
              <span className="badge bg-secondary">{qual.date}</span>
            </li>
          ))}
        </ul>
      </section>
      
      {/* --- ホームに戻るボタン (useNavigateを使用) --- */}
      <Button onClick={handleBack} variant="primary">
        ホームに戻る
      </Button>

    </div>
  );
};

export default Skill;