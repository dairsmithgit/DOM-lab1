// function priceClickHandler(event) {}
window.onload = function () {
  let button1 = document.getElementById("limecola");
  let button2 = document.getElementById("peanuts");
  let button3 = document.getElementById("chocolate");
  let button4 = document.getElementById("gummies");
  let button5 = document.getElementById("reset");
  let newTotal = 0;
  button1.addEventListener("click", (event) => {
    let buttonPrice = Number(
      document.getElementById("limecola").getAttribute("data-price")
    );
    newTotal += buttonPrice;
    document.getElementById("totalcost").innerText = `Total: ${newTotal}.00`;
  });
  button2.addEventListener("click", (event) => {
    let buttonPrice = Number(
      document.getElementById("peanuts").getAttribute("data-price")
    );
    newTotal += buttonPrice;
    document.getElementById("totalcost").innerText = `Total: ${newTotal}.00`;
  });
  button3.addEventListener("click", (event) => {
    let buttonPrice = Number(
      document.getElementById("chocolate").getAttribute("data-price")
    );
    newTotal += buttonPrice;
    document.getElementById("totalcost").innerText = `Total: ${newTotal}.00`;
  });
  button4.addEventListener("click", (event) => {
    let buttonPrice = Number(
      document.getElementById("gummies").getAttribute("data-price")
    );
    newTotal += buttonPrice;
    document.getElementById("totalcost").innerText = `Total: ${newTotal}.00`;
  });
  button5.addEventListener("click", (event) => {
    newTotal = 0;
    document.getElementById("totalcost").innerText = `Total: $${newTotal}.00`;
  });
};
