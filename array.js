var arr = [];
for ( i = 0; i < 10; i++ ) {
    arr.push( Math.round( Math.random() * 100 ));
} 
arr.forEach(function(item, index, array) {
  	console.log(item);})
