import { getClients, deleteClient } from "./API.js";

(function () {
  const listClients = document.querySelector("#list-clients");
  listClients.addEventListener("click", confirmDelete);
  document.addEventListener("DOMContentLoaded", showClients);

  async function showClients() {
    const clients = await getClients();

    clients.forEach((client) => {
      const { name, email, telephone, company, id } = client;

      const row = document.createElement("TR");

      row.innerHTML += `
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
          <p class="text-sm leading-10 text-gray-700"> ${email} </p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
          <p class="text-gray-700">${telephone}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
          <p class="text-gray-600">${company}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
          <a href="edit-client.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Edit</a>
          <a href="#" data-client="${id}" class="text-red-600 hover:text-red-900 delete">Delete</a>
      </td>
  `;

      listClients.appendChild(row);
    });
  }
  async function confirmDelete(e) {
    if (e.target.classList.contains("delete")) {
      const clientId = parseInt(e.target.dataset.client);
      const uphold = confirm("¿Do you want to delete this client?");

      if (uphold) {
        await deleteClient(clientId);
      }
    }
  }
})();
