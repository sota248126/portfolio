import React from 'react';
import AssistGlove from '../images/Assistglobe.jpg';
import Standup from '../images/Standup.jpg';

const Research = () => {
  return (
    <div id="research" className='research-container'>
      <h2 className="page-first-heading">Research</h2>
      <div className='research-grid'>
        <div className='research-card'>
          <img src={AssistGlove} alt='アシストグローブ' />
          <h5>アシストグローブの開発</h5>
          <p>近年高齢化などに伴い動作支援システムの開発が行われています。
            <br />その中の把持動作は握力が低下した高齢者や障害者、あるいは長時間把持動作が必要な労働者に向けられて開発されています。
            <br />
          </p>
        </div>

        <div className='research-card'>
          <img src={Standup} alt='起立動作支援' />
          <h5>起立動作支援システムの開発</h5>
          <p>従来の装置では完全にユーザの起立を支援してしまうため、逆に筋力低下を促進してしまいます。
            <br />そこで、ユーザの動きに合わせて起立の補助をしてあげるようなシステムの開発をしています。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;