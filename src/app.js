/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const excuse = () => {
  let resultado = who[Math.floor(Math.random() * who.length)] + " ";
  resultado += action[Math.floor(Math.random() * action.length)] + " ";
  resultado += what[Math.floor(Math.random() * what.length)] + " ";
  resultado += when[Math.floor(Math.random() * when.length)];
  return resultado;
};

window.onload = function() {
  //write your code here
  let excusaFinal = document.querySelector("#excuse");
  excusaFinal.innerHTML = excuse();
};
