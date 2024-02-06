
let firstName = document.querySelector(".first_name")
let lastName = document.querySelector(".last_name")

let firstNameErr = document.querySelector(".firstName_err")
let lastNameErr = document.querySelector(".lastName_err")
let NameErr = document.querySelector(".name_err")

let program = document.querySelector(".your_program")
let programErr = document.querySelector(".program_err")

let email = document.querySelector(".your_email")
let emailErr = document.querySelector(".email_err")

let phoneNumber = document.querySelector(".phone_number")
let numberErr = document.querySelector(".number_err")

let bloodGroup = document.querySelector(".blood")
let bloodErr = document.querySelector(".blood_err")

let address = document.querySelector(".your_address")
let addressErr = document.querySelector(".address_err")

let submitBtn = document.querySelector(".submit_btn")
let resetBtn = document.querySelector(".reset")

let numberRegex = /^[0-9]+$/;
let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let numberFormat = 11;

let fullName = document.querySelector(".fullname")
let getProgram = document.querySelector(".program")
let getEmail = document.querySelector(".email")
let getNumber = document.querySelector(".number")
let getBlood = document.querySelector(".blood_group")
let getAddress = document.querySelector(".address")

submitBtn.addEventListener("click", function () {
    if (firstName.value.match(numberRegex) || lastName.value.match(numberRegex)) {
        NameErr.innerHTML = `Name cannot contain numbers`;
        firstNameErr.innerHTML = ``;
        lastNameErr.innerHTML = ``;

    } else if (firstName.value == "" && lastName.value == "") {
        NameErr.innerHTML = `What's Your Name?`
        firstNameErr.innerHTML = ``
        lastNameErr.innerHTML = ``
    } else if (firstName.value == "") {
        firstNameErr.innerHTML = `What's your first Name ?`
        NameErr.innerHTML = ``
        lastNameErr.innerHTML = ``
    } else if (lastName.value == "") {
        lastNameErr.innerHTML = `What's your last Name ?`
        NameErr.innerHTML = ``
        firstNameErr.innerHTML = ``
    } else {
        fullName.innerHTML = `Name: ${firstName.value} ${lastName.value}`
        NameErr.innerHTML = ``
        firstNameErr.innerHTML = ``
        lastNameErr.innerHTML = ``
    }

    if (program.value == "") {
        programErr.innerHTML = `Enter Your Program`
    } else {
        getProgram.innerHTML = `Program: ${program.value}`
        programErr.innerHTML = ``
    }

    if (email.value == "") {
        emailErr.innerHTML = `Email is required`
    } else if (!email.value.match(emailRegex)) {
        emailErr.innerHTML = `Invalid email format`
    } else {
        getEmail.innerHTML = `Email: ${email.value}`
        emailErr.innerHTML = ``
    }

    if (phoneNumber.value == "") {
        numberErr.innerHTML = `Phone Number is required`
    } else if (Boolean(phoneNumber.value - 20)) {
        if (phoneNumber.value.length !== 11) {
            numberErr.innerHTML = `Please enter a 11 digit.`

        } else {
            getNumber.innerHTML = `Phone Number: +88 ${phoneNumber.value}`
            numberErr.innerHTML = ``
        }
    } else {
        numberErr.innerHTML = `Enter Number, don't text`
    }

    // else if (isNaN(phoneNumber.value)) {
    //     numberErr.innerHTML = `Please enter a number, don't use text.`
    // } else if (phoneNumber.value.length !== 11) {
    //     numberErr.innerHTML = `Please enter a 11 digit.`
    // } else {
    //     getNumber.innerHTML = `+880 ${phoneNumber.value}`
    //     NameErr.innerHTML = ``
    //     firstNameErr.innerHTML = ``
    //     lastNameErr.innerHTML = ``
    //     emailErr.innerHTML = ``
    //     numberErr.innerHTML = ``
    // }


    if (bloodGroup.value == "") {
        bloodErr.innerHTML = `Enter Blood group`
    } else {
        getBlood.innerHTML = `Blood Group: ${bloodGroup.value}`
        bloodErr.innerHTML = ``
    }

    if (address.value == "") {
        addressErr.innerHTML = `Enter Your Address`
    } else {
        getAddress.innerHTML = `Address: ${address.value}`
        addressErr.innerHTML = ``
        
    }




})

resetBtn.addEventListener("click", function(){
    location.reload()
})