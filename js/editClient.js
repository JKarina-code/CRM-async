import { getClient, editClient } from "./API.js";
import { printAlert, validateObj } from "./functions.js";

(function () {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const telephoneInput = document.querySelector("#telephone");
  const companyInput = document.querySelector("#company");
  const idInput = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    const parametersURL = new URLSearchParams(window.location.search);
    const idClient = parseInt(parametersURL.get("id"));
    const client = await getClient(idClient);
    showClient(client);

    const formClient = document.querySelector("#formClient");
    formClient.addEventListener("submit", validateClient);
  });

  function showClient(client) {
    const { name, company, email, telephone, id } = client;

    nameInput.value = name;
    companyInput.value = company;
    emailInput.value = email;
    telephoneInput.value = telephone;
    idInput.value = id;
  }

  function validateClient(e) {
    e.preventDefault();

    const client = {
      name: nameInput.value,
      email: emailInput.value,
      company: companyInput.value,
      telephone: telephoneInput.value,
      id: parseInt(idInput.value),
    };
    if (validateObj(client)) {
      printAlert("All fields are required", "error");
      return;
    }

    editClient(client);
  }
})();
