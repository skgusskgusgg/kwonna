const input = document.getElementsByClassName("input")[0];
const btn = document.getElementsByClassName("btn")[0];
const maindiv = document.getElementsByClassName("hidden")[0];
const mainPage = document.querySelectorAll(".main");
// const mainPageLength = mainPage.length;
const commenter = ["dmsrud55", "hi__", "hellow~", "rullru"];

function writeComment() {
    const div = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.setAttribute("class", "spancss");
    div.appendChild(span1);
    div.appendChild(span2);

    let random = commenter[Math.floor(Math.random() * commenter.length)];
    span1.innerHTML = random;
    span2.innerHTML = input.value;

    maindiv.appendChild(div);
}
// input.addEventListener("keyup", function () {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         writeComment();
//     }
// });

btn.addEventListener("click", writeComment);

input.addEventListener("keydown", function enterKey() {
    if (window.event.keyCode == "13") {
        writeComment();
    }
});

// console.log(writeComment());
// writeComment함수를 addEventListener로 받아서 enter이벤트 등록
// 피드 4개가 있으므로 forEach메소드 활용

// writeComment함수를 addEventListener로 받아서 클릭이벤트 등록
