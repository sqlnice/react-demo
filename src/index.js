import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
// import Game from './1_game';
// import Jsx from './2_jsx';
// import Render from './3_render';
// import ComponentsAndProps from './4_components&Props';
// import StateAndLifecycle from './5_state&Lifecycle';
// import HandingEvent from './6_handingEvent';
// import ConditionalRendering from './7_conditionalRendering';
// import ListAndKeys from './8_lists&Keys';
// import Forms from './9_forms';
// import LiftingStateUp from './10_liftingStateUp';
// import CompositionVsInheritance from './11_compositionVsInheritance';
// import ThinkingInReact from './12_thinkingInReact';
const ThinkingInReact = React.lazy(() => import('./12_thinkingInReact'));
// ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));
// JSX
// ReactDOM.render(Jsx, document.getElementById('root'));
// 元素渲染
// ReactDOM.render(<Render />, document.getElementById('root'));
// 组件和Props
// ReactDOM.render(<ComponentsAndProps  />, document.getElementById('root'));
// 事件处理
// ReactDOM.render(<HandingEvent />, document.getElementById('root'));
// 条件渲染
// ReactDOM.render(<ConditionalRendering />, document.getElementById('root'));
// 列表和Key
// ReactDOM.render(<ListAndKeys numbers="[1, 2, 3, 4, 5]" />, document.getElementById('root'));
// 表单
// ReactDOM.render(<Forms />, document.getElementById('root'));
// 状态提升
// ReactDOM.render(<LiftingStateUp />, document.getElementById('root'));
// 组合和继承
// ReactDOM.render(<CompositionVsInheritance />, document.getElementById('root'));
// React哲学
// ReactDOM.render(<ThinkingInReact />, document.getElementById('root'));
// 代码分割
ReactDOM.render(
  <Suspense fallback={<div>loading</div>}>
    <ThinkingInReact />
  </Suspense>,
  document.getElementById('root')
);
