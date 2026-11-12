// ==========================================
// WEBアプリケーション開発１ 確認クイズ
// メイン制御スクリプト（全15問）
// ==========================================

// 1. クイズデータ（全15問の定義：correct は 0: 〇, 1: ×）
const quizData = [
    {
        question: "第1回：HTMLにおいて、<br> のような「空要素」と呼ばれるタグには終了タグがなく、開始タグ単体で使用する。",
        correct: 0,
        explanation: "【解説】HTMLの要素は通常、開始タグと終了タグで内容を囲んで表現するが、改行を表す <br> などの空要素には終了タグが存在せず、開始タグ単体で記述する。"
    },
    {
        question: "第2回：HTMLでリンク（ハイパーリンク）を埋め込む際に使用するタグは <link> タグである。",
        correct: 1,
        explanation: "【解説】Webページ内でテキスト等にリンクを設定するのは <a> タグである。<link> タグは外部CSSファイルなどを読み込む際に <head> 内で使用するタグであり、役割が異なる。"
    },
    {
        question: "第3回：console.log() はWebページの閲覧者全員に見せるテキストを表示するために用いられる命令である。",
        correct: 1,
        explanation: "【解説】Webページの画面上にテキストを追加するのは document.body.append() 等の役割である。console.log() は開発者が処理の途中経過等を確認するためにデベロッパーツール上に出力する命令である。"
    },
    {
        question: "第4回：JavaScriptにおいて、A ** B という演算子は「AをBで割った余り」を計算する。",
        correct: 1,
        explanation: "【解説】** は累乗を表す演算子であり、A ** B は「AのB乗」を計算する。割り算の余りを求める演算子は % である。"
    },
    {
        question: "第5回：JavaScriptの論理演算において、論理和（または）を表す記号は && である。",
        correct: 1,
        explanation: "【解説】論理和（「または」）を表す演算子は || である。&& は2つの条件が両方とも成立することを表す論理積（「かつ」）の記号である。"
    },
    {
        question: "第6回：配列（Array）の最初の要素を取り出す際に指定する添字（インデックス）の数値は 0 である。",
        correct: 0,
        explanation: "【解説】JavaScriptの配列の添字は 0 から始まる。そのため、長さが3の配列の場合、利用できる添字は 0, 1, 2 となる。"
    },
    {
        question: "第7回：setInterval 関数の第2引数で指定する実行間隔の時間の単位は「秒」である。",
        correct: 1,
        explanation: "【解説】setInterval(関数名, 実行間隔) の第2引数は「ミリ秒（ms）」で指定する。例えば1秒ごとに繰り返し実行したい場合は、1000 を指定する必要がある。"
    },
    {
        question: "第8回：addEventListener の3番目の引数に { once: true } を渡すことで、イベントリスナを1度だけ実行して自動的に登録解除させることができる。",
        correct: 0,
        explanation: "【解説】addEventListener のオプションとして once プロパティに true を指定すると、1回呼び出された時点でイベントリスナが解除され、複数回実行されるのを防ぐことができる。"
    },
    {
        question: "第9回：CSSでHTML要素の class 属性を指定してスタイルを適用する場合、セレクタの先頭には # を付ける。",
        correct: 1,
        explanation: "【解説】class 属性を指定するセレクタには先頭にピリオド（.）を付け、id 属性を指定するセレクタにシャープ（#）を付ける。"
    },
    {
        question: "第10回：CSSの余白設定において、padding は境界線（ボーダー）の外側にある余白を調整するプロパティである。",
        correct: 1,
        explanation: "【解説】要素の境界線より「内側」の余白を設定するのが padding である。境界線より「外側」の余白を調整するプロパティは margin である。"
    },
    {
        question: "第11回：console.assert() は、第1引数の式が true（正しい）となった場合にエラーメッセージをコンソールに出力する。",
        correct: 1,
        explanation: "【解説】console.assert() は第1引数が false（テスト失敗）の場合にのみ、第2引数に指定したエラーメッセージを出力する関数であり、自動テストに活用される。"
    },
    {
        question: "第12回：JavaScriptで動的に生成したHTML要素を特定の親要素の中に追加する際は、appendChild() メソッドを使用する。",
        correct: 0,
        explanation: "【解説】document.createElement() で作成した要素は、親要素に対して appendChild() メソッドを呼び出すことで、その子要素として画面（DOM）に追加できる。"
    },
    {
        question: "第13回：SNSやチャットアプリ等でWebサイトのURLを共有した際に、タイトルや画像を目立たせて表示させる仕組みを「OGP」と呼ぶ。",
        correct: 0,
        explanation: "【解説】OGP（Open Graph Protocol）タグを <head> 内に設定することで、SNSで共有された際にタイトルや概要、サムネイル画像がリッチにカード表示されるようになる。"
    },
    {
        question: "第14回：BootstrapなどのCSSフレームワークを利用すると、単一のHTMLでPCやスマホなどの画面幅に自動適応する「レスポンシブデザイン」を容易に構築できる。",
        correct: 0,
        explanation: "【解説】Bootstrapはデザイン部品が集まったフレームワークであり、クラス名を指定するだけで様々なデバイスに適応したレスポンシブデザインを簡単に実現できる。"
    },
    {
        question: "第15回：GitHub Pagesを利用すると、HTML・CSS・JavaScriptで構成された静的なWebページを無料で公開することができる。",
        correct: 0,
        explanation: "【解説】GitHub PagesはGitHubのリポジトリを利用して、サーバ構築やドメイン取得の手間なく静的Webコンテンツを低コスト（無料）で公開できるサービスである。"
    }
];

// 2. ゲームの状態管理用変数
let currentQuizIndex = 0; // 現在の問題番号のインデックス
let score = 0;            // 正解数

// 3. HTML要素の取得
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const quizBoxEl = document.getElementById("quiz-box");
const btnTrue = document.getElementById("btn-true");
const btnFalse = document.getElementById("btn-false");

const feedbackContainerEl = document.getElementById("feedback-container");
const judgmentTextEl = document.getElementById("judgment-text");
const explanationTextEl = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

const resultContainerEl = document.getElementById("result-container");
const scoreTextEl = document.getElementById("score-text");
const rateTextEl = document.getElementById("rate-text");
const restartBtn = document.getElementById("restart-btn");

// 4. クイズを初期化してスタートする関数
function startQuiz() {
    currentQuizIndex = 0;
    score = 0;
    resultContainerEl.style.display = "none";
    quizBoxEl.style.display = "block";
    showQuiz();
}

// 5. 現在の問題を画面に表示する関数
function showQuiz() {
    const currentQuiz = quizData[currentQuizIndex];
    questionNumberEl.textContent = `第 ${currentQuizIndex + 1}問 / 全 ${quizData.length}問`;
    questionTextEl.textContent = currentQuiz.question;
    
    quizBoxEl.style.display = "block";
    feedbackContainerEl.style.display = "none";
}

// 6. ユーザーの回答を判定する関数（userAnswer: 0は〇, 1は×）
function checkAnswer(userAnswer) {
    const currentQuiz = quizData[currentQuizIndex];
    
    // クイズ出題部分を隠し、解説・判定フィードバックを表示
    quizBoxEl.style.display = "none";
    feedbackContainerEl.style.display = "block";

    // 正誤の判定とテキスト・色の変更
    if (userAnswer === currentQuiz.correct) {
        score++;
        judgmentTextEl.textContent = "🎉 正解！";
        judgmentTextEl.style.color = "#27ae60";
    } else {
        judgmentTextEl.textContent = "❌ 残念…不正解";
        judgmentTextEl.style.color = "#e74c3c";
    }

    // 解説文のセット
    explanationTextEl.textContent = currentQuiz.explanation;
}

// 7. 「次の問題へ」ボタンが押されたときの処理
nextBtn.addEventListener("click", () => {
    currentQuizIndex++;
    if (currentQuizIndex < quizData.length) {
        showQuiz(); // 次の問題へ進む
    } else {
        showResult(); // すべて終了したら結果画面へ
    }
});

// 8. 15問終了時の結果画面を表示する関数
function showResult() {
    feedbackContainerEl.style.display = "none";
    resultContainerEl.style.display = "block";

    const total = quizData.length;
    const rate = Math.round((score / total) * 100);

    scoreTextEl.textContent = `正解数：${total}問中 ${score}問正解`;
    rateTextEl.textContent = `正解率：${rate}%`;
}

// 9. 「もう一度チャレンジする」ボタンが押されたときのリセット処理
restartBtn.addEventListener("click", startQuiz);

// 10. 〇ボタン（0）と ×ボタン（1）のクリックイベント登録
btnTrue.addEventListener("click", () => checkAnswer(0));
btnFalse.addEventListener("click", () => checkAnswer(1));

// 初回起動時の実行
startQuiz();