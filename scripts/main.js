const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "mdn-imagetest/Hyundai_vinner_Rally_Sweden_2.jpg") {
    myImage.setAttribute("src", "mdn-imagetest/Hyundai_vinner_Rally_Sweden_2.jpg");
  } else {
    myImage.setAttribute("src", "mdn-imagetest/Hyundai_vinner_Rally_Sweden_2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
  const username = prompt("please enter ur username: ");
  if (!username) {
    setUserName();
  }
  else {
  localStorage.setItem("name", username);
  myHeading.textContent = `rally is cool, ${username}`;
  }
}

if(!localStorage.getItem("name")) {
  setUserName();
}
else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `rally is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};