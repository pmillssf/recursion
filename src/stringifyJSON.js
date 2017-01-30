// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string'){
  	return '\"' + obj + '\"';
  } 

  if (obj === null){
  	return 'null';
  }

  if (typeof obj === 'number'){
  	return obj.toString();
  }

  if (typeof obj === 'boolean'){
  	if(obj){
  		return 'true';
  	} else {
  		return 'false';
  	}
  }



};

//figure out the type, 
//find a way to ierate through the type
//pass the obj/ array iteration of the type
//returning the string of that iteration
//run again
