let prviBrojInput = document.querySelector('input[name="prvibroj"]');
let drugiBrojInput = document.querySelector('input[name="drugibroj"]');

let izracunajBtn = document.querySelector('button[name="izracunaj"]');
let rezultatInput = document.querySelector('input[name="rezultat"]');

let praznoPolje = document.getElementById("error_empty");
let errorOperacija = document.getElementById("error");

izracunajBtn.addEventListener("click", function () {
  let prviBroj = prviBrojInput.value.trim();
  let drugiBroj = drugiBrojInput.value.trim();
  let operacija = document.querySelector('input[name="operacija"]:checked');

  praznoPolje.textContent = "";
  errorOperacija.textContent = "";

  if (prviBroj === "" || drugiBroj === "") {
    praznoPolje.textContent = "Input polja ne smiju biti prazna";

  } else if (isNaN(prviBroj) || isNaN(drugiBroj)) {
    errorOperacija.textContent = "Dozvoljen unos samo brojeva";

  } else if (operacija === null) {
    errorOperacija.textContent = "Izaberite operaciju";
    
  } else {
    let operacijaV = operacija.value;

    if (operacijaV === "1") {
      rezultatInput.value = saberi(parseFloat(prviBroj), parseFloat(drugiBroj));

    } else if (operacijaV === "2") {
      rezultatInput.value = pomnozi(parseFloat(prviBroj), parseFloat(drugiBroj));

    } else if (operacijaV === "3") {
      rezultatInput.value = oduzmi(parseFloat(prviBroj), parseFloat(drugiBroj));

    } else if (operacijaV === "4") {
      rezultatInput.value = podijeli(parseFloat(prviBroj), parseFloat(drugiBroj));
    }
  }
});

function saberi(a, b) {
  return a + b;
}
function pomnozi(a, b) {
  return a * b;
}
function oduzmi(a, b) {
  return a - b;
}
function podijeli(a, b) {
  return a / b;
}
