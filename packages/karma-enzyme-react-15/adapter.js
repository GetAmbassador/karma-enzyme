var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-15')

enzyme.configure({ adapter: new Adapter() });
window.shallow = enzyme.shallow;
window.mount = enzyme.mount;
window.render = enzyme.render;
