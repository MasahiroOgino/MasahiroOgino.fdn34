'use strict'

let members = ["佐藤さん", "鈴木さん", "高橋さん", "田中さん", "伊藤さん"];
let btn = document.getElementById("btn");
let display = document.getElementById("display");
let result = document.getElementById("result");

btn.addEventListener("click", function(){
    let index = Math.floor(Math.random() * members.length);
    display.innerText = members[index];
    result.innerText = `今日の当番は${members[index]}です!`;
  }
)

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");

function changeMember() {
  members.splice(0, members.length, one.value, two.value,
  three.value, four.value, five.value, six.value, seven.value, 
  eight.value, nine.value, ten.value);
  members = members.filter((member) => member !== "")
  window.alert("メンバーを変更しました！");
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", changeMember);
