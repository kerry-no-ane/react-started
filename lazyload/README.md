# react-lazyload を利用した遅延読み込みの実装

URL: https://github.com/twobin/react-lazyload

①npm からインストール。

```
npm install --save react-lazyload
```

②react-lazyload を import し、遅延ロードしたい対象を<LazyLoad> </LazyLoad>で囲む。

```
import React from 'react';
import LazyLoad from 'react-lazyload';

const Index = (props) => (
// 略
<LazyLoad>
　　<img src={props.thumbnail} alt={props.posttitle} />
</LazyLoad>
// 略
```

※ダミーデータには Faker.js を使用  
URL:https://github.com/marak/Faker.js/

```
npm install faker
```
