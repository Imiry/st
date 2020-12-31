/*
 * @Author: sitao
 * @Date: 2020-12-31 14:09:22
 * @LastEditors: sitao
 * @LastEditTime: 2020-12-31 16:51:24
 */
// import { init } from 'snabbdom/init';
// import { classModule } from 'snabbdom/modules/class';
// import { propsModule } from 'snabbdom/modules/props';
// import { styleModule } from 'snabbdom/modules/style';
// import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import h from '../src/mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js';

const myVnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'E' }, 'E')
]);

// 得到盒子和按钮
const container = document.getElementById('container');
const btn = document.getElementById('btn');

// 第一次上树
patch(container, myVnode1);

// 新节点
const myVnode2 = h('ul', {}, [
  h('li', { key: 'Q' }, 'Q'),
  h('li', { key: 'T' }, 'T'),
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'Z' }, 'Z'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'E' }, 'E')
]);

btn.onclick = function () {
  patch(myVnode1, myVnode2);
}

