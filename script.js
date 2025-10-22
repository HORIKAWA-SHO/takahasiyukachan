(function(){
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  document.getElementById('todayText').textContent = `${y}/${String(m).padStart(2,'0')}/${String(d).padStart(2,'0')}`;
  document.getElementById('year').textContent = String(y);
  // 背景画像（gazou/ からランダム）
  try {
    const defaultBgList = [
      'gazou/12430550.jpeg',
      'gazou/12430552.jpeg',
      'gazou/191699df49d8a4b537e1e83528317c116565659f173021_49875884_35290c82203f711c66c6c7c6eefb9796cca03378.webp',
      'gazou/5e5c67ed8c8a2_91c6c4fae14ee6111648e265fab7d36a.webp',
      'gazou/777a18f7b8fccdbd4434f4b2fe9ad4466565658fd3b6d3_62929204_9457c107f9f36939c1f318cce3f77e4fe11c2992.webp',
      'gazou/SsILLzv9aD3629RefnpchMTpW6xwSLqTEYy3KwRrxafncAUPiIbxiIr7esNoI1Gj.jpeg',
      'gazou/ab604c3bc8ef2c356db538dd92c9108d656565981c0732_89785170_b46bca7fbe155535aea8ea0be44b8be4d4b85eed.webp',
      'gazou/bab4339763f187de0c6936cc66099e5265656536cb0ca4_79663376_9ebee9d579a94dfc37ebf2a706b4643bd34ef623.webp',
      'gazou/bdfae03ea37763169bc30cbcc3671d026565653e944033_09696311_b5e80a9f0816165eb286983568a2142a7c02f658.webp',
      'gazou/c26c4_1756_5ab54efdcca26c9bcf12b115437aa6cf.jpg',
      'gazou/cc99fc0dce58c6d71a7cccec7d66b7ae65656551763999_97468398_13df761bdcd1a3fa5fd73bdc602f5b9fdfa6bcb1.webp',
      'gazou/main_01_M.jpg',
      'gazou/small.jpeg'
    ];
    const list = Array.isArray(window.BG_IMAGES) && window.BG_IMAGES.length > 0 ? window.BG_IMAGES : defaultBgList;
    const pick = list[Math.floor(Math.random()*list.length)];
    const bg = document.getElementById('siteBg');
    if (bg) {
      bg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('./${pick}')`;
    }
  } catch(e) { /* noop */ }

  // 日替わりインデックス（ローカル日付基準）
  const dayIndex = Math.floor(new Date(y, now.getMonth(), d).getTime() / 86400000);

  // ハイキュー!! 名台詞（出典の要約・意訳を含む）
  const quotes = [
    '「できるできないじゃない、やるんだ。」ー 日向翔陽',
    '「“次”があると思うな。今を取りにいけ。」ー 影山飛雄',
    '「強い方が勝つんじゃない。勝った方が強いんだ。」ー 及川徹',
    '「小さなことを積み重ねる。それがとんでもないところへ行くただ一つの道。」ー 烏養繋心',
    '「限界だって？まだ先にある。」ー 田中龍之介',
    '「才能に溺れるな、努力に溺れろ。」ー 月島蛍（意訳）',
    '「“今この瞬間”の自分を出し切れ。」ー 西谷夕',
    '「“負け”は成長の途中にある。」ー 澤村大地',
    '「怖いのは当たり前。だからこそ踏み出す。」ー 東峰旭',
    '「迷ったら、前へ。」ー 北信介',
    '「挑戦者でいろ。」ー 宮侑',
    '「今この一球で、勝負を決める。」ー 影山飛雄',
    '「昨日の自分を超えていけ。」ー 日向翔陽',
    '「努力は裏切らない、サボりはバレる。」ー 西谷夕',
    '「強さは積み重ねだ。」ー 澤村大地',
    '「勝つまでやる、それだけ。」ー 東峰旭',
    '「負けたくない理由が、俺を動かす。」ー 月島蛍',
    '「“ここ”で決める。」ー 及川徹',
    '「チームで強くなる。」ー 菅原孝支',
    '「弱気はコートに置いていけ。」ー 田中龍之介',
    '「悔しさは、明日の燃料。」ー 西谷夕',
    '「一歩踏み出す勇気が道を作る。」ー 烏養繋心',
    '「目の前の一本、全力で。」ー 北信介',
    '「才能は引き出すものだ。」ー 武田一鉄',
    '「負けを知って、強くなる。」ー 青根高伸',
    '「壁は、越えるためにある。」ー 黒尾鉄朗',
    '「泥臭さも、立派な武器。」ー 木兎光太郎',
    '「しぶとく、粘れ。」ー 西谷夕',
    '「自分で限界を決めるな。」ー 影山飛雄',
    '「小さな前進を笑うな。」ー 日向翔陽',
    // 主要メンバー多め（重みづけのため追加）
    '「ジャンプは、俺の武器だ。」ー 日向翔陽',
    '「最強の囮、見せてやる。」ー 日向翔陽',
    '「俺がトスを上げる。お前は打て。」ー 影山飛雄',
    '「正確さでねじ伏せる。」ー 影山飛雄',
    '「守り切る、最後まで。」ー 西谷夕',
    '「一球でも多く返す。」ー 西谷夕',
    '「王様でも、コートでは一人。」ー 及川徹',
    '「勝つのは俺。」ー 及川徹',
    '「読みで止める。」ー 黒尾鉄朗',
    '「頭脳で勝つ。」ー 黒尾鉄朗',
    '「落ちる時は派手にいこうぜ。」ー 木兎光太郎',
    '「打ち切るまで打つ。」ー 木兎光太郎',
    // NARUTO
    '「諦めねぇってばよ！」ー うずまきナルト',
    '「仲間を大切にできないやつは、それ以上のクズだ。」ー うちはカカシ',
    '「自分を信じないやつなんかに、努力する価値はない。」ー マイト・ガイ',
    '「許せサスケ…これで最後だ。」ー うちはイタチ',
    '「弱さを知ることが強さだ。」ー はたけカカシ',
    '「運命なんて、ぶっ壊す。」ー うずまきナルト',
    '「オレには帰るべき場所がある。」ー うちはサスケ',
    '「面倒くせえ…でもやる時はやる。」ー 奈良シカマル'
  ];

  // 夕食データ（曜日別メニュー：2週間ローテ A/B）
  const dinnersA = [
    { title: '【月】雑穀ごはん + 鶏むね照り焼き + 2副菜', kcal: 480, carb: '雑穀ごはん 100g（約150kcal）', protein: '鶏むね照り焼き（鶏むね100g・しょうゆ・みりん・はちみつ少量）約180kcal', sides: ['キャベツとツナの塩昆布あえ（ツナ水煮・キャベツ・ごま油少量）約80kcal','ブロッコリーと卵のマヨ少なめサラダ 約70kcal'], note: '合計目安：約480kcal' },
    { title: '【火】玄米ごはん + 鮭の塩焼き + 2副菜', kcal: 460, carb: '玄米ごはん 100g（約150kcal）', protein: '鮭の塩焼き（約120g）約180kcal', sides: ['豆腐とわかめの味噌汁 約60kcal','トマトとオニオンスライスのサラダ（オリーブオイル少量）約70kcal'], note: '合計目安：約460kcal' },
    { title: '【水】十割そば + 豚しゃぶ + 2副菜', kcal: 490, carb: '十割そば（乾麺60g）約200kcal', protein: '豚しゃぶ（豚もも80g）＋ポン酢おろし 約160kcal', sides: ['きゅうりとわかめの酢の物 約50kcal','ほうれん草の胡麻和え 約80kcal'], note: '合計目安：約490kcal' },
    { title: '【木】白米 + サバ缶トマト煮 + 副菜', kcal: 500, carb: '白米 100g（約150kcal）', protein: 'サバ缶トマト煮（サバ缶水煮半分＋トマト缶＋にんにく＋オリーブオイル少量）約230kcal', sides: ['蒸しブロッコリー＋温泉卵 約120kcal'], note: '合計目安：約500kcal' },
    { title: '【金】雑穀ごはん + 鶏団子スープ + 2副菜', kcal: 490, carb: '雑穀ごはん 100g（約150kcal）', protein: '鶏団子スープ（鶏むねミンチ100g＋野菜たっぷり）約200kcal', sides: ['ひじきと大豆の煮物 約80kcal','冷ややっこ 約60kcal'], note: '合計目安：約490kcal' },
    { title: '【土】さつまいも + 目玉焼き＋ベーコン + 2副菜', kcal: 480, carb: 'さつまいも 100g（約130kcal）', protein: '目玉焼き＋ベーコン1枚 約180kcal', sides: ['野菜スープ（キャベツ・にんじん・玉ねぎ・コンソメ）約80kcal','アボカドと豆腐のサラダ 約90kcal'], note: '合計目安：約480kcal' },
    { title: '【日】もち麦ごはん + 鶏むね甘酢あん + 副菜', kcal: 470, carb: 'もち麦ごはん 100g（約150kcal）', protein: '鶏むねと野菜の甘酢あん（鶏むね100g・ピーマン・にんじん・玉ねぎ）約220kcal', sides: ['小松菜と油揚げの炒め煮 約100kcal'], note: '合計目安：約470kcal' }
  ];

  const dinnersB = [
    { title: '【月】白米 + 鮭の塩焼き + 2副菜', kcal: 490, carb: '白米 100g（約150kcal）', protein: '鮭の塩焼き（約120g）約180kcal', sides: ['豆腐とわかめの味噌汁 約60kcal','きゅうりとわかめの酢の物 約90kcal'], note: '合計目安：約490kcal' },
    { title: '【火】十割そば + 鶏むね冷しゃぶ + 2副菜', kcal: 500, carb: '十割そば（乾麺60g）約200kcal', protein: '鶏むね冷しゃぶ（100g）約170kcal', sides: ['トマトとオニオンスライスのサラダ 約70kcal','ほうれん草の胡麻和え 約60kcal'], note: '合計目安：約500kcal' },
    { title: '【水】雑穀ごはん + サバ水煮 + 副菜', kcal: 480, carb: '雑穀ごはん 100g（約150kcal）', protein: 'サバ水煮（1/2缶）約160kcal', sides: ['キャベツとツナの塩昆布あえ 約80kcal','味噌汁（薄め）約40kcal'], note: '合計目安：約480kcal' },
    { title: '【木】さつまいも + 豆腐ステーキ + 副菜', kcal: 470, carb: 'さつまいも 150g（約195kcal）', protein: '豆腐ステーキ（木綿150g）約120kcal', sides: ['ブロッコリー＋温泉卵 約120kcal'], note: '合計目安：約470kcal' },
    { title: '【金】白米 + 鶏団子スープ + 2副菜', kcal: 500, carb: '白米 120g（約180kcal）', protein: '鶏団子スープ（鶏むねミンチ100g）約200kcal', sides: ['ひじきと大豆の煮物 約80kcal','冷ややっこ 約60kcal'], note: '合計目安：約500kcal' },
    { title: '【土】十割そば + 納豆 + 副菜', kcal: 470, carb: '十割そば（乾麺50g）約170kcal', protein: '納豆 1パック 約100kcal', sides: ['小松菜おひたし 約40kcal','トマト 約60kcal'], note: '合計目安：約470kcal' },
    { title: '【日】雑穀ごはん + 鶏むね甘酢あん + 副菜', kcal: 490, carb: '雑穀ごはん 120g（約180kcal）', protein: '鶏むねと野菜の甘酢あん 約220kcal', sides: ['きのこソテー（オイル極少）約70kcal'], note: '合計目安：約490kcal' }
  ];

  const exercises = [
    { title: '地獄の5分 HIITで全身引き締め', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=wfdRNIxn2ec' },
    { title: '地獄の7分 鬼のHIIT', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=ycPPGv4X-pg' },
    { title: '決定版! 17分HIIT', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=hxQZ8LLdPl0' },
    { title: '9分HIIT 本気で結果を出す', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=0YC3UIGZFXE' },
    { title: '上級者8分 減量末期HIIT', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=5yGVzRGDJQs' },
    { title: '地獄の8分 減量プロとHIIT', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=uaaA4rKjakU' },
    { title: '10分HIIT 短時間で全身引き締め', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=aUVkea-JelA' },
    { title: '本気の人専用 飛ばないHIIT', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=pJyq_CReq8g' },
    { title: 'マンションOK 10分全身燃焼', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=8mB3BHHz3h8' },
    { title: '完璧な15分運動 HIIT', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=Arv89BhZoJM' },
    { title: '15分 有酸素で効率よく燃焼', channel: 'Marina Takewaki', url: 'https://www.youtube.com/watch?v=hXyamPHNhkk' },

    { title: '本気で痩せるHIIT', channel: 'Hayashi Keisuke', url: 'https://www.youtube.com/watch?v=dgf0y3H0QMU' },
    { title: '地獄の4分 飛ばないHIIT', channel: 'Hayashi Keisuke', url: 'https://www.youtube.com/watch?v=UZJOLmMDqu8' },
    { title: '4分集中 とばない鬼HIIT', channel: 'Hayashi Keisuke', url: 'https://www.youtube.com/watch?v=tDzocZIl0yQ' },
    { title: '7.5分 全身追い込みHIIT', channel: 'Hayashi Keisuke', url: 'https://www.youtube.com/watch?v=cQsupVhKcDg' },
    { title: '毎日4分 脂肪燃焼HIIT', channel: 'Hayashi Keisuke', url: 'https://www.youtube.com/watch?v=Zyn7nIJ_ZdA' },
    { title: '中級者15分 飛ばない全身HIIT', channel: 'Hayashi Keisuke', url: 'https://www.youtube.com/watch?v=86SUbIbKYHk' },

    { title: '25分 初心者向け 全身HIIT（ノーリピート）', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=lH0p5oQvTDY' },
    { title: '20分 全身カーディオHIIT（ノーリピート）', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=M0uO8X3_tEA' },
    { title: 'Fit Class Live: Full Body HIIT', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=1cecZN8CA2M' },
    { title: '20分 FULL BODY HIIT（ダンベル可）', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=1TeYBhbURAw' },
    { title: '20分 立ちっぱなしHIIT（ノージャンプ）', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=af49HZUnMNE' },
    { title: '30分 FULL BODY HIIT（ウォームアップ/クールダウン付）', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=BwKKhqZWkEQ' },
    { title: '30分 重りありHIIT（ノージャンプ）', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=07c6wlJh89U' },
    { title: 'ローインパクト 全身HIIT（ノージャンプ）', channel: 'naddy fitness', url: 'https://www.youtube.com/watch?v=kTTP82Vhcww' }
  ];

  const quote = quotes[dayIndex % quotes.length];
  const jsWeekday = new Date(y, now.getMonth(), d).getDay(); // 0=Sun..6=Sat
  const dinnerIndex = (jsWeekday + 6) % 7; // Mon=0..Sun=6
  const startOfYear = new Date(y, 0, 1);
  const weekNumber = Math.floor((new Date(y, now.getMonth(), d) - startOfYear) / 604800000); // 7日単位
  const useB = (weekNumber % 2) === 1; // 偶数週:A, 奇数週:B
  const activeDinners = useB ? dinnersB : dinnersA;
  const dinner = activeDinners[dinnerIndex];
  const exercise = exercises[dayIndex % exercises.length];

  // 反映
  document.getElementById('quoteText').textContent = quote;

  document.getElementById('dinnerTitle').textContent = dinner.title;
  const ul = document.getElementById('dinnerItems');
  const items = [dinner.carb, dinner.protein, ...dinner.sides];
  ul.innerHTML = '';
  items.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    ul.appendChild(li);
  });
  document.getElementById('dinnerKcal').textContent = `概算 ${dinner.kcal}kcal（食材+調味料込み）`;
  document.getElementById('dinnerNote').textContent = dinner.note || '';
  // タンパク質の優先順位表示（① 魚/貝/大豆/鶏 を推奨）
  (function(){
    const priEl = document.getElementById('proteinPriority');
    const sugEl = document.getElementById('proteinSuggest');
    if (!priEl || !sugEl) return;
    const text = `${dinner.title || ''} ${dinner.protein || ''}`;
    const preferredKw = ['鮭','サバ','鯖','マグロ','ツナ','鰹','さんま','いわし','ホタテ','あさり','しじみ','貝','豆腐','納豆','大豆','厚揚げ','高野豆腐','鶏むね','ささみ','鶏胸','鶏肉'];
    const otherKw = ['豚','牛','ベーコン','ハム','ソーセージ','ラム','合いびき'];
    const hasPreferred = preferredKw.some(k => text.includes(k));
    const hasOther = otherKw.some(k => text.includes(k));
    if (hasPreferred) {
      priEl.innerHTML = '<span class="text-emerald-700 font-medium">タンパク質優先度: ①（魚/貝/大豆/鶏）</span>';
      sugEl.textContent = '';
    } else {
      priEl.innerHTML = '<span class="text-stone-700 font-medium">タンパク質優先度: ②（その他）</span>';
      const baseSuggest = '提案: サバ水煮/鮭/豆腐/納豆/鶏むね への置き換え（同量目安）を検討';
      if (hasOther && text.includes('豚')) {
        sugEl.textContent = '提案: 豚→鶏むね or ささみに置き換え（同量）/ ポン酢・おろしで軽く';
      } else if (hasOther && text.includes('牛')) {
        sugEl.textContent = '提案: 牛→鮭 or サバ水煮 or 豆腐ステーキへ置き換え（同量）';
      } else {
        sugEl.textContent = baseSuggest;
      }
    }
  })();
  (function(){
    const target = 500;
    const delta = target - (dinner.kcal || 0);
    const adjEl = document.getElementById('dinnerAdjust');
    if (!adjEl) return;
    const addOptions = [
      { label: 'ごはんを+20g', kcal: 30 },
      { label: '味噌汁（薄め）を追加', kcal: 40 },
      { label: '納豆を1/2パック追加', kcal: 50 },
      { label: 'ゆで卵を1個追加', kcal: 70 },
      { label: 'ミニトマトを+5個', kcal: 15 }
    ];
    const cutOptions = [
      { label: 'ごはんを-20g', kcal: -30 },
      { label: 'マヨ/ドレッシングを小さじ1減らす', kcal: -30 },
      { label: 'オイルを小さじ1減らす', kcal: -40 },
      { label: 'ベーコン/脂身を半量に', kcal: -40 }
    ];
    function bestCombo(options, need){
      let best = { sum: 0, picks: [] };
      const n = options.length;
      for (let mask=1; mask < (1<<n); mask++){
        let sum = 0; let picks=[];
        for (let i=0;i<n;i++) if (mask & (1<<i)){ sum += options[i].kcal; picks.push(options[i].label); }
        const cur = Math.abs(need - sum);
        const bestDiff = Math.abs(need - best.sum);
        if (best.picks.length===0 || cur < bestDiff || (cur===bestDiff && Math.abs(sum) < Math.abs(best.sum))){
          best = { sum, picks };
        }
      }
      return best;
    }
    if (delta > 0){
      const combo = bestCombo(addOptions, delta);
      const total = combo.sum;
      const approx = dinner.kcal + total;
      adjEl.textContent = combo.picks.length ? `${combo.picks.join(' + ')}（+${total}kcal）→ 約${approx}kcal` : '副菜の野菜量を少し増やす（+10〜30kcal）';
    } else if (delta < 0){
      const need = -delta;
      const combo = bestCombo(cutOptions, need);
      const total = combo.sum;
      const approx = dinner.kcal + total;
      adjEl.textContent = combo.picks.length ? `${combo.picks.join(' / ')}（${total}kcal）→ 約${approx}kcal` : '主食量を少し減らす（-20〜40kcal）';
    } else {
      adjEl.textContent = 'ちょうど約500kcalです。';
    }
  })();

  const a = document.getElementById('exerciseLink');
  a.href = exercise.url;
  a.setAttribute('aria-label', `今日のHIITおすすめ: ${exercise.title}（${exercise.channel}）`);
  const lbl = document.getElementById('exerciseLabel');
  if (lbl) {
    lbl.textContent = `今日のおすすめを開く｜${exercise.channel}: ${exercise.title}`;
  } else {
    a.title = `${exercise.channel}: ${exercise.title}`;
  }
  const chkDinner = document.getElementById('chkDinner');
  const chkExercise = document.getElementById('chkExercise');
  const streakEl = document.getElementById('streakDays');
  function fmtDate(dt){
    const yy = dt.getFullYear();
    const mm = String(dt.getMonth()+1).padStart(2,'0');
    const dd = String(dt.getDate()).padStart(2,'0');
    return `${yy}-${mm}-${dd}`;
  }
  const todayKey = fmtDate(new Date(y, now.getMonth(), d));
  function loadStore(){
    try { return JSON.parse(localStorage.getItem('diet_status')||'{}'); } catch(e){ return {}; }
  }
  function saveStore(obj){
    localStorage.setItem('diet_status', JSON.stringify(obj));
  }
  function getDayStatus(key){
    const store = loadStore();
    return store[key] || { dinner:false, exercise:false };
  }
  function setDayStatus(key, val){
    const store = loadStore();
    store[key] = val;
    saveStore(store);
  }
  const initStatus = getDayStatus(todayKey);
  if (chkDinner) chkDinner.checked = !!initStatus.dinner;
  if (chkExercise) chkExercise.checked = !!initStatus.exercise;
  function updateStreak(){
    let streak = 0;
    let cursor = new Date(y, now.getMonth(), d);
    while(true){
      const k = fmtDate(cursor);
      const st = getDayStatus(k);
      if (st && st.dinner && st.exercise) {
        streak += 1;
        cursor.setDate(cursor.getDate()-1);
      } else {
        break;
      }
    }
    if (streakEl) streakEl.textContent = String(streak);
  }
  updateStreak();
  // 週次サマリー（直近7日）
  function updateWeekly(){
    let both = 0, dOnly = 0, eOnly = 0, dDays = 0, eDays = 0;
    let cursor = new Date(y, now.getMonth(), d);
    for (let i=0; i<7; i++){
      const k = fmtDate(cursor);
      const st = getDayStatus(k);
      if (st) {
        if (st.dinner) dDays += 1;
        if (st.exercise) eDays += 1;
        if (st.dinner && st.exercise) both += 1; else if (st.dinner) dOnly += 1; else if (st.exercise) eOnly += 1;
      }
      cursor.setDate(cursor.getDate()-1);
    }
    // 両方
    const percent = Math.round((both/7)*100);
    const dash = `${percent} 100`;
    const arc = document.getElementById('weeklyChartProgress');
    const txt = document.getElementById('weeklyPercentText');
    const cnt = document.getElementById('weeklyAchievedDays');
    if (arc) arc.setAttribute('stroke-dasharray', dash);
    if (txt) txt.textContent = String(percent);
    if (cnt) cnt.textContent = String(both);
    // 食事のみ（達成日数と率=食事達成/7）
    const dPercent = Math.round((dDays/7)*100);
    const dDash = `${dPercent} 100`;
    const dArc = document.getElementById('weeklyChartDinnerProgress');
    const dTxt = document.getElementById('weeklyDinnerPercentText');
    const dCnt = document.getElementById('weeklyDinnerDays');
    if (dArc) dArc.setAttribute('stroke-dasharray', dDash);
    if (dTxt) dTxt.textContent = String(dPercent);
    if (dCnt) dCnt.textContent = String(dDays);
    // 運動のみ（達成日数と率=運動達成/7）
    const ePercent = Math.round((eDays/7)*100);
    const eDash = `${ePercent} 100`;
    const eArc = document.getElementById('weeklyChartExerciseProgress');
    const eTxt = document.getElementById('weeklyExercisePercentText');
    const eCnt = document.getElementById('weeklyExerciseDays');
    if (eArc) eArc.setAttribute('stroke-dasharray', eDash);
    if (eTxt) eTxt.textContent = String(ePercent);
    if (eCnt) eCnt.textContent = String(eDays);
  }
  updateWeekly();
  function onChange(){
    const current = getDayStatus(todayKey);
    const updated = { dinner: !!(chkDinner && chkDinner.checked), exercise: !!(chkExercise && chkExercise.checked) };
    setDayStatus(todayKey, Object.assign({}, current, updated));
    updateStreak();
    updateWeekly();
  }
  if (chkDinner) chkDinner.addEventListener('change', onChange);
  if (chkExercise) chkExercise.addEventListener('change', onChange);

  // 月間カレンダー描画
  function buildMonthCalendar(){
    const titleEl = document.getElementById('monthTitle');
    const grid = document.getElementById('monthGrid');
    if (!grid) return;
    const base = new Date(y, now.getMonth(), 1);
    const year = base.getFullYear();
    const month = base.getMonth();
    const last = new Date(year, month + 1, 0).getDate();
    const firstWeekday = new Date(year, month, 1).getDay();
    // 体重ログ
    let weightLog = {};
    try { weightLog = JSON.parse(localStorage.getItem('weight_log')||'{}'); } catch(e){ weightLog = {}; }
    if (titleEl) titleEl.textContent = `${year}/${String(month+1).padStart(2,'0')}`;
    grid.innerHTML = '';
    // プレースホルダ（前月分）
    for (let i=0; i<firstWeekday; i++){
      const ph = document.createElement('div');
      ph.className = 'h-9';
      grid.appendChild(ph);
    }
    for (let day=1; day<=last; day++){
      const cell = document.createElement('div');
      cell.className = 'flex flex-col items-center justify-center h-20 rounded border border-gray-100 bg-white';
      const dateStr = fmtDate(new Date(year, month, day));
      const st = getDayStatus(dateStr);
      const todayStr = fmtDate(new Date(y, now.getMonth(), d));
      const isFuture = new Date(year, month, day) > new Date(y, now.getMonth(), d);
      const dot = document.createElement('div');
      dot.className = 'w-6 h-6 rounded-full mt-1';
      let color = 'bg-gray-200';
      if (!isFuture) {
        if (st && st.dinner && st.exercise) color = 'bg-emerald-500';
        else if (st && st.dinner) color = 'bg-amber-500';
        else if (st && st.exercise) color = 'bg-sky-500';
        else color = 'bg-gray-300';
      } else {
        color = 'bg-gray-100';
      }
      dot.className = `w-6 h-6 rounded-full mt-1 ${color}`;
      const num = document.createElement('div');
      num.textContent = String(day);
      num.className = 'text-xs text-gray-700';
      // 体重表示
      const w = weightLog[dateStr];
      const wEl = document.createElement('div');
      if (w!=null) {
        const val = Number(w);
        wEl.textContent = `${val.toFixed(1)}kg`;
        wEl.className = 'mt-1 text-[10px] text-stone-600';
      } else {
        wEl.textContent = '';
        wEl.className = 'mt-1 text-[10px]';
      }
      if (dateStr === todayStr) {
        cell.className += ' ring-2 ring-teal-300';
      }
      cell.appendChild(num);
      cell.appendChild(dot);
      cell.appendChild(wEl);
      grid.appendChild(cell);
    }
  }
  buildMonthCalendar();

  // 体重入力（朝）
  const weightInput = document.getElementById('weightInput');
  const saveWeightBtn = document.getElementById('saveWeightBtn');
  const weightTodayEl = document.getElementById('weightToday');
  const weightDeltaEl = document.getElementById('weightDelta');
  function loadWeightLog(){ try { return JSON.parse(localStorage.getItem('weight_log')||'{}'); } catch(e){ return {}; } }
  function saveWeightLog(obj){ localStorage.setItem('weight_log', JSON.stringify(obj)); }
  function getWeight(k){ const log = loadWeightLog(); return (k in log) ? log[k] : null; }
  function setWeight(k, val){ const log = loadWeightLog(); log[k] = val; saveWeightLog(log); }
  function updateWeightUI(){
    if (!weightTodayEl || !weightDeltaEl) return;
    const today = todayKey;
    const prevDate = new Date(y, now.getMonth(), d); prevDate.setDate(prevDate.getDate()-1);
    const prevKey = fmtDate(prevDate);
    const w = getWeight(today);
    const wPrev = getWeight(prevKey);
    weightTodayEl.textContent = (w!=null) ? `${w.toFixed(1)} kg` : '未入力';
    if (w!=null && wPrev!=null){
      const diff = w - wPrev;
      const sign = diff>0 ? '+' : diff<0 ? '−' : '±';
      weightDeltaEl.textContent = `${sign}${Math.abs(diff).toFixed(1)} kg`;
    } else {
      weightDeltaEl.textContent = '—';
    }
    if (weightInput && w!=null) weightInput.value = String(w);
  }
  updateWeightUI();
  if (saveWeightBtn){
    saveWeightBtn.addEventListener('click', function(){
      if (!weightInput) return;
      const val = parseFloat(weightInput.value);
      if (isNaN(val) || val<=0) return;
      setWeight(todayKey, val);
      updateWeightUI();
      buildMonthCalendar();
    });
  }
})();
