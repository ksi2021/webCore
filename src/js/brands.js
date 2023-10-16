function toggleBrands(){
  let toggleButton = document.querySelectorAll(".toggle-button")[0];
  let brandList = document.querySelector('.brands__list');
  let opened = false;

  toggleButton.onclick = function () {

    opened = !opened;
    brandList.classList.toggle("brands__list--opened");

    let buttonIcon = toggleButton.querySelector(".toggle-button__icon");
    let buttonText = toggleButton.querySelector(".toggle-button__text");

    buttonIcon.classList.toggle("toggle-button__icon--reverse");
    setTimeout(() => buttonText.textContent = opened ? "Скрыть всe" : "Показать всe", 400)
  }
}

toggleBrands()
