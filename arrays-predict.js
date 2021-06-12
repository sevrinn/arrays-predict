/* 
* I used a T-diagram to predict what would print to the console on each of these before testing them in the browser
*
*
*/ 

//Predict 1

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){  //if var i is less than length of array
    console.log(arr[i]); //print value of array at index i
        //increment i by 1
}
//Output: 8, 6, 7, 5, 3, 0, 9


//Predict 2

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ //if var i is less than length of arr
    if(arr[i] % 2 == 0){ //if value of arr at index i divides by two evenly
        console.log(arr[i]); //print value of arr at index i to console
    } 
    else{ //otherwise
        console.log("That is odd!"); //print string to console
    }

        //increase i by 1
}



//Output: "That is odd!", "That is odd!", 8, 4, 2, 0, "That is odd!"


//Predict 3 

var arr = [1,3,8,-5,0,-2,4,-1]; //sets var arr to this array
var newArr = []; //sets var newArr to empty array
for(var i = 0; i< arr.length; i++){ //if i is less than the length of arr
    if(arr[i] < 0){ //if value of arr at index i is less than 0
        newArr.push(arr[i]); //push value of arr at index i to newArr
        arr[i] = arr[i] * -1; //value of arr at i is equal to it's value * -1, 
    }
    else if(arr[i] == 0){ //otherwise if value of arr at i is equal to zero
        arr[i] = "Zero"; //set value of arr at index i to string
    }
    else{ //otherwise
        arr[i] = arr[i] * -1; //set value of arr at i to itself times -1
    }
        //increase i by 1
}
console.log(arr); //print arr array to console
console.log(newArr);  //print newArr array to console
//Output: [-1, -3, -8, 5, "zero", 2, -4, 1], [-5, -2, -1];


