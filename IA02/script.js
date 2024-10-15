function checkInput(id)
{
    const number = document.getElementById(id).value;
    let numberName = "";

    if (id === "first-num")
        {
            numberName = 1;
        }
    else if (id === "second-num")
        {
            numberName = 2;
        }

    if (number.length === 0) {
        return [numberName, 0];
    }


    if (isNaN(number) || number[0] === ' ' || number[number.length - 1] === ' ') {
        return [numberName, -1]
    }

    return [numberName,1];
}

function displayError(id) {
    let error = checkInput(id);
    let notice = "Số thứ ";
    let messagePlace = "";
    if(error[0] === 1)
    {
        notice += "nhất ";
        messagePlace = "error1";
    }
    else {
        notice += "hai ";
        messagePlace = "error2";
    }

    if(error[1] === 0)
        notice += "trống!";
    else if(error[1] === -1)
        notice += "không hợp lệ!";
    else notice = "";

    document.getElementById(messagePlace).innerText = notice;
}

function checkOperator()
{
    let operation = document.querySelector('input[name="operation"]:checked');
    let message = document.getElementById("error3");

    if (operation === null)
    {
        message.innerText = "Vui lòng chọn phép tính!";
        return null;
    }
    if (checkInput("first-num")[1] <= 0 || checkInput("second-num")[1] <= 0)
    {
        message.innerText = "Vui lòng điền số hợp lệ!";
        return null;
    }

    message.innerText = "";
    return operation.value;
}

function calculate()
{ 
    let operation = checkOperator();
    let num1 = document.getElementById("first-num").value;
    let num2 = document.getElementById("second-num").value;
    let result = document.getElementById("result");

    if (operation === null)
    {
        result.innerText = "";
        return false;
    }



    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (operation === "add")
        result.innerText = num1 + num2;
    else if (operation === "sub")
        result.innerText = num1 - num2;
    else if (operation === "multiply")
        result.innerText = num1 * num2;
    else if (num2 === 0)
        result.innerText = "Không thể chia cho 0!";
    else result.innerText = num1 / num2;
    return true;
}