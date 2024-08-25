window.addEventListener("DOMContentLoaded", () => {
  // Load Dice
  const diceLoad = document.querySelector(".dice-button button");

  // Hold Dice
  const diceHold = document.querySelector(".hold-button button");

  // NoUpdateCurrentScore
  const noUpdateCurrent = document.querySelectorAll(
    ".current-no-update-score div:last-child"
  );

  // currentNujeokScore
  const currentScore1 = document.querySelectorAll(
    ".current-score div:first-child"
  );

  const currentScore2 = document.querySelectorAll(
    ".current-score div:last-child"
  );

  // Client Component
  const client = document.querySelectorAll(".users > div");

  // 주사위 던지면 랜덤으로 나오는 숫자
  let diceNumber = 0;

  // 홀드 여부
  let isHold = false;

  // client 1을 선택한다.
  let client1 = true;

  // client 2를 선택한다.
  let client2 = false;

  // 현재 점수 변수
  let currentScore = 0;

  // 누적 점수 변수
  let nuScore = 0;

  // 클릭하기 전에 current 값 초기화하기
  noUpdateCurrent.forEach((ele) => {
    ele.innerText = currentScore;
  });

  const displayScore = () => {
    // 클릭하고 client1, client2에 따라 조건문
    if (client1 && !client2) {
      client[0].classList.add("active");
      client[1].classList.remove("active");
      noUpdateCurrent[0].innerText = currentScore;
      currentScore1[0].innerText = Math.floor(nuScore / 10, 10);
      currentScore2[0].innerText = Math.floor(nuScore % 10, 10);
    } else if (!client1 && client2) {
      client[0].classList.remove("active");
      client[1].classList.add("active");
      noUpdateCurrent[1].innerText = currentScore;
      currentScore1[1].innerText = Math.floor(nuScore / 10, 10);
      currentScore2[1].innerText = Math.floor(nuScore % 10, 10);
    }
  };

  // Load Dice 버튼 클릭 시 실행되는 함수.
  const diceLoading = () => {
    diceNumber = Math.ceil(Math.random() * 6);
    console.log(diceNumber);
    if (diceNumber === 1 || diceNumber === 2) {
      currentScore = 0;
      client1 = !client1;
      client2 = !client2;
    } else {
      currentScore += diceNumber;
    }

    displayScore();
  };

  const diceHolding = () => {
    nuScore += currentScore;
    currentScore = 0;
    displayScore();
    if (nuScore > 50) {
      console.log("게임 종료");
    } else {
      client1 = !client1;
      client2 = !client2;
    }
  };

  diceLoad.addEventListener("click", diceLoading);

  diceHold.addEventListener("click", diceHolding);
});
