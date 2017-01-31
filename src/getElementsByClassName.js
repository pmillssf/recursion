// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var outputArray = [];

  var pushElements = function(node){
  	if (_.contains(node.classList, className)){
  		outputArray.push(node);
  	}
  	_.each(node.childNodes, function(node){
  		pushElements(node);
  	});
    };

  pushElements(document.body);
  return outputArray;
};
