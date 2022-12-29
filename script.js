let $ = (selector) => {
  return document.querySelector(selector);
};
let $$ = (selector) => {
  return document.querySelectorAll(selector);
};
let checkDate = (date) => {
  let [day, month, year] = date.split("/");
  let cond1 = date.split("/").length === 3;
  let d = new Date([month, day, year].join("/"));
  return (
    cond1 &&
    Object.prototype.toString.call(d) === "[object Date]" &&
    !isNaN(d.getTime())
  );
};
let td = (content) => {
  let td = document.createElement("td");
  td.textContent = content;
  return td;
};
let i = 1;

let submitBtn = $("#submit-btn");
submitBtn.onclick = (e) => {
  e.preventDefault();
  let username = $("#username")?.value;
  let password = $("#password")?.value;
  let retypePassword = $("#retype-password")?.value;
  let firstName = $("#first-name")?.value;
  let lastName = $("#last-name")?.value;
  let gender = $("input[name='gender']:checked")?.value;
  let birth = $("#birth")?.value;
  let email = $("#email")?.value;
  if (
    username &&
    password &&
    retypePassword &&
    firstName &&
    lastName &&
    birth &&
    email
  ) {
    if (password !== retypePassword) {
      console.log("Password khong trung khop");
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      console.log("Email chua dung dinh dang!");
    } else if (!gender) {
      console.log("Phai chon radio button");
    } else if (!checkDate(birth)) {
      console.log("Ngay sinh phai co dinh dang dd/MM/yyyy!");
    } else {
      let table = $("table");
      let tr = document.createElement("tr");
      tr.append(
        td(i++),
        td(firstName),
        td(lastName),
        td(gender),
        td(birth),
        td(email),
        td(username)
      );
      table.appendChild(tr);
    }
  } else {
    console.log("Khong duoc de trong truong nao!");
  }
};
