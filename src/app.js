/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "The dog",
    "My grandma"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "ate",
    "peed",
    "crushed",
    "broke",
    "ate",
    "ate",
    "peed"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my homework",
    "the keys",
    "the car",
    "my homework",
    "the keys",
    "the keys",
    "the car",
    "the car"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "during my lunch",
    "while I was praying"
  ];
  let elementoExcusa = document.getElementById("excusa");

  elementoExcusa.textContent =
    who[Math.floor(Math.random() * 10)] +
    " " +
    action[Math.floor(Math.random() * 10)] +
    " " +
    what[Math.floor(Math.random() * 10)] +
    " " +
    when[Math.floor(Math.random() * 10)] +
    " ";
};
