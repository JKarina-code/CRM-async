export function printAlert(message, type) {
  const alert = document.querySelector(".bg-red-100");

  if (!alert) {
    const alert = document.createElement("P");
    alert.classList.add(
      ".bg-red-100",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "my-6",
      "text-center",
      "border"
    );

    alert.innerHTML = `
            <span class="block sm:inline">${message}</span>
        `;
    if (type === "error") {
      alert.classList.add("bg-red-100", "border-red-400", "text-red-700");
    } else {
      alert.classList.add("bg-green-100", "border-green-400", "text-green-700");
    }

    document
      .querySelector(".contentNew")
      .insertBefore(alert, document.querySelector(".contentForm"));

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

export function validateObj(obj) {
  return !Object.values(obj).every((element) => element !== "");
}
