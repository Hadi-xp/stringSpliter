// my string that contains my name
myString = 'hadi bahadori';

// the function below get 2 parameters as input first on is string and second is the number of charactor that we want

function getCharatcor(string,number){
    string = string.split(' ').join('');
    string = string.slice(0,number);
    return string;
}


console.log(getCharatcor(myString,7));