import Test from './test/a.js';
import './css/common.css';
import './css/test.less';

const App = function () {
  var dom =  document.getElementById('app');
  var test = new Test();
  dom.innerHTML = test.tpl;
}


window.onload = App;