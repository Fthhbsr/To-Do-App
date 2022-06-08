let input = document.getElementById("input");
// console.log(input);

let add = document.getElementById("add");
// console.log(add);
let total = document.querySelector("#total");
// console.log(total);
let completed = document.querySelector("#completed");
// console.log(completed);
let checkCount = 0;
let totalCount = 0;
let idCount = 0;
let arr = [];
let list = document.getElementById("list");

// console.log(todo);

// let frame = `<li class="list-item">
//             <input type="checkbox" name="check" class="list-item"/>
//             <span class="to-do"></span>
//             <i class="fa-solid fa-trash-can"></i>
//           </li>`;

add.addEventListener("click", () => {
  console.log(input.value);
  let trim = input.value.trim();
  if (trim) {
    let row = document.createElement("div");
    list.appendChild(row);

    let frame = `<li id="${idCount}" class="list-item">
            <input type="checkbox" name="check" class="list-item"/>
            <span class="to-do">${input.value}</span>
            <i class="fa-solid fa-trash-can"></i>
          </li>`;
    arr.push([idCount, true]);
    console.log(arr);
    list.lastElementChild.innerHTML = frame;
    console.log();
    idCount++;
    totalCount++;
    events();
  }
  input.value = "";
});

let toDoSection = document.querySelector(".to-do-section");

toDoSection.addEventListener("click", (e) => {
  let checkStatus = arr[e.target.parentElement.id][1];
  if (e.target.classList.contains("fa-solid")) {
    if (!checkStatus) {
      checkCount--;
    }
    e.target.parentElement.parentElement.remove();
    totalCount--;
    events();
  }
  if (e.target.classList.contains("list-item")) {
    if (checkStatus) {
      arr[e.target.parentElement.id][1] = false;
      checkCount++;
    } else {
      arr[e.target.parentElement.id][1] = true;
      checkCount--;
    }
    events();
    if (checkStatus) {
      e.target.nextElementSibling.style = "text-decoration:line-through";
    } else {
      e.target.nextElementSibling.style = "text-decoration:none";
    }
  }
});

let events = function () {
  total.innerHTML = totalCount;
  completed.innerHTML = checkCount;
};
