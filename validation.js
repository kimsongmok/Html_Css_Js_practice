window.addEventListener('load', function() {
    clearMessages();

    var formElem = this.document.querySelector('form');
    formElem.onsubmit = submitForm;

    //월 추가
    var selectInput = document.querySelector('select[name="birth-month"]');
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        option.innerHTML = i + '월';
        option.value = i;

        selectInput.appendChild(option);
    }
});

function clearMessages() {
    var messages = document.getElementsByClassName('alert-message');
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.display = 'none';
    }
}

function showMessage(inputElement, message) {
    var messageElem = inputElement.parentNode.querySelector('span');
    messageElem.style.display = 'inline'
    messageElem.innerText = message;

    inputElement.focus();
}

function submitForm() {
    // account info
    var accountInput = document.querySelector('input[name="account"]');
    var passwordInput = document.querySelector('input[name="password"]');
    var passwordConfirmInput = document.querySelector('input[name="password2"]');
    // select, radio, checkbox
    var selectInput = document.querySelector('select[name="birth-month"]');
    var radioInput = document.querySelector('input[name="gender"]:checked'); //checked: 선택된 것만 가지고오는 것
    var checkInput = document.querySelector('input[name = "agree"]');

    console.log(accountInput.value);
    console.log(passwordInput.value);
    console.log(passwordConfirmInput.value);

    console.log(selectInput.value);
    console.log(radioInput.value);
    console.log(checkInput.value);

    var success = true;
    if (accountInput.value.length < 6) {
        showMessage(accountInput, '계정은 6자리 이상이어야 합니다.');
        success = false;
    }

    if (passwordInput.value.length < 10) {
        showMessage(passwordInput, '비밀번호는 10자리이상이어야 합니다.');
        success = false;
    }

    if (passwordConfirmInput.value !== passwordInput.value) {
        showMessage(passwordConfirmInput, '비밀번호를 동일하게 입력해주세요');
        success = false;
    }


    return false;

}