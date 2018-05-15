//javascript
//大きな画像ファイルを配列に格納
var imageArray = ["./img/cosmos01.jpg", "./img/cosmos02.jpg", "./img/cosmos03.jpg", "./img/cosmos04.jpg",
  "./img/cosmos05.jpg", "./img/cosmos07.jpg", "./img/cosmos08.jpg", "./img/cosmos09.jpg"
];

//画像インデックスを格納する変数を宣言
var currentImage = 0;

//タイマーIDを格納する変数を宣言
var timerId;

//画像を順に切り替える
function changeImage() {
  //画像を表示
  showimage(currentImage);
  //画像インデックスをインクリメント
  currentImage++;
  //画像インデックスが画像数と一致したら先頭に戻す
  if (currentImage == imageArray.length) currentImage = 0;
}

//スライドショー開始
function startSlideShow() {
  //1回目の画像切り替え
  changeImage();
  //タイマーの開始
  timerId = setInterval("changeImage()", 1000);

  //BGM開始
  var audio = document.getElementById("audio");
  audio.play();

  //ボリュームをセット
  audio.volume = document.getElementById("volume").value;

  //再生ボタンを無効化
  document.getElementById("buttonStart").disabled = "true";
}

//一時停止
function pauseSlideShow() {
  //タイマー停止
  clearInterval(timerId);

  //BGM一時停止
  var audio = document.getElementById("audio");
  audio.pause();

  //再生ボタンを有効化
  document.getElementById("buttonStart").disabled = "";

}

//停止
function stopSlideShow() {
  //タイマー停止
  clearInterval(timerId);
  //画像インデックスを先頭に戻す
  currentImage = 0;
  showimage(currentImage);

  //BGMの停止
  var audio = document.getElementById("audio");
  audio.load();

  //再生ボタンを有効化
  document.getElementById("buttonStart").disabled = "";

}

//画像を表示
function showimage(imageNo) {
  //メイン画像の切り替え
  document.getElementById("main").src = imageArray[imageNo];
  //全てのサムネイル画像要素の取得
  var thumbImages = document.getElementsByClassName("thumb");

  //selectクラスの削除
  for (var i = 0; i < thumbImages.length; i++) {
    thumbImages[i].className = "thumb";
    //thumbImages[i].classList.remove("select");
  }

  //選択されたサムネイル画像にselectクラスを追加
  thumbImages[imageNo].className = "thumb select";
  //thumbImages[imageNo].classList.add("select");
}

function changeVolume() {
  //ボリュームをセット
  var audio = document.getElementById("audio");
  audio.volume = document.getElementById("volume").value;
}
