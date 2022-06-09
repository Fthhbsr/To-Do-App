let input = document.getElementById("input");

let total = document.querySelector("#total");

let completed = document.querySelector("#completed");

let container = document.querySelector(".container");

let list = document.getElementById("list");

let todos = [];

//load prosess
window.addEventListener("load", () => {
  let readItem = JSON.parse(localStorage.getItem("todos"));
  list.innerHTML += readItem[0];
  events();
  input.focus();
});

container.addEventListener("click", (e) => {
  // add item
  if (e.target.classList.contains("add")) {
    let trim = input.value.trim();
    if (trim) {
      let frame = `<li class="list-item">
            <input type="checkbox" name="check" class="checkbox"  />
            <span class="to-do">${input.value}</span>
            <i class="fa-solid fa-trash-can"></i>
          </li>`;

      list.innerHTML += frame;
    }
    input.value = "";
  }

  //remove item
  if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.remove();
  }

  //checked item
  if (e.target.classList.contains("checkbox")) {
    if (e.target.checked) {
      e.target.nextElementSibling.style = "text-decoration:line-through";
      e.target.setAttribute("checked", true);
    } else {
      e.target.nextElementSibling.style = "text-decoration:none";
      e.target.removeAttribute("checked");
    }
  }

  events();
  //localstorage
  let arr = [list.innerHTML];
  localStorage.setItem("todos", JSON.stringify(arr));
});

//total and completed items
let events = function () {
  total.innerHTML = Array.from(document.querySelectorAll(".list-item")).length;
  completed.innerHTML = Array.from(
    document.querySelectorAll("input:checked")
  ).length;
};
