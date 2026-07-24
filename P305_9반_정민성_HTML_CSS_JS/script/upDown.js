/**
 * Up-Down 숫자 맞추기 게임 (PDF 230페이지 과제)
 * 컴퓨터가 1부터 50 사이의 무작위 숫자를 생각하고 사용자가 맞추는 게임
 */
function playUpDown() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;
    var isGuessed = false;

    alert("🎮 Up-Down 숫자 맞추기 게임을 시작합니다!\n컴퓨터가 1부터 50 사이의 무작위 숫자를 생각했습니다.");

    while (!isGuessed) {
        var input = prompt("1부터 50 사이의 숫자를 입력하세요:");

        if (input === null) {
            alert("게임을 취소하였습니다.");
            return;
        }

        var userNum = parseInt(input, 10);

        if (isNaN(userNum) || userNum < 1 || userNum > 50) {
            alert("1부터 50 사이의 유효한 숫자를 입력해 주세요.");
            continue;
        }

        count++;

        if (userNum > computerNum) {
            alert("Down!");
        } else if (userNum < computerNum) {
            alert("Up!");
        } else {
            alert("🎉 축하합니다! " + count + "번만에 맞추셨습니다.");
            isGuessed = true;
        }
    }
}
