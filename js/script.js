let firstName = document.querySelector(".first_name")
let lastName = document.querySelector(".last_name")


let firstNameErr = document.querySelector(".firstName_err")
let lastNameErr = document.querySelector(".lastName_err")
let NameErr = document.querySelector(".name_err")

let studentId = document.querySelector(".your_id")
let studentIdErr = document.querySelector(".studentID_err")

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

let fullName = document.querySelector(".fullname")
let getStudentId = document.querySelector(".id_number")
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

    } else if (studentId.value == "") {
        studentIdErr.innerHTML = `Please enter a number.`
        NameErr.innerHTML = ``
        firstNameErr.innerHTML = ``
        lastNameErr.innerHTML = ``
    } else if (isNaN(studentId.value)) {
        studentIdErr.innerHTML = `Please enter a number, don't use text.`
        NameErr.innerHTML = ``
        firstNameErr.innerHTML = ``
        lastNameErr.innerHTML = ``
    } else if (program.value == "") {
        programErr.innerHTML = `Enter Your Program`
        studentIdErr.innerHTML = ``

    } else if (email.value == "") {
        emailErr.innerHTML = `Email is required`
        programErr.innerHTML = ``

    } else if (!email.value.match(emailRegex)) {
        emailErr.innerHTML = `Invalid email format`
        programErr.innerHTML = ``

    } else if (phoneNumber.value == "") {
        numberErr.innerHTML = `Please enter a number.`
        emailErr.innerHTML = ``

    } else if (isNaN(phoneNumber.value)) {
        numberErr.innerHTML = `Please enter a number, don't use text.`
        emailErr.innerHTML = ``

    } else if (phoneNumber.value.length !== 11) {
        numberErr.innerHTML = `Please enter a 11 digit.`
        emailErr.innerHTML = ``

    } else if (bloodGroup.value == "") {
        bloodErr.innerHTML = `Enter Blood group`
        numberErr.innerHTML = ``

    } else if (address.value == "") {
        addressErr.innerHTML = `Enter Your Address`
        bloodErr.innerHTML = ``

    } else {
        fullName.innerHTML = `Name: ${firstName.value} ${lastName.value}`
        getProgram.innerHTML = `Program: ${program.value}`
        getEmail.innerHTML = `Email: ${email.value}`
        getNumber.innerHTML = `${phoneNumber.value}`
        getBlood.innerHTML = `Blood Group: ${bloodGroup.value}`
        getAddress.innerHTML = `Address: ${address.value}`
        addressErr.innerHTML = ``
    }

})

resetBtn.addEventListener("click", function () {
    location.reload()
})