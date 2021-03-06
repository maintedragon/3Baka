//テキストからカンマを除去して整数を返す
window.addEventListener("load", function () {});

const format = (number) => {
  return Number(number.replace(/,/g, ""));
};

//カウントアップ
const countUp = (target, add, increment) => {
  //タイマーセット
  let timerId = setInterval(() => {
    if (format(target.textContent) < add) {
      //incrementの値を加算して代入
      target.textContent = format(target.textContent) + increment;
      //結果をカンマ区切りにして代入
      target.textContent = Number(target.textContent).toLocaleString();
    } else {
      //タイマークリア
      clearInterval(timerId);
    }
  }, 10);
};

//演算に使用する要素を取得
const target = document.querySelector("#target");
//ボタン要素を取得
const btn = document.querySelector("#btn");
//加算する値
const add = 1;
//加算の増加量
const increment = 1;

//イベントリスナー
btn.addEventListener("click", () => {
  //テキストコンテンツを取得
  let total = format(target.textContent);
  //テキストコンテンツにaddを加算
  total = Number(total) + add;
  //カウントアップの処理を実行する
  //3だったら馬鹿になる
  if (total > 0) {
    for (var i = 0; total >= i; i++) {
      var ii = String(i);
      if (i % 3 === 0 || ii.indexOf("3") >= 0) {
        document.querySelector("#osamu").innerHTML =
          '<img src="/Users/daikimiyazaki/Downloads/0QT0oSfD_400x400.jpeg">';
      } else {
        document.querySelector("#osamu").innerHTML = i;
        document.querySelector("#target").innerHTML = i;
      }
    }
  } else {
    document.write("正の数値にしてください。");
  }
  countUp(target, total, increment);
});
