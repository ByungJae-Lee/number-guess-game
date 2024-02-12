// 숫자 맞추기 게임 만들기
// 랜덤으로 정답이 나와야 한다
// 정답은 1~100사이의 숫자를 랜덤으로 추출

// 숫자를압력할 수 있어야함
//압력된 숫자 > 정답 "Down~" 보여주기
//압력된 숫자 < 정답 "Up!" 보여주기
//입력된 숫자 === 정답 "Collect!!!" 보여주기
//압력된 숫자 정답의 범주를 벗어나면 안내문구 보여주기 "1~100까지만 압력해주세요"

// 숫자를 제출하는 버튼이 있어야함 - "Go!"
// 초기화(리셋)버튼이 있어야함

// 남은 기회가 보여져야함 5회로 구성
// 5회가 끝나면 게임 끝("Go!"버튼 disable)
// 범주를 벗어나면 알려주고, 기회가 줄어들지 않는다
// 같은 숫자를 압력해도 알려주고, 기회가 줄어들지 않는다

// 배경만들기
// "숫자를 맞춰라!" 타이틀
// "Up & Down" 부제목
// "남은기회"
// "Go!"버튼, "Reset"버튼 만들기

let randomNumber = 0; // 초기숫자
let goButton = document.getElementById("go-button"); // go버튼
let resetButton = document.getElementById("reset-button"); // reset버튼
let userInput = document.getElementById("user-input"); // input창
let resultArea = document.getElementById("result-area"); // "숫자를 입력하세요"
let chanceArea = document.getElementById("chance-area"); // "남은기회"
let history = [];
let chances = 5;
let gameOver = false;

goButton.addEventListener("click", go); // go버튼 이벤트
resetButton.addEventListener("click", reset); // reset버튼 이벤트
userInput.addEventListener("focus", function () {
  userInput.value = "";
}); // input포커스 시 공백으로

// 랜덤숫자 설정함수
function randomNumberGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", randomNumber);
}
// go버튼 함수
function go() {
  let userValue = userInput.value; // input창 입력되게함
  // 유효성검사1 -> 1~100 외의 숫자입력시
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1~100숫자를 입력해주세욧";
    return;
  }
  // 유효성검사2 -> history 중복방지
  if (history.includes(userValue)) {
    resultArea.textContent = "이미 존재하는 숫자에요 다른 숫자 입력하셔요잉~";
    return;
  }

  chances--; // 기회가 -1씩 깍임
  chanceArea.textContent = `남은기회:${chances}번`; // "남은기회" 입력창

  if (userValue < randomNumber) {
    resultArea.textContent = "Up!";
  } else if (userValue > randomNumber) {
    resultArea.textContent = "Down~";
  } else {
    resultArea.textContent = "Collect!!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver === true) {
    goButton.disabled = true;
  }
}
// reset버튼 함수
function reset() {
  userInput.value = "";
  randomNumberGame();
  resultArea.textContent = "숫자를 입력하세요";
  chanceArea.textContent = "남은 기회:5번";
  gameOver = false;
  goButton.disabled = false;
  chances = 5;
  history = [];
}
// 함수호출
randomNumberGame();
