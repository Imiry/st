/*
 * @Author: sitao
 * @Date: 2020-12-31 14:09:22
 * @LastEditors: sitao
 * @LastEditTime: 2020-12-31 16:01:44
 */
import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h';

// 创建出patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

const container = document.getElementById('container');
const btn = document.getElementById('btn')

//创建虚拟节点
const vnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
]);

const vnode2 = h('ul', {}, [
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'B' }, 'B')
]);

const myVnode3 = h('ul', [
  h('li', {}, '苹果'),
  h('li', '西瓜'),
  h('li', [
      h('div', [
          h('p', '哈哈'),
          h('p', '嘻嘻')
      ])
  ]),
  h('li', h('p', '火龙果'))
]);

console.log(myVnode3)

//让虚拟dom上树
patch(container,vnode1)

btn.onclick = () => {
  patch(vnode1,vnode2)
}