// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj, key, index) {
  if (typeof obj === 'string'){
  	return '\"' + obj + '\"';
  } 

  if (obj === null){
  	return 'null';
  }

  if (typeof obj === 'number'){
  	return "" + obj;
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
  	if (key === undefined){
  		if (obj.length === 0){
  			return '[]';
  		} else {
  	     var key = obj.length;
  	     var index = 0;
  	     return stringifyJSON(obj, key, index);
  	   }
  	} else {
  		if (index === 0){
  			return '[' + stringifyJSON(obj[0]) + stringifyJSON(obj, key, index + 1);
  		} else if (index === key){
  			return ']';
  		} else if (index < key){
  			return ',' + stringifyJSON(obj[index]) + stringifyJSON(obj, key, index + 1);
  		}
  	}
  }

  if (typeof obj === 'object'){
  	if (key === undefined){
  		if (Object.keys(obj).length === 0){
  			return '{}';
  		} else {
  			var key = Object.keys(obj);
  			var index = 0;
  			return stringifyJSON(obj, key, index);
  		}
  	} else {
  		if (!(typeof obj[key[index]] === 'function' || obj[key[index]] === undefined) || index === key.length){
  			if (index === 0){
  				return '{' + stringifyJSON(key[0]) + ':' + stringifyJSON(obj[key[0]]) + stringifyJSON(obj, key, index + 1);
  			} else if (index === key.length){
  				return '}';
  			} else if (index < key.length){
  				return ',' + stringifyJSON(key[index]) + ':' + stringifyJSON(obj[key[index]]) + stringifyJSON(obj, key, index+  1);
  			}
  		} else {
  			return '{}';
  		}

  	}
  }
};
