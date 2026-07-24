/**
 * 성적 계산기 (PDF 231페이지 과제)
 * 3과목 점수를 prompt로 연속 입력받아 총점, 평균, 합격 여부를 구함
 */
function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        var input = prompt(subjects[i] + " 점수를 입력하세요.");

        if (input === null) {
            alert("성적 계산을 취소하였습니다.");
            return;
        }

        var score = parseFloat(input);

        if (isNaN(score) || score < 0 || score > 100) {
            alert("0부터 100 사이의 유효한 점수를 입력하세요.");
            i--;
            continue;
        }

        total += score;
    }

    var avg = total / subjects.length;
    var result = avg >= 60 ? "합격입니다!" : "불합격입니다.";

    alert("총점: " + total + "점, 평균: " + avg.toFixed(1) + ", 결과: " + result);
}
