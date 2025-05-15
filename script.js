document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.getElementById("operation").value;
  const resultDiv = document.getElementById("result");

  // Validaciones
  if (num1 === "" || num2 === "") {
    resultDiv.textContent = "Por favor, completa ambos campos.";
    resultDiv.style.color = "blue";
    return;
  }

  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let result;

  switch (operation) {
    case "sum":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "mul":
      result = a * b;
      break;
    case "div":
      if (b === 0) {
        resultDiv.textContent = "Error: No se puede dividir entre cero.";
        resultDiv.style.color = "blue";
        return;
      }
      result = a / b;
      break;
  }

  resultDiv.textContent = `Resultado: ${result}`;
  resultDiv.style.color = "";
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("operation").value = "sum";
});
