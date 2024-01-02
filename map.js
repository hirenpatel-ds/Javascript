// Given an array [1,2,3,4,5]
// multiply elements by 2 in new array

arr = [1,2,3,5,5];
new_arr = [];
for (i = 0;i<=arr.length-1;i++){
    new_arr.push(arr[i]*2);
}
console.log(new_arr)

// create using map function
function t(i){
    return i*2;
}
const a = arr.map(t);
console.log(a)


// map function practice

l = [10,20,30,40]
function cube(i){
    return i**3;
}
const ans = l.map(cube);
console.log(ans);
// we don't have to write seperate function for map
// map is used to transform existing list
const a = arr.map(function(i){
    return i**2
})
console.log(a)









