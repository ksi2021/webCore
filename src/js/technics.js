function toggleTechnics(){
  let toggleButton = document.querySelectorAll(".toggle-button")[1];
  let technicsList = document.querySelector('.technics__list');
  let opened = false;

  toggleButton.onclick = function () {

    opened = !opened;
    technicsList.classList.toggle("technics__list--opened");

    let buttonIcon = toggleButton.querySelector(".toggle-button__icon");
    let buttonText = toggleButton.querySelector(".toggle-button__text");

    buttonIcon.classList.toggle("toggle-button__icon--reverse");
    setTimeout(() => buttonText.textContent = opened ? "Скрыть всe" : "Показать всe", 400)
  }

}

toggleTechnics()
