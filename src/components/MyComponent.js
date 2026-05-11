import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // ページが読み込まれた時に現在のURLを取得してコンソールに出力
    const currentUrl = window.location.href;
    console.log('現在のURL:', currentUrl);

    const currentPath = window.location.pathname;
    console.log('現在のパス:', currentPath);
  }, []);

  return <div>現在のページ情報を見てみよう</div>;
};

// 他のファイルで使えるようにエクスポートする
export default MyComponent;