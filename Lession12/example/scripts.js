// const number = 20;
// localStorage.setItem('number', number);
// localStorage.PI = 3.14;
// const student = {
//     name : 'Q',
//     age : 20,
//     address : 'HCM'
// }
// localStorage.setItem('student', JSON.stringify(student));
//lay du lieu
// const PI = localStorage.getItem('PI');
// console.log(PI);
// const student = localStorage.getItem('student');
// console.log(student);
// student = JSON.parse(student);
// console.log(student);
//localStorage.removeItem('key');
//localStorage.clear()

document.cookie = 'username=T3H;'
function getValueCookie(name) {
    let data = data.split(';');

    for(let element of data) {
        const name_value = element.trim().split('=');
        console.log(name_value);
        if(name_value[0] === name) {
            return name_value[1];
        }
}
}