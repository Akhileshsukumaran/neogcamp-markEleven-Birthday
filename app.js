
var getDate = document.querySelector("#lbl-date-of-birth");
var getNumber = document.querySelector("#lbl-lucky-number");
var checkButton = document.querySelector(".btn-check");
var outputBox = document.querySelector("#txt-output");

checkButton.addEventListener('click', function onclick(){
    checkBirthDayIsLucky();
})

function checkBirthDayIsLucky(){
    var dob = getDate.value;
    var dateSum = DobSum(dob);
    if(dateSum && getNumber.value)
    {
        CompareValues(dateSum, getNumber.value);
    }
    else
    {
        outputBox.innerText = "Please enter both date of birth and lucky number 😊";
    }
    
}

function DobSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < dob.length; i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function CompareValues(dateSum, getNum){

    if(dateSum % getNum == 0)
    {
        outputBox.innerText = "Your Date of Birth is Lucky!🎉";
    }
    else
    {
        outputBox.innerText ="Your Date of birth is not lucky, You should make your own luck 😎";
    }
}