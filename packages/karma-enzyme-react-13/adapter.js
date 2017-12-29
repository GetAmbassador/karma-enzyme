var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-13')

enzyme.configure({ adapter: new Adapter() });
window.Enzyme = enzyme;
window.shallow = enzyme.shallow;
window.mount = enzyme.mount;
window.render = enzyme.render;
