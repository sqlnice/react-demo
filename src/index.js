import ReactDOM from 'react-dom';

// import Game from './1_game';
// import Jsx from './2_jsx';
// import Render from './3_render';
// import ComponentsAndProps from './4_components&Props';
// import StateAndLifecycle from './5_state&Lifecycle';
// import HandingEvent from './6_handingEvent';
// import ConditionalRendering from './7_conditionalRendering';
import ListAndKeys from './8_lists&Keys';
// ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));
// ReactDOM.render(Jsx, document.getElementById('root'));
// ReactDOM.render(<Render />, document.getElementById('root'));
// ReactDOM.render(<ComponentsAndProps  />, document.getElementById('root'));
// ReactDOM.render(<HandingEvent />, document.getElementById('root'));
// ReactDOM.render(<ConditionalRendering />, document.getElementById('root'));
ReactDOM.render(<ListAndKeys numbers="[1, 2, 3, 4, 5]" />, document.getElementById('root'));
