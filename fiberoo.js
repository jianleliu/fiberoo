function fib(){
  let arr = [0, 1, 1];
  for (let i = 3; i < 50; i++){
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr;
}

console.log(fib());

function numsToStrings(arr){
  return _.map(arr, function(item){
    return item.toString();
  });
}
console.log(numsToStrings(fib()));
function numEvenNums(arr){

  let temp = _.filter(arr, function (item){
    return item%2 === 0;
  })
  return temp.length;
}
console.log(
  numEvenNums(fib()));