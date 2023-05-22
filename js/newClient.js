import { printAlert } from "./functions.js";
import { newClient } from "./API.js";
(function () {
  const form = document.querySelector("#formNewClient");

  form.addEventListener("submit", validateClient);

  function validateClient(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const telephone = document.querySelector("#telephone").value;
    const company = document.querySelector("#company").value;

    const client = {
      name,
      email,
      telephone,
      company,
    };

    if (validateObj(client)) {
      printAlert(" All fields are required", "error");
      return;
    }

    printAlert("Client added successfully");

    newClient(client);
  }

  function validateObj(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
