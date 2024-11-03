// let big_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let small_alphabet = "abcdefghijklmnopqrstuvwxyz";
// let numb = "1234567890";
// let special_char = "!@#$%^&*()";

let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
let pass_length = 12;
let result = "";

for (let i = 0; i < pass_length; i++){
    result += char_list[Math.floor(Math.random() * char_list.length)];
}

document.getElementById("pass").innerHTML = result;

console.log(result);
