//conf.js

//este arquivo diz onde os testes estão (specs) e onde conversar com o server selenium e qual o framework de teste (Jasmine)
	
// conf.js
exports.config = {
seleniumAddress: 'http://localhost:4444/wd/hub',
capabilities: {'browserName' : 'chrome'},
  framework: 'jasmine',
  specs: ['spec.js'],
  jasmineNodeOpts: {
	showColors: true,
	defaultTimoutInterval: 30000
  }
};