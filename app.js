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
{ text: "لاَ تَخَفْ لأَنِّي مَعَكَ، لاَ تَتَلَفَّتْ لأَنِّي أَنَا إِلهُكَ.", ref: "إشعياء 41:10" },
{ text: "كُلَّ شَيْءٍ أَسْتَطِيعُهُ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي.", ref: "فيلبي 4:13" },
{ text: "فَأَمَّا الَّذِينَ يَنْتَظِرُونَ الرَّبَّ فَيَتَجَدَّدُ قُوَّتُهُمْ.", ref: "إشعياء 40:31" },
{ text: "ثِقُوا بِالرَّبِّ مِنْ كُلِّ قَلْبِكُمْ.", ref: "أمثال 3:5" },
{ text: "لأَنَّ اللهَ لَمْ يُعْطِنَا رُوحَ الْفَشَلِ، بَلْ رُوحَ الْقُوَّةِ.", ref: "2 تيموثاوس 1:7" },
{ text: "اَلرَّبُّ نُورِي وَخَلاَصِي، مِمَّنْ أَخَافُ؟", ref: "مزمور 27:1" },
{ text: "اطْرَحْ عَلَى الرَّبِّ هَمَّكَ فَهُوَ يَعُولُكَ.", ref: "مزمور 55:22" },
{ text: "سَلاَمِي أُعْطِيكُمْ.", ref: "يوحنا 14:27" },
{ text: "وَأَنَا مَعَكُمْ كُلَّ الأَيَّامِ.", ref: "متى 28:20" },
{ text: "اُطْلُبُوا أَوَّلاً مَلَكُوتَ اللهِ.", ref: "متى 6:33" },
{ text: "أَفْكَارَ سَلاَمٍ لاَ شَرٍّ.", ref: "إرميا 29:11" },
{ text: "الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.", ref: "مزمور 23:1" },
{ text: "اَلرَّبُّ قَوَّتِي وَتَرْنِيمَتِي.", ref: "خروج 15:2" },
{ text: "فِي يَوْمِ خَوْفِي أَنَا عَلَيْكَ أَتَّكِلُ.", ref: "مزمور 56:3" },
{ text: "تَشَدَّدُوا وَتَشَجَّعُوا.", ref: "تثنية 31:6" },
{ text: "اَللهُ لَنَا مَلْجَأٌ وَقُوَّةٌ.", ref: "مزمور 46:1" },
{ text: "اَلرَّبُّ يُحَارِبُ عَنْكُمْ.", ref: "خروج 14:14" },
{ text: "ابْتَهِجُوا فِي الرَّبِّ دَائِمًا.", ref: "فيلبي 4:4" },
{ text: "طُوبَى لِلإِنْسَانِ الَّذِي يَتَّكِلُ عَلَى الرَّبِّ.", ref: "إرميا 17:7" },
{ text: "لاَ يُهْمِلُكَ وَلاَ يَتْرُكُكَ.", ref: "تثنية 31:8" },
{ text: "الرَّبُّ حَافِظُكَ.", ref: "مزمور 121:5" },
{ text: "الرَّبُّ يُثَبِّتُ خُطُوَاتِ الإِنْسَانِ.", ref: "مزمور 37:23" },
{ text: "مَعَ اللهِ نَصْنَعُ بِبَأْسٍ.", ref: "مزمور 60:12" },
{ text: "اَلرَّبُّ صَخْرَتِي وَحِصْنِي.", ref: "مزمور 18:2" },
{ text: "اِسْأَلُوا تُعْطَوْا.", ref: "متى 7:7" },
{ text: "لِلرَّبِّ شَيْءٌ غَيْرُ مُسْتَطَاعٍ؟", ref: "تكوين 18:14" },
{ text: "كُنْ أَمِينًا إِلَى الْمَوْتِ.", ref: "رؤيا 2:10" },
{ text: "الرَّبُّ قَرِيبٌ مِنْ كُلِّ الَّذِينَ يَدْعُونَهُ.", ref: "مزمور 145:18" },
{ text: "تَوَكَّلْ عَلَى الرَّبِّ وَافْعَلِ الْخَيْرَ.", ref: "مزمور 37:3" },
{ text: "الرَّبُّ يَفْتَدِي نُفُوسَ عَبِيدِهِ.", ref: "مزمور 34:22" },
{ text: "اَلْمَحَبَّةُ لاَ تَسْقُطُ أَبَدًا.", ref: "1 كورنثوس 13:8" },
{ text: "اَلرَّبُّ نُورِي.", ref: "مزمور 27:1" },
{ text: "صَلُّوا بِلاَ انْقِطَاعٍ.", ref: "1 تسالونيكي 5:17" },
{ text: "اشْكُرُوا فِي كُلِّ شَيْءٍ.", ref: "1 تسالونيكي 5:18" },
{ text: "اَللهُ قَادِرٌ أَنْ يَجْعَلَ كُلَّ نِعْمَةٍ تَزِيدُ لَكُمْ.", ref: "2 كورنثوس 9:8" },
{ text: "الرَّبُّ مَعَكَ أَيْنَمَا ذَهَبْتَ.", ref: "يشوع 1:9" },
{ text: "تَشَدَّدْ وَتَشَجَّعْ.", ref: "يشوع 1:9" },
{ text: "اَلسَّاعُونَ بِالدُّمُوعِ يَحْصُدُونَ بِالابْتِهَاجِ.", ref: "مزمور 126:5" }
];


// Day-of-year keeps the verse consistent all day long
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const verse = VERSES[dayOfYear % VERSES.length];

document.getElementById('verseText').textContent = `"${verse.text}"`;
document.getElementById('verseRef').textContent  = verse.ref;

// ── Love Messages ─────────────────────────
const LOVE_MSGS = [
`Karen 🌸<br>أنا مؤمن بقدراتك أكتر ما تتخيلي، وعارف إنك هتعملي اللي عليكي وزيادة.`,

`يا حبيبتي 🤍<br>عارف إن الأيام دي صعبة شوية، بس أنا متأكد إنك قدها. خديها خطوة خطوة ومتقلقيش.`,

`يا كارن ✨<br>متخافيش من اللي جاي، ركزي في اللي قدامك دلوقتي وبس.`,

`حبيبتي 💕<br>كل تعب دلوقتي هيبقى له معنى بعدين، وهتفتكري الفترة دي وتفتخري بنفسك.`,

`Karen 📖<br>أنا عارف إنك بتقلقي كتير، بس صدقيني القلق عمره ما كان دليل إنك مش جاهزة.`,

`يا روحي 🌷<br>شدي حيلك شوية كمان، الأيام دي هتتحول قريب لذكريات وهتضحكي عليها.`,

`حبيبتي 🤍<br>مهما حصل، أنا فخور بيكي لأنك بتحاولي وبتتعبي، ودي أهم حاجة.`,

`Karen 💗<br>كل يوم بيعدي بيقربك من النهاية، فكملي ومتوقفيش دلوقتي.`,

`يا كارن 📚<br>أنا بحب فيكي إنك مبتستسلميش بسهولة، ودي لوحدها ميزة هتخليكي تنجحي في أي حاجة.`,

`حبيبتي 🌸<br>متقارنيش نفسك بحد. ركزي في طريقك أنتِ بس.`,

`Karen 🤍<br>وقت الامتحان اقري السؤال بهدوء وخدي وقتك. أنتِ فاهمة أكتر ما التوتر بيحاول يقنعك.`,

`يا جميلة ✨<br>خدي نفس، رتبي يومك، وابدئي. أصعب حاجة هي البداية.`,

`حبيبتي 💗<br>أنا مش مستني منك غير إنك تعملي اللي تقدري عليه. النتيجة بتاعة ربنا.`,

`Karen 🌷<br>مهما حسيتِ إن المنهج كبير، افتكري إنك خلصتي حاجات أصعب قبل كده.`,

`يا روحي 🤍<br>لو يوم كان صعب عليكي أو مذاكرتيش زي ما كنتِ عايزة، عادي. قومي اليوم اللي بعده وكملي.`,

`حبيبتي 📚<br>متنسيش ترتاحي وتشربي مية وتأكلي كويس. المذاكرة مهمة، بس أنتِ أهم.`,

`Karen 🌸<br>كل مرة بتفتحي الكتاب رغم التعب دي لوحدها حاجة تستحق التقدير.`,

`يا كارن 💕<br>شدي حيلك شوية، الأيام دي هتعدي أسرع ما تتخيلي.`,

`حبيبتي ✨<br>متفكريش في النتيجة دلوقتي، فكري في الخطوة اللي في إيدك النهارده وبس.`,

`Karen 🤍<br>أنا واثق فيكي بجد، ومش كلام تشجيع وخلاص.`,

`يا روحي 💗<br>خلي عندك ثقة إن ربنا مدبر كل حاجة، وإنتِ اعملي اللي عليكي.`,

`حبيبتي 🌷<br>خليكي هادية وواثقة، لأن التوتر بيخوف أكتر من الامتحان نفسه.`,

`Karen 📖<br>كل ما تتعبي افتكري ليه بدأتي من الأول، وافتكري قد إيه أنتِ قريبة من هدفك.`,

`يا كارن 🤍<br>مفيش حد كامل، ومفيش حد بيحل كل حاجة صح. اعملي أفضل ما عندك وخلاص.`,

`حبيبتي 💕<br>ربنا شايف تعبك وسهرك ومجهودك، ومفيش حاجة من ده بتضيع.`,

`Karen 🌸<br>أنا معاكي بدعوة حلوة وكلمة تشجيع، والباقي عليكِ وعلى شطارتك.`,

`يا روحي ✨<br>كل يوم بتكمليه في المذاكرة هو إنجاز لوحده.`,

`حبيبتي 🤍<br>مهما كان الامتحان صعب، هو مجرد امتحان. إنما أنتِ أكبر من أي ورقة وأسئلة.`,

`Karen 💗<br>أنا بحب أشوفك بتحققي اللي نفسك فيه، وعشان كده بشجعك تكملي للنهاية.`,

`يا كارن 🌷<br>عارف إنك نفسك تخلصي الفترة دي، وهتخلص فعلًا.`,

`حبيبتي 📚<br>كل صفحة بتخلصيها بتقربك من اللي نفسك فيه.`,

`Karen 🤍<br>لا تضغطي نفسك زيادة، اعملي اللي عليكي والباقي سيبيه على ربنا.`,

`يا روحي 💕<br>أنا مبسوط بيكي سواء كان يومك حلو أو وحش. المهم متوقفيش.`,

`حبيبتي 🌸<br>ربنا يريح قلبك ويطمنك ويكتبلك الخير في كل امتحان.`,

`Karen ✨<br>أنا عارف قد إيه أنتِ بتتعبي وبتحاولي، وعشان كده متأكد إن ربنا هيكرمك.`,

`يا كارن 🤍<br>كملي ومتوقفيش، قربتي توصلي للنهاية.`,

`حبيبتي 💗<br>أنا واثق إنك هتفرحي بتعبك قريب جدًا.`,

`Karen 🌷<br>يلا كملي، وربنا يكرمك ويفرح قلبك على قد تعبك بالظبط.`
];

document.getElementById('loveMsg').innerHTML = LOVE_MSGS[dayOfYear % LOVE_MSGS.length];

// ── Daily Gifts ───────────────────────────
const GIFTS = [
{ emoji: '🍫', name: 'كيندر ' },
{ emoji: '🍓', name: 'عصير فراولة' },
{ emoji: '🍪', name: 'كوكيز شوكولاتة' },
{ emoji: '🌹', name: 'ورد' },
{ emoji: '🍫', name: 'سنكرز' },
{ emoji: '🥐', name: 'مولتو شوكولاتة' },
{ emoji: '🍿', name: 'فشار' },
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
{ emoji: '🍑', name: 'زبادي خوخ' },
{ emoji: '🍫', name: 'ديري ميلك' },
{ emoji: '🍭', name: 'مصاصة' },
{ emoji: '🧀', name: 'شيبسي جبنة' },
{ emoji: '🍫', name: 'باونتي' },
{ emoji: '🥛', name: 'ميكس شوكلاته' },
{ emoji: '🍡', name: 'مارشميلو' },
{ emoji: '☕', name: 'نسكافيه' },
{ emoji: '🍫', name: 'شوكلاته بابلي' },
{ emoji: '🌶️', name: 'شيبسي شطه ولمون' },
{ emoji: '🍰', name: 'كيكا' },
{ emoji: '🧃', name: 'عصير كوكتيل' },
{ emoji: '🍫', name: 'كيندر بينو' },
{ emoji: '🍎', name: 'عصير تفاح' },
{ emoji: '🍫', name: 'كادبوري' },
{ emoji: '🍪', name: 'كوكيز' }
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
