let input = document.getElementById("input");
// console.log(input);

let add = document.getElementById("add");
// console.log(add);

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
  input.value = "";
});

let toDoSection = document.querySelector(".to-do-section");

toDoSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("list-item")) {
    let checkStatus = arr[e.target.parentElement.id][1];
    checkStatus
      ? (arr[e.target.parentElement.id][1] = false)
      : (arr[e.target.parentElement.id][1] = true);

    if (checkStatus) {
      e.target.nextElementSibling.style = "text-decoration:line-through";
    } else {
      e.target.nextElementSibling.style = "text-decoration:none";
    }
  }
});
