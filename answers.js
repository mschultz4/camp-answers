function destroyer(arr) {
 var x = arguments;
 arr = arr.filter(
    function(element){
   	 for(var i=1; i < x.length ; i++){
   		 if (element === x[i]){
   			 return false;
   		 };
   	 }
   	 return true;
    }
 );  
  return arr;
}

function where(arr, num) {
    arr.unshift(num);
    return arr.sort(function(a,b){return a - b;}).indexOf(num);
}

function longestWord(str) {
    var arr = str.split(' ');
    var longest = arr.reduce(function(curr, prev){
   	 return curr.length >= prev.length ? curr : prev;
    });
    
    return longest.length;
}

// sumAll with reduce
function sumAll(arr) {
 var min = Math.min.apply(null, arr);
 var max = Math.max.apply(null, arr);
  for(var i = min+1 ; i < max ; i++){
    arr.push(i);
  }
  return arr.reduce(
    function(curr, prev){
   	 return curr + prev;
    }
  );
}

//alternative sumAll
function sumAll(arr) {
 var min = Math.min.apply(null, arr);
 var max = Math.max.apply(null, arr);
 var sum = min + max;
  for(var i = min+1 ; i < max ; i++){
    sum += i;
  }
  return sum;
}

function diff(arr1, arr2){
    var arr = arr1.concat(arr2);
    arr = arr.filter(function(element){
   	 return arr.indexOf(element, arr.indexOf(element)+1) === -1;
    });
    
    return arr;
}



function convert(num){
    var numeral = '';
    var remainder = 0;
    
    remainder = num % 10;
    var tens = Math.floor(num/10);
    
    for(var i = 0; i < tens; i++){
   	 numeral += 'X'
    }

    if(remainder === 9){
   	 numeral += 'IX';
    }else if(Math.floor(remainder/5)){
   	 numeral += 'V';
    }
    
    
    
    return numeral;
}

console.log(convert(12));
console.log(convert(5));
console.log(convert(9));
console.log(convert(29));
console.log(convert(16));

function convert(num){
    var numeral = '';
    var remainder = num % 10;

    numeral = addNumerals(numeral,'X', Math.floor(num/10));

    if(remainder === 9){
   	 numeral += 'IX';
    } else if(Math.floor(remainder/5)){
   	 numeral += 'V';
   	 if(remainder % 5 === 4){
   		 numeral += 'IV';
   	 } else{
   		 numeral = addNumerals(numeral,'I', remainder % 5);
   	 }
    } else {
   	 numeral = addNumerals(numeral,'I', remainder);
    }

    function addNumerals(num, symbol, times){
   	 for(var i = 0; i < times ; i++){
   		 num += symbol
   		 }
   	 return num;
    }
    
    return numeral;
}

function where(collection, source) {
  var arr = [];
  collection.forEach(
    function(collectionObject){
   	 if(checkObjects(collectionObject, source)){
   		 arr.push(collectionObject);
   	 }
    });
 
  function checkObjects(ob1, ob2){
    for(var prop in ob2){
   	 if(ob2[prop] !== ob1[prop]){
   		 return false;
   	 }
    }
    return true;
  }
 
  return arr;
}

function myReplace(str, before, after) {
 if(before.charCodeAt(0) < 91){
    after = after.replace(/^\w/ , after.charAt(0).toUpperCase());
 }
 return str.replace(before, after);
}

function translate(str) {
    var reg = /^([^aeiou]+)(.+)$/;
    var consStart = str.match(/^[^aeiou]+/);
    if(consStart){
   	 str = str.replace(reg, '$2$1ay');
    } else {
   	 str += 'way';
    }
    
 return str;
}


function pair(str) {
    var letters = str.split('');
    var pairings = {A:'T',T:'A',C:'G',G:'C'};
    str = letters.map(function(letter){
   	 var arr = [];
   	 arr.push(letter);
   	 arr.push(pairings[letter]);
   	 
   	 return arr;
    });
 
 return str;
}

function fearNotLetter(str) {
    var letters = str.split('');
    var missing = undefined;
    letters.reduce(function(prev, curr){
   	 if(prev.charCodeAt(0) + 1 !== curr.charCodeAt(0)){
   		 missing = String.fromCharCode(prev.charCodeAt(0) + 1)
   	 }
   	 return curr;
    });
  return missing;
}

function boo(bool) {
    bool = typeof bool === "boolean" ? true : false;
    
    return bool;
}
