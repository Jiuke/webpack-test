import Test from './test/a.js';
import './css/common.css';
import './css/test.less';

const App = function () {
  var dom =  document.getElementById('app');
  var test = new Test();
  console.log(test.tpl);
  dom.innerHTML = test.tpl;
}
new App();