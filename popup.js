document.addEventListener("DOMContentLoaded", function () {
  const drawButton = document.getElementById("drawButton");
  const resultDiv = document.getElementById("result");
  const fortuneLevel = document.querySelector(".fortune-level");
  const fortuneText = document.querySelector(".fortune-text");

  const fortunes = [
    {
      level: "大大吉",
      text: "最高の運気です！何事も思い通りに進み、大きな幸運が舞い込みます。新しい挑戦に最適な日です。",
      color: "#8b4513",
    },
    {
      level: "大吉",
      text: "素晴らしい一日になります。積極的に行動し、チャンスを掴みましょう。",
      color: "#a0522d",
    },
    {
      level: "凶後大吉",
      text: "一時的な困難がありますが、その後に大きな幸運が待っています。諦めずに頑張りましょう。",
      color: "#8b4513",
    },
    {
      level: "凶後吉",
      text: "最初は思うようにいきませんが、後半は良い方向に向かいます。忍耐が大切です。",
      color: "#a0522d",
    },
    {
      level: "末大吉",
      text: "物事の結末が大変良い方向に向かいます。最後まで諦めずに取り組みましょう。",
      color: "#8b4513",
    },
    {
      level: "向大吉",
      text: "運気が大吉に向かっています。今の努力が実を結ぶ時が近づいています。",
      color: "#a0522d",
    },
    {
      level: "大吉向吉",
      text: "大吉に向かう強い運勢です。自信を持って前進しましょう。",
      color: "#8b4513",
    },
    {
      level: "吉",
      text: "良いことが起こりそうな予感です。積極的に行動してみてください。",
      color: "#8b7355",
    },
    {
      level: "中吉",
      text: "穏やかで安定した一日になりそうです。周りの人との関係を大切に。",
      color: "#8b7355",
    },
    {
      level: "小吉",
      text: "ちょっとした幸せが見つかりそうです。小さなことに感謝してみましょう。",
      color: "#8b7355",
    },
    {
      level: "小凶後吉",
      text: "小さな困難の後に良いことが待っています。前向きに過ごしましょう。",
      color: "#8b7355",
    },
    {
      level: "後吉",
      text: "後になって良い結果が現れます。今は準備の時期と考えて行動しましょう。",
      color: "#8b7355",
    },
    {
      level: "末吉",
      text: "最終的には良い結果になります。今は慎重に行動することが大切です。",
      color: "#b8860b",
    },
    {
      level: "半吉",
      text: "物事が半分程度の成果となりそうです。着実に進歩していきましょう。",
      color: "#b8860b",
    },
    {
      level: "平",
      text: "平穏無事な一日になります。現状維持を心がけ、安定を大切にしましょう。",
      color: "#8b7355",
    },
    {
      level: "吉凶未分末大吉",
      text: "今は判断が難しい時期ですが、最終的には大変良い結果になります。",
      color: "#b8860b",
    },
    {
      level: "吉凶不分末吉",
      text: "現状では良し悪しが分かりにくいですが、最後は良い方向に向かいます。",
      color: "#b8860b",
    },
    {
      level: "吉凶相半",
      text: "良いことと悪いことが半々です。バランスを取って慎重に進みましょう。",
      color: "#b8860b",
    },
    {
      level: "吉凶相交末吉",
      text: "良いことと悪いことが交互に起こりますが、最終的には良い結果になります。",
      color: "#b8860b",
    },
    {
      level: "吉凶相央",
      text: "吉凶が入り混じる複雑な運勢です。冷静な判断を心がけましょう。",
      color: "#b8860b",
    },
    {
      level: "小凶後大吉",
      text: "少しの困難の後に大きな幸運が訪れます。今の困難は成長の機会です。",
      color: "#8b4513",
    },
    {
      level: "凶後大吉向吉",
      text: "困難を乗り越えた後、大吉へと向かう運勢です。希望を持ち続けましょう。",
      color: "#a0522d",
    },
    {
      level: "小凶",
      text: "小さな困難がありますが、慎重に対処すれば乗り越えられます。",
      color: "#cd853f",
    },
    {
      level: "後大吉",
      text: "後になって大変良い結果が現れます。今は忍耐の時です。",
      color: "#8b4513",
    },
    {
      level: "向吉",
      text: "運気が吉に向かっています。少しずつ良い方向に進んでいます。",
      color: "#8b7355",
    },
    {
      level: "末小吉",
      text: "最終的に小さな幸せが得られます。小さな積み重ねを大切に。",
      color: "#b8860b",
    },
    {
      level: "吉凶相雑",
      text: "様々な出来事が混在する時期です。柔軟な対応を心がけましょう。",
      color: "#b8860b",
    },
    {
      level: "小吉後平",
      text: "小さな幸せの後、平穏な状態になります。安定した日々を過ごせます。",
      color: "#8b7355",
    },
    {
      level: "凶向大吉",
      text: "困難から大吉へと向かう力強い運勢です。試練を乗り越えて飛躍しましょう。",
      color: "#8b4513",
    },
    {
      level: "後向吉",
      text: "後になって吉へと向かいます。今は静かに時を待ちましょう。",
      color: "#8b7355",
    },
    {
      level: "吉凶末分",
      text: "吉凶の判断がつかない状況です。慎重に様子を見ながら進みましょう。",
      color: "#b8860b",
    },
    {
      level: "大大吉",
      text: "再び最高の運気！今度こそ大きな成功を掴む絶好のチャンスです。",
      color: "#8b4513",
    },
  ];

  const loadingDiv = document.getElementById("loading");

  drawButton.addEventListener("click", function () {
    drawButton.disabled = true;
    resultDiv.classList.add("hidden");
    loadingDiv.classList.remove("hidden");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const selectedFortune = fortunes[randomIndex];

      loadingDiv.classList.add("hidden");

      fortuneLevel.textContent = selectedFortune.level;
      fortuneLevel.style.color = selectedFortune.color;
      fortuneText.textContent = selectedFortune.text;

      resultDiv.classList.remove("hidden");

      drawButton.textContent = "もう一度引く";
      drawButton.disabled = false;
    }, 2000);
  });
});
