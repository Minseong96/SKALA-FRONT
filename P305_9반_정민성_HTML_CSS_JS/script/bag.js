/**
 * 내 가방 보기 (PDF 232페이지 과제)
 * 가방 속 물품(시계, 노트북, 우산)을 소지품 객체 배열로 관리하고 출력
 */
function showMyBag() {
    var myBag = [
        { name: "시계", count: 1 },
        { name: "노트북", count: 1 },
        { name: "우산", count: 1 }
    ];

    var resultText = "🎒 [정민성의 가방 속 물품 목록]\n\n";

    for (var i = 0; i < myBag.length; i++) {
        resultText += "- " + myBag[i].name + ": " + myBag[i].count + "개\n";
    }

    alert(resultText);

    console.log("=== 내 가방 소지품 목록 ===");
    for (var j = 0; j < myBag.length; j++) {
        console.log(myBag[j].name + " - " + myBag[j].count + "개");
    }
}
