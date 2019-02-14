// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//引入样式
import SiderDemo from './home/index';//引入自己写的组件(class)
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
// serviceWorker();
//serviceWorker就是为react项目注册了一个service worker，
// 用来做资源的缓存，这样你下次访问时，就可以更快的获取资