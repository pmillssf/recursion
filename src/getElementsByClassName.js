// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var outputArray = [];
  if (_.contains(document.body.classList, className)){
  	outputArray.push(document.body);
  }


  var pushElements = function(node, arrayLength, index){
  	console.log(node);
    console.log(className);
  	if (_.contains(node[index].classList, className)){
  		outputArray.push(node[index]);
  		if (node.childNodes.length > 0){
  			pushElements(node[index].childNodes, node[index].childNodes.length, 0);
  		} else {
  			pushElements(node, arrayLength, index + 1)
  		}
  	} else if (node.childNodes.length > 0){
  			pushElements(node[index].childNodes, node[index].childNodes.length, 0);
  	} else if (arrayLength === index){
  		
  	}


    };

  pushElements(document.body.childNodes, document.body.childNodes.length, 0);
  return outputArray;
  // your code here
};

/*
var getElementsByClassName = function(className, node, index, outputArray) {
  // your code here
  if (arguments.length === 1){
  	if (_.contains(document.body.classList, className)){
  	  var outputArray = [];
  	  outputArray.push(document.body)
  	  return getElementsByClassName(className, document.body.childNodes, 0, outputArray);

  	} else{

  	  return getElementsByClassName(className, document.body.childNodes, 0, [])
  	}
  } else {
  	//debugger;
  	if (node.length === index){

  	  return outputArray;

  	} if (_.contains(node[index].classList, className) && node[index].childNodes.length > 0){

  	  outputArray.push(node[index]);
  	  return getElementsByClassName(className, node[index].childNodes, 0, outputArray)
  	
  	} else if (_.contains(node[index].classList, className)){
  	
  	  outputArray.push(node[index]);
  	  return getElementsByClassName(className, node, index+1, outputArray);
  	
  	} else if (node[index].childNodes.length > 0){
  		return getElementsByClassName(className, node[index].childNodes, 0, outputArray)
  	} else {
  		return getElementsByClassName(className, node, index+1, outputArray)
  	}
  }
};
*/

// initiate by checking if the document.body node classList contatins the class
// then run document.body through, checking if the childNodes match, and then if
// the childNode has childNodes