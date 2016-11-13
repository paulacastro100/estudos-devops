// spec.js
describe("angularjs todo mvc homepage", function() {  
 it("should have a title", function() {
   console.log("passei aqui");
   browser.get("http://todomvc.com/examples/angularjs/#/");

   expect(browser.getTitle()).toEqual("AngularJS • TodoMVC");
   
   
  });
});