// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj, keyLength, index) {
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

  if (typeof obj === 'function' || obj === undefined){
  	return;
  }

  if (Array.isArray(obj)){
  	if (keyLength === undefined){
  		if (obj.length === 0){
  			return '[]';
  		} else {
  			console.log(obj);
  	     var keyLength = obj.length;
  	     var index = 0;
  	     return stringifyJSON(obj, keyLength, index);
  	   }
  	} else {
  		if (index === 0){
  			console.log(stringifyJSON(obj, keyLength, index + 1));
  			index = index + 1;
  			return '[' + stringifyJSON(obj[0]) + stringifyJSON(obj, keyLength, index);
  		} else if (index === keyLength){
  			return ']';
  		} else if (index < keyLength){
  			return ',' + stringifyJSON(obj[index]) + stringifyJSON(obj, keyLength, index + 1);
  		}
  	}
  }



};

//figure out the type, 
//find a way to ierate through the type
//pass the obj/ array iteration of the type
//returning the string of that iteration
//run again
