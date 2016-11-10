//conf.js

//este arquivo diz onde os testes estão (specs) e onde conversar com o server selenium e qual o framework de teste (Jasmine)
	
// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}