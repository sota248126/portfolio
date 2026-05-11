import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- 画像ファイルのインポート ---
// ご自身のプロジェクトの画像パスに合わせて適宜修正してください。
import ProfileImage from '../images/ProfileImage.jpg';
import pythonImage from '../images/python.png';
import CImage from '../images/C.jpg';
import javascriptImage from '../images/js.png';
import RaspiImage from '../images/raspberrypi.png';

// タイムライン用画像
import DrowsinessGlassesImage from '../images/drowsiness_glasses.jpg';
import TaiwanPBLImage from '../images/taiwan_pbl.jpg';
import TaiwanPBLImage2 from '../images/taiwan_pbl_2.jpg';
import TaiwanPBLImage3 from '../images/taiwan_pbl_3.jpg';
import SitToStandImage from '../images/Standup.jpg';
import AssistGloveImage from '../images/Assistglobe.jpg';
import ExpoImage1 from '../images/expo1.jpg';
import ExpoImage2 from '../images/expo2.jpg';
import ExpoImage3 from '../images/expo3.jpg';
import ExpoImage4 from '../images/expo4.jpg';
import HI2025Image1 from '../images/HI2025_1.jpg';
import HI2025Image2 from '../images/HI2025_2.jpg';
import HI2025Image3 from '../images/HI2025_3.jpg';
import HI2025Image4 from '../images/HI2025_4.jpg';
import JHF2025_1 from '../images/JHF2025_1.jpg';
import JHF2025_2 from '../images/JHF2025_2.jpg';
import JHF2025_3 from '../images/JHF2025_3.jpg';
import { title } from 'framer-motion/client';

// --- タイムライン用のアイコン定義 ---
const SchoolIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school-icon lucide-school"><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 5v16"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 5v16"/><circle cx="12" cy="9" r="2"/></svg>);
const CodeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /> </svg> );
const TrophyIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /> </svg> );
const PlaneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1.5-1.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /> </svg> );
const FlaskIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M9 2v10.3A5.002 5.002 0 0 0 12 22a5 5 0 0 0 3-1.7V2" /><path d="M6 2h12" /> </svg> );
const HandIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M18 18h-2.4c-1 0-1.9-.6-2.3-1.4l-2.6-5.2c-.3-.8-.9-1.4-1.7-1.4H4V6.5c0-1.4 1.1-2.5 2.5-2.5S9 5.1 9 6.5V10" /><path d="M18 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-4.4" /> </svg> );
const BriefcaseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> );

// --- タイムライン用のデータ定義 ---
const timelineEvents = [
    { date: "2022年4月",
      title: "大阪工業大学 入学",
      description: "ロボティクス＆デザイン工学部 システムデザイン工学科に入学。",
      icon: <SchoolIcon /> },

    { date: "2022年9月",
      title: "居眠り防止キット開発",
      description: "PAS株式会社との企業連携プロジェクトで、プロトタイプを開発。",
      details:(
      <>
      M5StickCPluseを用いて、居眠り防止キッドを開発。
      <br />開発時期: 2022年6月～2022年9月
      <br />使用技術: Arduino, センサ技術
      <br />
      <br />会議や授業で眠くなってきたら、ボタンを押してキッドを振動させることによって起きることができるシステムです。
      <br />3,3,7拍子のリズムで振動させることによって、眠気を覚ましやすくすることができます。
      <br />
      <br />このプロジェクトを通じて、1年生のからArduinoを用いた開発やチーム開発の経験を積むことができたのでよかったです!
      </>
      ),
      icon: <CodeIcon /> },

    { date: "2023年3月",
      title: "関西地区個人売上トップ5を達成",
      description: "2022年9月より勤務するスポーツショップのアルバイトで、2023年1～3月期において関西地区での個人売上トップ5を達成した。",
      details: (
        <>この実績を上げるため、単に商品を説明するだけでなく、お客様が抱える課題や目標を丁寧にヒアリングすることを徹底しました。
      <br/>その上で、自身の持つ商品知識を活かし、お客様一人ひとりに最適な商品を提案し続けた結果が、この実績に繋がったと思います。
      <br/>この経験を通じて、お客様の潜在的なニーズを引き出すヒアリング力と、信頼関係を築くコミュニケーション能力を培うことができました。
      </>
      ),
      icon: <TrophyIcon /> },

    { date: "2024年7月",
      title: "居眠り防止グラス開発",
      description: "大学の授業の一環で、既存キットを改良した「居眠り防止グラス」を開発。",
      images: [DrowsinessGlassesImage], // 画像が1枚でも配列で囲む
      details:
      <>開発時期: 2024年5月～2024年7月　開発人数: 3人
      <br/>使用技術: Arduino, センサ技術
      <br/>詳細: M5StickC Plusの内蔵ジャイロセンサーを利用し、利用者の「首の角度」や「屈曲リズム」をリアルタイムで計測します。居眠り特有のパターンを検知すると、モジュールを振動させて覚醒を促すシステムです。
      <br/>
      <br/>1カ月弱という短い期間で開発を行う授業だったので、チーム内で役割分担をしないと確実に間に合わなかったのでリーダとしてそこを一番気を付けました。
      <br/>このプロジェクトを通じて、チーム開発で大切なコミュニケーションの部分やセンサ技術を身につけることができました。</>,
      icon: <CodeIcon /> },

    { date: "2024年9月",
      title: "国際PBL参加 (台湾)",
      description: "台湾の大学と連携し、グローバルな課題解決プロジェクトに参加。",
      images: [TaiwanPBLImage, TaiwanPBLImage2, TaiwanPBLImage3], // 複数枚の画像
      details:
      <>台湾の国立雲林科技大学で高齢者が抱える問題について解決する方法を考えるプロジェクトを行いました。
      <br/>私たちのチームは高齢者の孤独問題を解決するために移動式集会場を提案しました。
      <br/>内容は、移動式集会場を用いて高齢者が集まりやすい環境を作り、そこでお茶会やゲームなどを行うことで高齢者同士の交流を促進するというものです。
      <br/>
      <br/>このプロジェクトを通じて、国際的な視点での課題解決能力や異文化コミュニケーション能力を高めることができました。
      <br/>また、台湾の学生は英語でのコミュニケーションが得意な人が多く、それに対して私たちは英語でのコミュニケーションが拙かったため、英語力の向上も必要だと感じました。
      <br/>この経験を活かし、今後は英語力の向上にも力を入れていきたいと思いました。
      </>,
      icon: <PlaneIcon /> },

    { date: "2024年10月",
      title: "研究テーマ: 起立動作支援",
      description: "新たな研究テーマとして、高齢者などを対象とした起立動作の支援に着手。",
      images: [SitToStandImage], // 画像が1枚でも配列で囲む
      details:
      <>従来の起立動作支援装置は完全に支援するものであったため、使用し続けると筋力が衰えてしまう恐れがありました。
      <br/>なので、この装置ではある程度は最初は自分の力で立たせようとし、ある地点で臀部を押し上げる装置です。
      <br/>こうすることによって、筋力が衰えにくく起立を支援することができます。
      <br/>しかし、支援のタイミングなど決まっていなかったのでそれに関する研究をしてます。</>,
      icon: <FlaskIcon /> },

    { date: "2025年4月",
      title: "研究テーマ変更: アシストグローブ",
      description: "研究の焦点を、より汎用性の高いアシストグローブの開発へ移行。",
      images: [AssistGloveImage], // 画像が1枚でも配列で囲む
      details: 
      <>従来のアシストグローブは指が接触したタイミングでアシストをしていました。
      <br/>しかし、それではアシストタイミングにずれが起きてしまいユーザがスムーズに使用することが難しいです。
      <br/>また、手を離すときも力を入れないと離しにくいという問題がある。
      <br/>なので、私は筋電位を用いてアシストの開始やアシストの終了を認識しようと研究をしています。</>,
      icon: <HandIcon /> },

    {   date: "2025年8月",
        title: "大阪・関西万博 デモ出展",
        description: "大阪・関西万博の大阪ヘルスケアパビリオンにて、アシストグローブのデモ展示を行いました。",
        images: [ExpoImage1, ExpoImage2, ExpoImage3, ExpoImage4], // 画像が1枚でも配列で囲む
        details: 
        <>大阪・関西万博の大阪ヘルスケアパビリオンにて、アシストグローブのデモ展示を行いました。
        <br/>初めての野外展示で、思ってもなかった機材のトラブルなどありましたが、チーム一丸となって何とか成功することができました。
        <br/>来場者の方々からは老後までに実用化してほしいなどの声をいただき、非常に励みになりました。
        <br/>これからもアシストグローブの研究開発を頑張っていきたい思いました。
        </>,
        icon: <SchoolIcon />
    },

    {
        date: "2025年9月",
        title: "ヒューマンインターフェースシンポジウム2025で発表",
        description: "金沢工業大学で初めての学会発表を行いました。",
        images: [HI2025Image1, HI2025Image2, HI2025Image3, HI2025Image4], // 画像が1枚でも配列で囲む
        details: 
        <>ヒューマンインターフェースシンポジウム2025で初めての学会発表を行いました。
        <br/>発表のタイトルは「アシストグローブにおける筋電位を用いた把持動作検出手法の検討」です。
        <br/>従来の圧センサを用いた把持動作検出でアシストを行うと、実際の動作に比べて支援が遅くなってしまう課題がありました。
        <br/>そこで、把持動作に先立って起こる「手を開く動作」着目し、その有効性を実験により示した結果について発表しました。
        <br/>初めての学会発表で緊張しましたが、回数を重ねるにつれてうまく伝えることができ、色々な議論ができ楽しかったです！
        <br/>行きの新幹線ではポスターを忘れかけるというハプニングもありましたが、無事に発表できてよかったです!
        </>,
        icon: <SchoolIcon />
    },

    {
        date: "2025年9月",
        title: 'AIアドバイザーの長期インターンを開始',
        description: '株式会社VEXUMでAIアドバイザーとして長期インターンを開始しました。',
        details:
        <>株式会社VEXUMでAIアドバイザーとして長期インターンを開始しました。
        <br/>行っていることは、主に顧客企業に常駐をしてAIに関するアドバイスを行ったり、AI導入のサポートを行っています。
        <br/>大学の研究で培った知識や新たに得た知見を活かして、実際のビジネス現場でAI技術を応用する経験を積んでいます。
        <br/>このインターンを通じて、AI技術の実践的な応用力とビジネスコミュニケーション能力を高めていきたいと考えています。
        </>,
        icon: <BriefcaseIcon />
    },

    {
        date: "2025年12月",
        title: "日本人間工学会関西支部大会2025で発表",
        description: "京都工芸繊維大学で初めてのオーラル発表を行いました。",
        images: [JHF2025_1, JHF2025_3, JHF2025_2], // 画像が1枚でも配列で囲む
        details: 
        <>日本人間工学会関西支部大会2025で初めてのオーラル発表を行いました。
        <br/>発表のタイトルは「総指伸筋の筋電位を用いたアシストグローブにおける把持動作予測手法の評価」です。
        <br/>今回は前回の学会発表の結果を踏まえて、把持動作予測手法の評価を行いました。
        <br/>初めてのオーラル発表で緊張し、質疑応答の時間もあまり取れなかったのが反省点ですが、貴重な経験となりました。
        <br/>今後も学会発表の機会を増やし、研究内容をより多くの人に伝えていきたいと思います！
        </>,
        icon: <SchoolIcon />
    },    
];

const Homepage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // --- ここからスワイプ検出ロジックを追加 ---
    const touchStartXRef = useRef(null);
    const touchStartYRef = useRef(null);
    const touchMovedRef = useRef(false);
    const SWIPE_THRESHOLD = 40; // 左右に40px以上でスワイプ判定

    const nextImage = (len) => {
        setCurrentImageIndex((idx) => (idx + 1) % len);
    };
    const prevImage = (len) => {
        setCurrentImageIndex((idx) => (idx - 1 + len) % len);
    };

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        touchStartXRef.current = touch.clientX;
        touchStartYRef.current = touch.clientY;
        touchMovedRef.current = false;
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const dx = touch.clientX - touchStartXRef.current;
        const dy = touch.clientY - touchStartYRef.current;
        if (Math.abs(dx) > Math.abs(dy)) {
            // 横方向が優勢なときだけ既定のスクロールを抑制
            e.preventDefault();
            touchMovedRef.current = true;
        }
    };

    const handleTouchEnd = (e) => {
        if (!selectedEvent?.images || selectedEvent.images.length <= 1) return;
        if (touchStartXRef.current == null) return;

        const len = selectedEvent.images.length;
        const endX = e.changedTouches?.[0]?.clientX ?? touchStartXRef.current;
        const deltaX = endX - touchStartXRef.current;

        if (deltaX < -SWIPE_THRESHOLD) {
            nextImage(len); // 左スワイプ → 次へ
        } else if (deltaX > SWIPE_THRESHOLD) {
            prevImage(len); // 右スワイプ → 前へ
        }

        // リセット
        touchStartXRef.current = null;
        touchStartYRef.current = null;
        touchMovedRef.current = false;
    };
    // --- スワイプロジックここまで ---

    const handleIconClick = (event) => {
        setSelectedEvent(event);
        setCurrentImageIndex(0); // ボックスを開く際に必ず最初の画像にリセット
    };

    const closeDetailsBox = () => {
        setSelectedEvent(null);
    };

    return (
        <>
            {/* ★★★ ここから <main> タグを追加 ★★★ */}
            <main>
                {/* 詳細表示ボックス */}
                {selectedEvent && (
                    <>
                        <div className="details-backdrop" onClick={closeDetailsBox}></div>
                        <div className="details-box-from-top">
                            <div className="details-box-content">
                                {/* 画像スライダー */}
                                {selectedEvent.images && selectedEvent.images.length > 0 && (
                                    <div
                                        className="image-slider-container"
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd}
                                    >
                                        <img 
                                            src={selectedEvent.images[currentImageIndex]} 
                                            alt={selectedEvent.title} 
                                            className="details-image" 
                                        />
                                        {selectedEvent.images.length > 1 && (
                                            <div className="image-indicators">
                                                {selectedEvent.images.map((_, index) => (
                                                    <span
                                                        key={index}
                                                        className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                    ></span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                                
                                {/* テキストコンテンツ */}
                                <div className="text-content">
                                    <time>{selectedEvent.date}</time>
                                    <h3>{selectedEvent.title}</h3>
                                    <p>{selectedEvent.description}</p>
                                    {selectedEvent.details && <div className="more-details">{selectedEvent.details}</div>}
                                </div>
                            </div>
                            <button onClick={closeDetailsBox} className="close-button">×</button>
                        </div>
                    </>
                )}

                {/* --- メインページコンテンツ --- */}
                <div className='portfolio'>
                    <h2>Portfolio</h2>
                </div>
                <div className='name'>
                    <img src={ProfileImage} alt="プロフィール画像" />
                </div>

                {/* 自己紹介ボックス */}
                <div className="container">
                    <div className='myslef-textbox'>
                        <h5>Self-Introduction</h5>
                        <p><strong>人とテクノロジーが調和した未来を、その手からデザインする。</strong></p>
                        <p>はじめまして。大阪工業大学ロボティクス＆デザイン工学部 システムデザイン工学科の吉田壮汰です。</p>
                        <p>私は、ヒューマンセンシング研究室に所属し、動作の認識や解析をさまざまなセンサを用いて行っています。現在は、人の能力を拡張する「アシストグローブ」の研究に力を入れています。</p>
                        <p>研究活動だけにとどまらず、学内外のプロジェクトへの参加や海外留学にも挑戦し、技術力と多角的な視野を養ってきました。</p>
                    </div>
                </div>

                {/* 経歴 */}
                <div className="container">
                    <div className='my-timeline-wrapper'>
                        <h2 className="title">Timeline</h2>
                        <div className="timeline-container">
                            {timelineEvents.map((event, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-item-content">
                                        <div className="timeline-icon" onClick={() => handleIconClick(event)}>
                                            {event.icon}
                                        </div>
                                        <time className="timeline-date">{event.date}</time>
                                        <h3 className="timeline-title">{event.title}</h3>
                                        <p className="timeline-description">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* スキル */}
                <section id="skill" className='container text-center'>
                    <div className="skills-container">
                        <h2 className="title">Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <img src={pythonImage} alt="Python logo" />
                                <h4>Python</h4>
                                <p>Python/MicroPythonが使えます</p>
                            </div>
                            <div className="skill-card">
                                <img src={javascriptImage} alt="JavaScript logo" />
                                <h4>Javascript</h4>
                                <p>Javascriptが使えます</p>
                            </div>
                            <div className="skill-card">
                                <img src={CImage} alt="C/C++ logo" />
                                <h4>C言語/C++</h4>
                                <p>C言語/C++が使えます</p>
                            </div>
                            <div className="skill-card">
                                <img src={RaspiImage} alt="Rasberry Pi logo" />
                                <h4>Rasberry Pi</h4>
                                <p>Rasberry Pi Picoが使えます</p>
                            </div>
                        </div>
                        <Link to="/skills" className="btn btn-primary">スキル/資格一覧</Link>
                    </div>
                </section>
            </main>
            {/* ★★★ ここで <main> タグを閉じる ★★★ */}
        </>
    );
};

export default Homepage;
