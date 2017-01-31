// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, index, outputArray) {
  // your code here
  if (arguments.length === 1){
  	if (_.contains(document.body.classList, className)){
  		var outputArray = [];
  		outputArray.push(document.body)
  		return getElementsByClassName(className, document.body, 0, outputArray);
  	} else{
  		return getElementsByClassName(className, document.body, 0, [])
  	}
  } else {
  }
};

// initiate by checking if the document.body node classList contatins the class
// then run document.body through, checking if the childnodes match, and then if
// the childnode has childnoes