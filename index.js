"use strict";

const prompt = require("prompt-sync")({ sigint: true });

/*-----------------------------------------------------------
  1. USER INPUT HANDLING
-----------------------------------------------------------*/
function getValidNumberInput(promptMessage) {
  while (true) {
    const input = prompt(promptMessage);
    if(input.trim() === '' || input === null){
      console.log("Input tidak boleh kosong, masukkan angka!")
      continue;
    }

    const value = Number(input);

    if (!isNaN(value)) {
      return value;
    }

    console.log("Input tidak valid, masukkan angka!");
  }
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  while (true) {
    const input = prompt(promptMessage).trim();

    if (validOperators.includes(input)) {
      return input;
    }

    console.log("Operator tidak valid! Pilih salah satu: +, -, *, /, %, **");
  }
}

/*-----------------------------------------------------------
  2. BASIC ARITHMETIC FUNCTIONS
-----------------------------------------------------------*/
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

/*-----------------------------------------------------------
  3. MAIN CALCULATOR LOGIC
-----------------------------------------------------------*/
while (true) {
  console.log("\n===== SIMPLE CALCULATOR =====");

  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const operator = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **): ");
  const num2 = getValidNumberInput("Masukkan angka kedua: ");

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

  /*-----------------------------------------------------------
    4. DATA TYPE ANALYSIS & CONDITIONAL OUTPUT
  -----------------------------------------------------------*/
  console.log(`\n Hasil: ${result}`);

  const resultType = typeof result;
  console.log(`Tipe data hasil: ${resultType}`);

  if (resultType === "number") {
    // Positive / Negative / Zero
    if (result > 0) {
      console.log("Angka positif");
    } else if (result < 0) {
      console.log("Angka negatif");
    } else {
      console.log("Angka nol");
    }

    // Integer or Float
    if (Number.isInteger(result)) {
      console.log("Angka bulat (integer)");
    } else {
      console.log("Angka pecahan (float)");
    }

    // Even / Odd (gunakan ternary)
    console.log(result % 2 === 0 ? "Genap" : "Ganjil");

    // Example logical operator use
    if (result > 0 && result % 2 === 0) {
      console.log("Angka ini positif DAN genap");
    }

  } else if (resultType === "string") {
    console.log(`Pesan error: ${result}`);
  } else {
    // Nullish Coalescing
    const fallback = result ?? "Result is undefined or null, something went wrong!";
    console.log(fallback);
  }

  /*-----------------------------------------------------------
    5. EXIT MECHANISM
  -----------------------------------------------------------*/
  const again = prompt("\nIngin menghitung lagi? (yes/no): ").toLowerCase();

  if (again === "no" || again === "n") {
    console.log("\n Terima kasih sudah menggunakan kalkulator!");
    break;
  }
}
