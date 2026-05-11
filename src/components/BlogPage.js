import React, { useState } from 'react';

// 画像ファイルをインポート
import SleepPASImage from '../images/pas.png';
import RDclubImage from '../images/RDclub.png';
import ProgImage from '../images/prog.png';
import DrowsinessGlassesImage from '../images/drowsiness_glasses.jpg';
import StudentPRImage from '../images/student_pr.jpg';
import TaiwanPBLImage from '../images/taiwan_pbl.jpg';
import ExpoImage1 from '../images/expo1.jpg';

// --- プロダクトデータ定義 ---
const productsData = [
    {
    date: "2024年6月~8月",
    title: '居眠り防止グラス',
    description: "M5StackCplusを用いて、居眠りしそうになったらキットが振動し、居眠りを防止するグラスを開発しました",
    image: DrowsinessGlassesImage,
    details: {
      period: "2024年5月～2024年7月（約1ヶ月半）",
      technology: "M5StackCplus, ジャイロセンサー,　脈拍センサ, 3Dプリンター, Fusion360",
      features: [
        "ジャイロセンサーによる首の角度リアルタイム検知",
        "居眠りパターンの自動認識アルゴリズム",
        "段階的な振動強度による覚醒促進",
      ],
      team: "3名",
      learning: "短期間でのプロジェクト完遂という制約の中で、リーダーとしてメンバーの進捗管理と適切なタスク分配の重要性を学びました。技術面では、センサーデータの処理とパターン認識のアルゴリズム開発スキルが向上し、3Dプリンターを活用した筐体設計の知識も習得できました。"
    }
  },

  {
    date: "2022年9月~12月",
    title: '自動販売機',
    description: "micro:bitを用いて自動販売機を開発しました。お金を入れると飲み物が出てきて、あればお釣りも出せます。",
    image: ProgImage,
    details: {
      period: "2022年9月～2022年12月（3ヶ月間）",
      technology: "micro:bit, サーボモータ, 赤外線センサー, LED",
      features: [
        "硬貨認識機能（10円、50円、100円対応）",
        "お釣り計算・自動排出機能",
        "複数商品の選択機能"
      ],
      team: "学生6名",
      learning: "1年生の時に大学の授業初めて3学科合同(デザイン系、システム系、ロボット系)で開発を行いました。自分はシステム系として、micro:bitを用いたプログラミングを担当しました。このプロジェクトを通じて、チームで協力して一つのものを作り上げる楽しさや難しさを学びました。また、他学科の学生と交流することで、それぞれの学科特有の考え方を学ぶことができました。"
    }
  },

    { 
    date: "2022年6月~9月",
    title: '居眠り防止キット',
    description: "M5StackCplusを用いて、居眠りしそうになったらボタンを押しキットを振動させることで居眠りを防止するキットを開発",
    image: SleepPASImage,
    // Products用の詳細情報
    details: {
      period: "2022年6月～2022年9月（4ヶ月間）",
      technology: "Arduino, M5StackCplus, 振動モータ, C++",
      features: [
        "3,3,7拍子のリズムで振動させることで効果的に覚醒",
        "ボタン一つで簡単操作",
        "携帯可能なコンパクト設計",
        "USB充電式で繰り返し使用可能"
      ],
      team: "学生5名",
      learning: "このプロジェクトを通じて、1年生からArduinoを用いた開発技術を習得したり、企業連携してユーザのニーズを反映した製品開発を経験できたのは自分の中でもすごく大きかったと感じました。また、チームでの役割分担やスケジュール管理の重要性も学ぶことができました。"
    }
  }
];

// --- アクティビティデータ定義 ---
const activityData = [
  {
    date: "2025年8月",
    title: '大阪・関西万博でデモンストレーションを実施',
    description: '大阪・関西万博でアシストグローブのデモンストレーションを行いました。多くの方に体験していただきました。',
    image: ExpoImage1,
    // Activities用の詳細情報（簡略化）
    details: {
      overview: "大阪・関西万博の大阪ヘルスケアパビリオンにて、研究室で開発したアシストグローブのデモンストレーションを担当しました。来場者に実際に装着してもらい、操作方法の説明や効果の体験を提供しました。",
      team: "研究室メンバー8名",
      role: "メイン説明員・デモ実演担当として、来場者への技術説明と実機デモンストレーションを担当",
      learning: "初めての大規模イベントかつ野外でのデモンストレーションで、多くの来場者に対応する難しさを実感しました。限られた時間内で効果的に技術の魅力を伝えるためのコミュニケーションスキルが向上しました。また、様々な年齢層の方々と接することで、技術説明の柔軟性と適応力も養うことができました。"
    }
  },
  {
    date: "2024年9月",
    title: '国際PBLで台湾に短期留学',
    description: '台湾の学生と高齢者問題についてのPBLに参加しました。現地の学生と協力し、提案を行いました',
    image: TaiwanPBLImage,
    details: {
      overview: "台湾の国立雲林科技大学で2週間の国際PBLプログラムに参加し、高齢者の孤独問題解決に取り組みました。移動式集会場というコンセプトを提案し、最終発表では優秀賞を受賞しました。",
      team: "日本人2名、台湾人2名の4名チーム",
      role: "ファシリテーターとプレゼンテーション資料作成を担当、英語での最終発表も実施",
      learning: "英語でのコミュニケーション能力の重要性を痛感し、今後の学習意欲が高まりました。また、異文化の視点から問題解決にアプローチすることで、新しい発想方法を学びました。国際的なチームワークの難しさと楽しさを同時に経験できました。"
    }
  },
  {
    date: "2022年5月~9月",
    title: '企業連携型インターンシップ(RDクラブ)に参加',
    description: '企業の課題解決に取り組むインターンシップに参加。チームで協力し、プロトタイプを作成し発表を行いました。',
    image: RDclubImage,
    details: {
      overview: "PAS株式会社と連携し、実際の企業課題である「作業現場での安全性向上」に対してIoTソリューションを提案・開発しました。4ヶ月間、週1回の企業とのミーティングを重ね、最終的にプロトタイプを完成させて提案を行いました。",
      team: "学生9名",
      role: "技術担当として、センサーシステムの設計とプロトタイプの実装を担当",
      learning: "実際の企業が抱える課題に取り組むことで、ビジネス視点での問題解決能力が身につきました。定期的な進捗報告やフィードバックへの対応を通じて、PDCAサイクルの重要性を理解し、実践的なプロジェクト管理スキルを習得できました。"
    }
  },
  {
    date: "2022年4月~現在",
    title: '学生広報スタッフに所属',
    description: 'オープンキャンパスなどの運営をする団体に所属、3年次にはリーダーグループに所属してました。',
    image: StudentPRImage,
    details: {
      overview: "大学の魅力を高校生や保護者に伝える学生広報スタッフとして3年以上活動しています。年間20回以上のイベント運営に携わり、オープンキャンパスの来場者数を前年比20%増加させることに貢献しました。",
      team: "約30名の学生スタッフ（3年次はリーダーグループ4名の一員として活動）",
      role: "3年次には副リーダーとして、新人教育とイベント企画・運営の統括を担当",
      learning: "大規模なチームをまとめるリーダーシップと、多様な価値観を持つメンバーとの調整能力が身につきました。また、高校生や保護者の方々とのコミュニケーションを通じて、相手の立場に立って物事を伝える力が大きく向上しました。長期的な組織運営の経験は、将来のキャリアにも活きる貴重な学びとなっています。"
    }
  }
];

const PortfolioPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemType, setItemType] = useState(null);

  // カードクリック時の処理
  const handleCardClick = (item, type) => {
    setSelectedItem(item);
    setItemType(type);
  };

  // 詳細ボックスを閉じる処理
  const closeDetailsBox = () => {
    setSelectedItem(null);
    setItemType(null);
  };

  return(
    <div className='container page-container'>
      {/* 詳細表示ボックス */}
      {selectedItem && (
        <>
          <div className="details-backdrop" onClick={closeDetailsBox}></div>
          <div className="details-box-from-top">
            <div className="details-box-content">
              {/* 画像 */}
              {selectedItem.image && (
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="details-image" 
                />
              )}
              
              {/* 基本情報 */}
              <div className="text-content">
                <time>{selectedItem.date}</time>
                <h3>{selectedItem.title}</h3>
                <p className="description-main">{selectedItem.description}</p>
                
                {/* 詳細情報 */}
                {selectedItem.details && (
                  <div className="more-details">
                    <hr style={{margin: '20px 0', border: '1px solid #e0e0e0'}} />
                    
                    {/* Productsの詳細項目 */}
                    {itemType === 'product' && (
                      <>
                        {/* 開発期間 */}
                        <div className="detail-section">
                          <h4>開発期間</h4>
                          <p>{selectedItem.details.period}</p>
                        </div>
                        
                        {/* 使用技術 */}
                        <div className="detail-section">
                          <h4>使用技術</h4>
                          <p>{selectedItem.details.technology}</p>
                        </div>
                        
                        {/* 特徴・機能 */}
                        <div className="detail-section">
                          <h4>特徴・機能</h4>
                          <ul>
                            {selectedItem.details.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* 開発チーム */}
                        <div className="detail-section">
                          <h4>開発チーム</h4>
                          <p>{selectedItem.details.team}</p>
                        </div>
                        
                        {/* 得た学び */}
                        <div className="detail-section">
                          <h4>得た学び</h4>
                          <p>{selectedItem.details.learning}</p>
                        </div>
                      </>
                    )}
                    
                    {/* Activitiesの詳細項目 */}
                    {itemType === 'activity' && (
                      <>
                        {/* 概要 */}
                        <div className="detail-section">
                          <h4>概要</h4>
                          <p>{selectedItem.details.overview}</p>
                        </div>
                        
                        {/* チーム */}
                        <div className="detail-section">
                          <h4>チーム</h4>
                          <p>{selectedItem.details.team}</p>
                        </div>
                        
                        {/* 役割 */}
                        <div className="detail-section">
                          <h4>役割</h4>
                          <p>{selectedItem.details.role}</p>
                        </div>
                        
                        {/* 得た学び */}
                        <div className="detail-section">
                          <h4>得た学び</h4>
                          <p>{selectedItem.details.learning}</p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
            <button onClick={closeDetailsBox} className="close-button">×</button>
          </div>
        </>
      )}

      {/* --- アクティビティ セクション --- */}
      <section id="activities" className="my-5"> 
        <h2 className="title page-first-heading">Activities</h2>
        <div className="activity-container">
          {activityData.map((activity, index) => (
            <div 
              className="activity-item clickable-card" 
              key={`activity-${index}`}
              onClick={() => handleCardClick(activity, 'activity')}
              style={{cursor: 'pointer'}}
            >
              <img src={activity.image} alt={activity.title} />
              <div className="activity-item-content">
                <time className="activity-date">{activity.date}</time>
                <h3 className='activity-title'>{activity.title}</h3>
                <p className='activity-description'>{activity.description}</p>
                <div className="click-hint">クリックして詳細を見る →</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- プロダクト セクション --- */}
      <section id="products" className="my-5">
        <h2 className="title">Products</h2>
        <div className="product-container">
          {productsData.map((product, index) => (
            <div 
              key={`product-${index}`} 
              className="product-item clickable-card"
              onClick={() => handleCardClick(product, 'product')}
              style={{cursor: 'pointer'}}
            >
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-item-content">
                <time className="product-date">{product.date}</time>
                <h3 className='product-title'>{product.title}</h3>
                <p className='product-description'>{product.description}</p>
                <div className="click-hint">クリックして詳細を見る →</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;