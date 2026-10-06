const randomNumber = Math.floor(Math.random()*10)

const result = document.getElementById("result")
const input = document.getElementById("numberInput")

function compareNumber(){
    //Checking if the value inputed is equal to the random number
    if(randomNumber==input.value){

        result.innerHTML="Yaayyy, you got the answer!"
    }
    //Checking if the inputed value is less than the random number
    if(randomNumber > input.value ){
        result.innerHTML="Go higher"
    }
    //Checking if the inputed value is greater than the random number
    if(randomNumber < input.value ){
        result.innerHTML="Go lower"
    }
    //console.log("function working")
}

console.log(randomNumber)