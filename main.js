// 랜덤번호 지정하기
// 유저가 번호입력한다 그리고 go 라는 버튼을 누르기
// 유저가 랜덤번호 맞추면 -> 맞췄습니다!!
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up!!
// Reset버튼을 누르면 게임이 리셋된다
// 5번의 찬스를 다쓰면 게임이 끝남 (더이상 추측불가, 버튼이 disabled)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
// getElementById 뿐만 아니라 다양한 방식으로 선택가능
// 잘 가져오는지 확인 -> console.log(playButton);
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

// addEventListener(이벤트이름, 이벤트 발생 시 실행함수)
playButton.addEventListener("click", play);

function pickRandomNum() {
  // Math.random() -> 랜덤한 숫자를 뽑을 수 있게 도와주는 메서드 0~1미만의 부동소숫점 생성, 따라서 * 100을 해서 큰 수로 만들고 -> Math.floor()를 사용해서 정수로 만들어준 후 -> + 1 을 해줌으로서 99까지만들어지는 것에서 100을 만들도록해준다.
  // Math.floor() -> 정수로 만들어주는 메서드
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

// main.js:18 play 실행함수 *함수도 매개변수로 넘길 수 있으며 매개변수로 넘길땐 호출하지 않는다 play() <- X
function play() {
  let userValue = userInput.value;
  // input의 값 확인 -> console.log(userValue);
  // if문으로 로직 만들기
  if (userValue < computerNum) {
    resultArea.textContent = "올라가렴!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "내려가렴!!!";
  } else {
    resultArea.textContent = "정답이로구나!!!";
  }
}

pickRandomNum();
