window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let small = document.querySelector("small");
  let name = document.querySelector("#name");

  form.addEventListener("submit", (e) => {
    if (name.value.length == 0 || name.value.length <= 3) {
      e.preventDefault();
      small.innerHTML = "El nombre debe tener más de 3 caracteres";
    }
  });
});
