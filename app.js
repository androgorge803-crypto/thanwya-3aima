/* =========================================
   Karen Website — app.js
   ========================================= */

// ── Floating Petals ──────────────────────
const petalEmojis = ['🌸', '🌺', '💮', '🪷', '💗'];
const petalsContainer = document.getElementById('petals');

for (let i = 0; i < 12; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  p.style.left              = Math.random() * 100 + 'vw';
  p.style.fontSize          = (0.9 + Math.random() * 0.9) + 'rem';
  p.style.animationDuration = (7 + Math.random() * 8) + 's';
  p.style.animationDelay    = (Math.random() * 10) + 's';
  petalsContainer.appendChild(p);
}

// ── Today's Date ─────────────────────────
const today = new Date();
const DAYS   = ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
const MONTHS = ['يناير','فبراير','مارس','أبريل','مايو','يونيو',
                'يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];

document.getElementById('todayDate').textContent =
  `${DAYS[today.getDay()]}، ${today.getDate()} ${MONTHS[today.getMonth()]} ${today.getFullYear()}`;

// ── Countdown Timers ─────────────────────
function makeTimer(targetDate, containerId) {
  const el = document.getElementById(containerId);

  function update() {
    const diff = targetDate - new Date();

    if (diff <= 0) {
      el.innerHTML = '<div class="timer-done">🎉 يلا يا Karen!</div>';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    el.innerHTML = `
      <div class="time-unit">
        <div class="time-num">${pad(d)}</div>
        <div class="time-label">يوم</div>
      </div>
      <span class="timer-sep" aria-hidden="true">:</span>
      <div class="time-unit">
        <div class="time-num">${pad(h)}</div>
        <div class="time-label">ساعة</div>
      </div>
      <span class="timer-sep" aria-hidden="true">:</span>
      <div class="time-unit">
        <div class="time-num">${pad(m)}</div>
        <div class="time-label">دقيقة</div>
      </div>
      <span class="timer-sep" aria-hidden="true">:</span>
      <div class="time-unit">
        <div class="time-num">${pad(s)}</div>
        <div class="time-label">ثانية</div>
      </div>
    `;
  }

  update();
  setInterval(update, 1000);
}

// 📅 Change dates here if needed
makeTimer(new Date('2026-06-21T09:00:00'), 'timer1');
makeTimer(new Date('2026-07-16T09:00:00'), 'timer2');

// ── Bible Verses ─────────────────────────
const VERSES = [
  { text: "أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ.", ref: "يوحنا 14:6" },
  { text: "لأَنِّي أَعْرِفُ الأَفْكَارَ الَّتِي أَنَا مُفَكِّرٌ بِهَا عَنْكُمْ، يَقُولُ الرَّبُّ، أَفْكَارَ سَلاَمٍ لاَ شَرٍّ.", ref: "إرميا 29:11" },
  { text: "الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.", ref: "مزمور 23:1" },
  { text: "كُلَّ شَيْءٍ أَسْتَطِيعُهُ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي.", ref: "فيلبي 4:13" },
  { text: "لاَ تَخَفْ لأَنِّي مَعَكَ، لاَ تَتَلَفَّتْ لأَنِّي أَنَا إِلهُكَ.", ref: "إشعياء 41:10" },
  { text: "اَلرَّبُّ نُورِي وَخَلاَصِي، مِمَّنْ أَخَافُ؟", ref: "مزمور 27:1" },
  { text: "ثِقُوا بِالرَّبِّ مِنْ كُلِّ قَلْبِكُمْ، وَلاَ تَتَّكِلُوا عَلَى فَهْمِكُمُ.", ref: "أمثال 3:5" },
  { text: "اطْرَحْ عَلَى الرَّبِّ هَمَّكَ فَهُوَ يَعُولُكَ.", ref: "مزمور 55:22" },
  { text: "سَلاَمِي أُعْطِيكُمْ، لاَ كَمَا يُعْطِي الْعَالَمُ أُعْطِيكُمْ.", ref: "يوحنا 14:27" },
  { text: "اَلْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ، الْمَحَبَّةُ لاَ تَحْسُدُ.", ref: "1 كورنثوس 13:4" },
  { text: "فَرَحُوا لأَنَّهُمْ سَكَتُوا، فَهَدَاهُمْ إِلَى مَرْفَإِ مُشْتَهَاهُمْ.", ref: "مزمور 107:30" },
  { text: "ابْتَهِجُوا فِي الرَّبِّ دَائِمًا. وَأَقُولُ أَيْضًا ابْتَهِجُوا.", ref: "فيلبي 4:4" },
  { text: "هَذَا هُوَ يَوْمُ الرَّبِّ قَدْ صَنَعَهُ، نَبْتَهِجُ وَنَفْرَحُ فِيهِ.", ref: "مزمور 118:24" },
  { text: "وَأَنَا مَعَكُمْ كُلَّ الأَيَّامِ إِلَى انْقِضَاءِ الدَّهْرِ.", ref: "متى 28:20" },
  { text: "لأَنَّهُ بِي تَكْثُرُ أَيَّامُكَ، وَتُزَادُ لَكَ سِنُو الْحَيَاةِ.", ref: "أمثال 9:11" },
  { text: "طُوبَى لِلأَنْقِيَاءِ الْقَلْبِ لأَنَّهُمْ يُعَايِنُونَ اللهَ.", ref: "متى 5:8" },
  { text: "أُحِبُّكُمْ بِمَحَبَّةٍ أَبَدِيَّةٍ، مِنْ أَجْلِ ذلِكَ أَدَمْتُ لَكَ الإِحْسَانَ.", ref: "إرميا 31:3" },
  { text: "اَلرَّبُّ قَوَّتِي وَتَرْنِيمَتِي وَقَدْ صَارَ خَلاَصًا لِي.", ref: "خروج 15:2" },
  { text: "صَلُّوا بِلاَ انْقِطَاعٍ، اشْكُرُوا فِي كُلِّ شَيْءٍ.", ref: "1 تسالونيكي 5:17-18" },
  { text: "فَأَمَّا الَّذِينَ يَنْتَظِرُونَ الرَّبَّ فَيَتَجَدَّدُ قُوَّتُهُمْ.", ref: "إشعياء 40:31" },
  { text: "لأَنَّ اللهَ لَمْ يُعْطِنَا رُوحَ الْفَشَلِ، بَلْ رُوحَ الْقُوَّةِ وَالْمَحَبَّةِ.", ref: "2 تيموثاوس 1:7" },
  { text: "هَذَا هُوَ عَمَلُ اللهِ أَنْ تُؤْمِنُوا بِالَّذِي أَرْسَلَهُ.", ref: "يوحنا 6:29" },
  { text: "لأَنَّ اللهَ أَحَبَّ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ الْوَحِيدَ.", ref: "يوحنا 3:16" },
  { text: "اَلنِّعْمَةُ وَالسَّلاَمُ يَتَكَاثَرَانِ لَكُمْ بِمَعْرِفَةِ اللهِ.", ref: "2 بطرس 1:2" },
  { text: "الرَّبُّ حَافِظُكَ، الرَّبُّ ظِلُّكَ عَلَى يَدِكَ الْيُمْنَى.", ref: "مزمور 121:5" },
  { text: "وَاللهُ قَادِرٌ أَنْ يَجْعَلَ كُلَّ نِعْمَةٍ تَزِيدُ لَكُمْ.", ref: "2 كورنثوس 9:8" },
  { text: "يُعَلِّمُ الْمُتَوَاضِعِينَ طَرِيقَهُ، وَيَدُلُّ الْمُتَوَاضِعِينَ عَلَى حَقِّهِ.", ref: "مزمور 25:9" },
  { text: "اَللهُ هُوَ الَّذِي يُعْطِينَا الْغَلَبَةَ بِرَبِّنَا يَسُوعَ الْمَسِيحِ.", ref: "1 كورنثوس 15:57" },
  { text: "فَرَحٌ كَامِلٌ اعْتَبِرُوهُ حِينَ تَقَعُونَ فِي تَجَارِبَ مُتَنَوِّعَةٍ.", ref: "يعقوب 1:2" },
  { text: "اُطْلُبُوا أَوَّلاً مَلَكُوتَ اللهِ وَبِرَّهُ وَهَذِهِ كُلُّهَا تُزَادُ لَكُمْ.", ref: "متى 6:33" },
];

// Day-of-year keeps the verse consistent all day long
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const verse = VERSES[dayOfYear % VERSES.length];

document.getElementById('verseText').textContent = `"${verse.text}"`;
document.getElementById('verseRef').textContent  = verse.ref;

// ── Love Messages ─────────────────────────
const LOVE_MSGS = [
  `يا <span class="highlight">Karen</span> 💗<br>انتِ مش بس حبيبتي، انتِ إلهامي وسبب ابتسامتي كل يوم. ربنا خلقك بكل جمال ونور، وأنا شاكر كتير إني لاقيتك في حياتي. مستنياكِ بعد الامتحانات وهنعوض كل تعب.`,
  `يا نجمتي الوضيانة 🌟<br>عارف إن الدراسة تعبانة، بس انتِ أقوى من أي امتحان. الله معاكِ في كل لحظة، وأنا قلبي معاكِ في كل سؤال. هتعدي وهتبهريني زي ما بتعملي دايماً.`,
  `<span class="highlight">Karen</span> الحلوة 🌸<br>كل ما بفكر فيكِ قلبي بيدفا. انتِ مش بس بتذاكري، انتِ بتشتغلي على مستقبلك الجميل. وأنا هنا، بحبك وبدعيلك في كل ثانية.`,
  `لو الدنيا ضيقت عليكِ 🤍<br>فكري إن في حد بيحبك بجنون وبيتمنى يكون جنبك. الامتحانات هتعدي زي سحابة، وبعدها سما صافية وشمس ومزيكا وأنا وانتِ.`,
  `يا <span class="highlight">Karen</span> يا ستي 💐<br>حتى لو زهقتِ من المذاكرة، تعالي اتخيلي وقفة التخرج وأنا بشتري لك أكبر باقة زهور في الدنيا. ده الوقت هييجي بإذن الله.`,
  `صباح النور يا قمري ☀️<br>عايز تعرفي إيه أجمل حاجة في يومي؟ إنك موجودة في حياتي. امتحانك هيكون تمام، أنا واثق فيكِ أكتر من أي حد تاني.`,
  `يا حبيبتي الذكية الجميلة 🎓<br>كل سطر بتذاكريه بنيلة على مستقبلك. مش هتعدي بس، هتتفوقي. لأن إنتِ Karen، وده بيقول كل حاجة.`,
];

document.getElementById('loveMsg').innerHTML = LOVE_MSGS[dayOfYear % LOVE_MSGS.length];

// ── Daily Gifts ───────────────────────────
const GIFTS = [
{ emoji: '🍫', name: 'كيندر بوينو' },
{ emoji: '🍓', name: 'عصير فراولة' },
{ emoji: '🍪', name: 'كوكيز شوكولاتة' },
{ emoji: '🌹', name: 'ورد' },
{ emoji: '🍫', name: 'سنكرز' },
{ emoji: '🥐', name: 'مولتو شوكولاتة' },
{ emoji: '🍿', name: 'فشار' },
{ emoji: '🍫', name: 'كيت كات' },
{ emoji: '🍮', name: 'دانيت شوكولاتة' },
{ emoji: '🍩', name: 'دونات' },
{ emoji: '🥭', name: 'عصير مانجو' },
{ emoji: '🍫', name: 'مارس' },
{ emoji: '🥔', name: 'شيبسي ملح' },
{ emoji: '🍰', name: 'تشيز كيك' },
{ emoji: '🍫', name: 'هوهوز' },
{ emoji: '🍓', name: 'زبادي فراولة' },
{ emoji: '🍬', name: 'هاربو' },
{ emoji: '🍫', name: 'جالاكسي' },
{ emoji: '🧁', name: 'كب كيك' },
{ emoji: '🥤', name: 'عصير شوكولاتة' },
{ emoji: '🍫', name: 'توكس' },
{ emoji: '🌹', name: 'ورد' },
{ emoji: '🍑', name: 'زبادي خوخ' },
{ emoji: '🍫', name: 'ديري ميلك' },
{ emoji: '🍭', name: 'مصاصة' },
{ emoji: '🧀', name: 'شيبسي جبنة' },
{ emoji: '🍫', name: 'باونتي' },
{ emoji: '🥛', name: 'لبن شوكولاتة' },
{ emoji: '🍡', name: 'مارشميلو' },
{ emoji: '☕', name: 'نسكافيه' },
{ emoji: '🍫', name: 'توفي في' },
{ emoji: '🌶️', name: 'شيبسي حار' },
{ emoji: '🍰', name: 'جاتوه شوكولاتة' },
{ emoji: '🧃', name: 'عصير كوكتيل' },
{ emoji: '🍫', name: 'كيندر كاردز' },
{ emoji: '🍎', name: 'عصير تفاح' },
{ emoji: '🍫', name: 'كادبوري' },
{ emoji: '🍪', name: 'لوتس بسكويت' }
];


const gift = GIFTS[dayOfYear % GIFTS.length];
document.getElementById('giftEmoji').textContent = gift.emoji;
document.getElementById('giftName').textContent  = gift.name;
document.getElementById('giftDesc').textContent  = gift.desc;

// ── Reveal Gift ───────────────────────────
function revealGift() {
  const reveal = document.getElementById('giftReveal');
  if (reveal.classList.contains('show')) return; // already revealed
  reveal.classList.add('show');
  launchConfetti();
}

function launchConfetti() {
  const colors = ['#e8a0b0','#c9687e','#f7dde5','#ffd6e0','#ffb3c6','#ff85a1','#ffffff'];
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.left       = (15 + Math.random() * 70) + 'vw';
      c.style.top        = '65vh';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      const size         = (6 + Math.random() * 9) + 'px';
      c.style.width      = size;
      c.style.height     = size;
      c.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 2000);
    }, i * 45);
  }
}

// Expose to HTML onclick
window.revealGift = revealGift;
