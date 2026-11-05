"use strict";

const form = document.querySelector("#card-form");
const input = document.querySelector("#card-input");
const list = document.querySelector("#card-list");
const status = document.querySelector("#card-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (title === "") { status.textContent = "Введите название карточки."; return; }
  // Задание 1. Создайте li с помощью document.createElement().
  // Добавьте класс item-card и атрибут data-card.
  // Задание 2. Создайте span с классом item-title и button с классом remove-card.
  // Запишите текст безопасно через textContent, добавьте дочерние элементы и list.append().
  // Очистите поле input и обновите status.
  const card = document.createElement("li");
  card.className = "item-card";
  card.setAttribute("data-card", "");

  const span = document.createElement("span");
  span.className = "item-title";
  span.textContent = title;

  const btn = document.createElement("button");
  btn.className = "remove-card";
  btn.type = "button";
  btn.setAttribute("aria-label", "Удалить карточку");
  btn.textContent = "×";

  card.append(span, btn);
  list.append(card);
  input.value = "";
  status.textContent = "Карточка добавлена, колода растёт";
});

// Задание 3. Назначьте ОДИН обработчик click на list (делегирование).
// Через event.target.closest(".remove-card") найдите кнопку удаления.
// Если кнопка есть, удалите её ближайшую .item-card и завершите обработчик.
list.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".remove-card");
  if (removeBtn) {
    removeBtn.closest(".item-card").remove();
    status.textContent = "Карточка удалена";
    return;
  }

// Задание 4. Если кликнули не по кнопке удаления,
// найдите event.target.closest(".item-card") и переключите is-active.
  const card = event.target.closest(".item-card");
  if (card) {
    card.classList.toggle("is-active");
  }
});
