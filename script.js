"use strict";
//For group friends outing
const btnEl = document.getElementById("calculate");
const billAmt = document.getElementById("bill");
const tipAmt = document.getElementById("tip");
const friends = document.getElementById("friends");
const total = document.getElementById("total");
const btnCl = document.getElementById("clear");
const tipPercent1 = document.getElementById("tip-percent1");

//For dutch
const btnElDutch = document.getElementById("calculate-dutch");
const btnClDutch = document.getElementById("clear-dutch");
const billDutch = document.getElementById("bill-dutch");
const tipDutch = document.getElementById("tip-dutch");
const totalDutch = document.getElementById("total-dutch");
const tipPercent2 = document.getElementById("tip-percent2");

//For group of friends
function calculateTotal() {
  const friendsValue = Number(friends.value);
  const billValue = Number(billAmt.value);
  const tipValue = Number(tipAmt.value / billValue) * 100;
  const totalValue = (billValue + Number(tipAmt.value)) / friendsValue;
  total.innerText = `$${totalValue.toFixed(2)}`;
  tipPercent1.innerText = `${tipValue}`;
}

btnEl.addEventListener("click", calculateTotal);

function clear() {
  billAmt.value = "";
  tipAmt.value = "";
  total.innerText = "";
  friends.value = "";
  tipPercent1.innerText = "";
}

btnCl.addEventListener("click", clear);

//For dutch

function calculateDutch() {
  const billDutchAmt = Number(billDutch.value);
  const tipDutchAmt = Number(tipDutch.value / billDutchAmt) * 100;
  const totalDutchAmt = billDutchAmt + Number(tipDutch.value);
  totalDutch.innerText = `$${totalDutchAmt.toFixed(2)}`;
  tipPercent2.innerText = `${tipDutchAmt}`;
}

btnElDutch.addEventListener("click", calculateDutch);

function clearDutch() {
  billDutch.value = "";
  tipDutch.value = "";
  totalDutch.innerText = "";
  tipPercent2.innerText = "";
}

btnClDutch.addEventListener("click", clearDutch);
