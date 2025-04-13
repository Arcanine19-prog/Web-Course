document.getElementById("title").innerText = "Updated Title";


let usernameField = document.getElementsByName("username")[0];
usernameField.value = "John Doe";


let genderRadios = document.getElementsByName("gender");
for (let radio of genderRadios) {
    if (radio.checked) {
        console.log("Selected Gender:", radio.value);
    }
}


let paragraphs = document.getElementsByTagName("p");
console.log("Total number of <p> elements:", paragraphs.length);

let listItems = document.getElementsByTagName("li");
for (let li of listItems) {
    console.log("List item:", li.innerText);
}


let inputFields = document.getElementsByClassName("input-field");
for (let field of inputFields) {
    field.style.backgroundColor = "lightblue";
}


let firstInfoPara = document.querySelector(".info");
firstInfoPara.innerText = "This is the first info paragraph";


let firstRadio = document.querySelector("input[name='gender']");
firstRadio.checked = true;


let allInfoParagraphs = document.querySelectorAll(".info");
allInfoParagraphs.forEach(para => {
    console.log("Info Paragraph:", para.innerText);
});

let allHobbies = document.querySelectorAll(".hobby");
allHobbies.forEach(hobby => {
    hobby.checked = true;
    console.log("Checked Hobby:", hobby.value);
});
