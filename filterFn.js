// from given a list [1,2,3,4,5,6] make a new array which 
// only contains even values 
arr = [1,2,3,4,5,6];
new_arr = [];
for(i=0;i<=arr.length;i++){
    if(arr[i]%2 == 0){
        new_arr.push(arr[i]);
    }
}
console.log(new_arr)

// Now use filter function to solve above problem


const ans = arr.filter(function (n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);

// another problem there is array of toNamespacedPath. give names which
// are starting from the letter 'h'

arr_names = ['hiren','himanshu','khushbu','henry','marc'];
const name = arr_names.filter(function(i){
    if (i[0] === 'h'){
        return true;
    }
    else{
        return false;
    }
});
console.log(name);