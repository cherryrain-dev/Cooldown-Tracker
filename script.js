const characters = [
  {
    name: "Silver",
    portrait: "⚔️",
    portraitImage: "image\\Silver\\Silver.png", // ใส่ path รูปได้เลย เช่น "images/silver.png"
    color: "#c9d4e8",
    skills: [
      { name: "Deflect", maxCooldown: 1, currentProgress: 1},
      { name: "Holy Slash", maxCooldown: 3, currentProgress: 3, canReset: true, active: false, canBeActive: false },
      { name: "Rapid Strike", maxCooldown: 3, currentProgress: 3},
      { name: "Hexround", maxBullets: 4, bulletsLeft: 4, isBullet: true }
    ]
  },
  {
    name: "Varrik",
    portrait: "🛡️",
    portraitImage: "image\\Varrik\\Varrik.png", // ใส่ path รูปได้เลย เช่น "images/varrik.png"
    color: "#d900ff",
    skills: [
      { name: "Battle-Hardened Body", maxCooldown: 4, currentProgress: 4, active: false, canBeActive: true, canUse: false },
      { name: "Fugitive's Instinct", maxCooldown: 2, currentProgress: 2, active: false, canBeActive: false },
      { name: "Disarming Fang", maxCooldown: 3, currentProgress: 3, active: false, canBeActive: false },
      { name: "Ashfall Slam", maxCooldown: 3, currentProgress: 3, active: false, canBeActive: false },
      { name: "Rider Kick", maxCooldown: 4, currentProgress: 4, active: false, canBeActive: false }
    ]
  },
  {
    name: "Lumira",
    portrait: "🌙",
    portraitImage: "image\\Lumira\\Lumira.png",
    color: "#ffe100",
    mode: null, 
    modes: {
      angel: {
        label: "Angel",
        emoji: "",
        portraitImage: "image\\Lumira\\Lumira.png",
        color: "#ffe100",
        skills: [
          { name: "Wings", active: false, canBeActive: true, canUse: false },
          { name: "Stellar Bonist", maxCooldown: 3, currentProgress: 3, active: false, canBeActive: false },
          { name: "Starry Sleep", maxCooldown: 4, currentProgress: 4, hitCooldown: 1, missCooldown: 3 },
          { name: "Bless", maxCooldown: 3, currentProgress: 3 }
        ]
      },
      devil: {
        label: "Devil",
        emoji: "🖤",
        portraitImage: "image\\Lumira\\Lumira.png",
        color: "#ff4466",
        skills: [
          { name: "Devil Wings", active: false, canBeActive: true, canUse: false },
          { name: "Judgment Cut", maxCooldown: 1, currentProgress: 1},
          { name: "Blood Missile", maxCooldown: 2, currentProgress: 2},
          { name: "Ray", maxCooldown: 3, currentProgress: 3 }
        ]
      }
    },
    skills: [
      { name: "Wings", active: false, canBeActive: true, canUse: false },
      { name: "Stellar Bonist", maxCooldown: 3, currentProgress: 3, active: false, canBeActive: false },
      { name: "Starry Sleep", maxCooldown: 4, currentProgress: 4, hitCooldown: 1, missCooldown: 3 },
      { name: "Bless", maxCooldown: 3, currentProgress: 3 }
    ]
  },
  {
    name: "Feryx",
    portrait: "🐉",
    portraitImage: "image\\Feryx\\Feryx.png", // ใส่ path รูปได้เลย เช่น "images/feryx.png"
    color: "#ff1100",
    skills: [
      { name: "Spark of Hope", maxCooldown: 3, currentProgress: 3 },
      { name: "Charming Aria", maxCooldown: 4, currentProgress: 4 },
      { name: "Resonance", maxCooldown: 3, currentProgress: 3 },
      { name: "Blood Spray", maxCooldown: 3, currentProgress: 3 },
      { name: "Dragon's Fang", maxCooldown: 4, currentProgress: 4 }
    ]
  },
  {
    name: "Gunter",
    portrait: "🌊",
    portraitImage: "image\\Gunter\\Gunter.png", // ใส่ path รูปได้เลย เช่น "images/gunter.png"
    color: "#7ab8d4",
    skills: [
      { name: "Last Provocation", maxCooldown: 3, currentProgress: 3, active: false, canBeActive: true },
      { name: "Guardian's Shadow", maxCooldown: 3, currentProgress: 3 },
      { name: "Stunning Fist", maxCooldown: 4, currentProgress: 4 },
      { name: "Tidal Sweep", maxCooldown: 4, currentProgress: 4 }
    ]
  },
  {
    name: "Ren Ito",
    portrait: "🗡️",
    portraitImage: "image\\Ren\\Ren.png", // ใส่ path รูปได้เลย เช่น "images/ren.png"
    color: "#e87aa8",
    skills: [
      { name: "Threaded Dagger", maxCooldown: 2, currentProgress: 2 },
      { name: "Binding Thread", maxCooldown: 3, currentProgress: 3, hitCooldown: 3, missCooldown: 2 },
      { name: "Crimson Thread", maxCooldown: 4, currentProgress: 4 },
      { name: "Dancing Daggers", maxCooldown: 4, currentProgress: 4 }
    ]
  },
  {
    name: "Abdulla",
    portrait: "🔥",
    portraitImage: "image\\Abdulla\\Abdulla.png", // ใส่ path รูปได้เลย เช่น "images/abdulla.png"
    color: "#ffac48",
    skills: [
      { name: "Drunken Stance", active: false, canBeActive: true, canUse: false },
      { name: "Incendiary Body", active: false, canBeActive: true, canUse: false },
      { name: "Abdulla's Molotov", maxCooldown: 2, currentProgress: 2 },
      { name: "Heat Blast", maxCooldown: 4, currentProgress: 4 }
    ]
  }
];

// ============ SKILL METADATA (icons + descriptions + optional image) ============
// image: ใส่ path รูปสกิลได้เลย เช่น "images/skills/deflect.png"
// ถ้าไม่ใส่ image จะใช้ emoji icon แทนอัตโนมัติ
const SKILL_META = {
  // Silver
  "Deflect": { icon: "🛡", image: "image\\Silver\\Deflect.png", desc: "Reaction - ปัดป้องการโจมตีศัตรูหากสำเร็จสวนกลับด้วยดาเมจ 1d4 + STR Mod" },
  "Holy Slash": { icon: "✨", image: "image\\Silver\\Holy Slash.png", desc: "Action - พุ่งทะลุผ่านศัตรูในระยะ 15 FT ทำดาเมจ 1d4 + STR Mod - Reset หากกำจัดศัตรูได้" },
  "Rapid Strike": { icon: "⚡", image: "image\\Silver\\Rapid Strike.png", desc: "Action - ฟาดฟันศัตรูอย่างต่อเนื่องทำดาเมจ 1d6 + STR Mod * 3" },
  "Hexround": { icon: "🔮", image: "image\\Silver\\Hunter Pistol.jpg", desc: "Action - ยิงกระสุนปืน 1 นัดทำดาเมจ 1d8 + Dex Mod" },
  // Varrik
  "Battle-Hardened Body": { icon: "💪", image: "image\\Varrik\\1220.png", desc: "Action - เพิ่มค่า AC 1d2 คงอยู่ 2 เทิร์น" },
  "Fugitive's Instinct": { icon: "👣", image: "image\\Varrik\\1221.png", desc: "Bonus Action - เคลื่อนที่อย่างรวดเร็ว 15 FT" },
  "Disarming Fang": { icon: "🦷", image: "image\\Varrik\\Untitled design (16).png", desc: "Action - พุ่งในระยะ 15 FT เข้าไปปัดอาวุธศัตรู ศัตรูต้องทอย STR Save 12" },
  "Ashfall Slam": { icon: "🌋", image: "image\\Varrik\\Untitled design (18).png", desc: "Action - ทุ่มศัตรูลงพื้นทำดาเมจ 1d6 + STR Mod ศัตรูติดสถานะ Prone" },
  "Rider Kick": { icon: "🦵", image: "image\\Varrik\\3175.png", desc: "Action - กระโดดขึ้นเเล้วพุ่งลงมาโจมตีศัตรูในระยะ 30 FT ทำดาเมจ 2d8 + STR Mod" },
  // Lumira
  "Wings": { icon: "🪽", image: "image\\Lumira\\Wings.png", desc: "Special - กางปีกออกเพิ่ม Speed + 30 FT , ลบความเเม่นยำสกิลลง -1d2" },
  "Stellar Bonist": { icon: "🌟", image: "image\\Lumira\\download (88).jpg", desc: "Action - ใช้สมุนไพรเสริมพลังเพื่อนร่วมทีม" },
  "Starry Sleep": { icon: "💤", image: "image\\Lumira\\(Top 10) LOL Best Items for Movement Speed.jpg", desc: "Action - ปล่อยละอองดาวทำให้ศัตรูหลับไหลศัตรูต้องทอย WIS Save 12" },
  "Bless": { icon: "🙏", image: "image\\Lumira\\Ancient script.jpg", desc: "Action - ให้พร blessing แก่เพื่อนร่วมทีม + 1d2 Attack Roll 2 เทิร์น" },
  "Devil Wings": { icon: "🖤", image: "image\\Lumira\\angel core but red ♡︎.jpg", desc: "Special - กางปีกปีศาจออกเพิ่มพลังโจมตี +1d2 , ลด AC ลง -1d2" },
  "Judgment Cut": { icon: "⚖️", image: "image\\Lumira\\download (93).jpg", desc: "Action - ฟันทุกคนในระยะ 30 FT ทำดาเมจ 1d6 + WIS Mod * 3" },
  "Blood Missile": { icon: "🩸", image: "image\\Lumira\\Untitled design (21).png", desc: "Action - ยิงกระสุนเลือดในระยะ 30 FT ทำดาเมจ 1d4 * 3 + Wis Mod" },
  "Ray": { icon: "🔫", image: "image\\Lumira\\download (90).jpg", desc: "Action - ยิงลำเเสงใส่ศัตรูดูดเลือดจากความเสียหายที่ทำได้ครึ่งนึง 1d6 + Wis Mod" },

  // Feryx
  "Spark of Hope": { icon: "🔥", image: "image\\Feryx\\Spark of Hope - Feryx.jpg", desc: "Action - มอบ Bardic Inspiration (d6) ให้เพื่อน 1 คน" },
  "Charming Aria": { icon: "🎵", image: "image\\Feryx\\Untitled design (26).png", desc: "Action - ปล่อย Aura เสน์ห์ในระยะ 10 FT ศัตรูต้องทอย WIS Save 12 หาก Fail จะติด Charm 1 เทิร์น" },
  "Resonance": { icon: "📯", image: "image\\Feryx\\Spark of Hope - Feryx.jpg", desc: "Action - สร้างคลื่นเสียงผลักศัตรูในระยะ 10 FT ทำดาเมจ 1d6 + Dex Mod" },
  "Blood Spray": { icon: "🩸", image: "image\\Feryx\\Blood Art Style.png", desc: "Action - ปล่อยเวทเลือดทำดาเมจ 1d4 + Cha Mod * 2" },
  "Dragon's Fang": { icon: "🐲", image: "image\\Feryx\\download (92).jpg", desc: "Action - ใช้เวทเลือดสร้างมังกรเเล้วปล่อยออกไปทำเมจ 1d4 + Cha Mod * 3 ระยะ 30 FT" },
  // Gunter
  "Guardian's Shadow": { icon: "👤", image: "image\\Gunter\\Untitled design (15).png", desc: "Action -Gunter พุ่งไปยืนบังหรือสร้างแรงกดดันรอบตัวเพื่อนที่เลือก ดาเมจ 100% ที่เพื่อนได้รับจะถูกโอนมาที่ Gunter แทน คงอยู่ 2 เทิร์น" },
  "Last Provocation": { icon: "📣", image: "image\\Gunter\\2001.png", desc: "Action - ยั่วยุศัตรูในระยะ 30 FT ศัตรูต้องทอย WIS Save 12 หาก Fail จะต้องเล็ง Gunter 1 เทิร์น" },
  "Stunning Fist": { icon: "👊", image: "image\\Gunter\\Untitled design (9).png", desc: "Action - ต่อยศัตรูอย่างหนักหน่วงทำดาเมจ 1d6 + STR Mod เเล้ว Stun ศัตรู" },
  "Tidal Sweep": { icon: "🌊", image: "image\\Gunter\\Storm _ Vortex Tutorial.jpg", desc: "Action - ตวัดทวนรอบตัว 5 FT ทำดาเมจ 1d6 + STR Mod เเละ ผลักศัตรูทุกตัวที่อยู่ในระยะ" },
  // Ren Ito
  "Threaded Dagger": { icon: "🪡", image: "image\\Ren\\Witch Blade, dota 2 item, AI, 2k res Открыть веб-сайт.jpg", desc: "Action - ปามีดในระยะ 20 -> 60 FT ออกไปทำดาเมจ 1d6 + Dex Mod" },
  "Binding Thread": { icon: "🕸", image: "image\\Ren\\H.jpg", desc: "Action - สร้างเส้นใยที่สามารถผูกศัตรูไว้ได้ศัตรูต้องทอย STR Save 12 หาก Fail จะติด Binding 1 เทิร์น" },
  "Crimson Thread": { icon: "🧵", image: "image\\Ren\\download (63).jpg", desc: "Action - ใช้มีดกับด้ายดึงศัตรูเข้ามาใกล้ ศัตรูต้องทอย STR Save 10 หาก Fail จะติดโดนดึง" },
  "Dancing Daggers": { icon: "🔪", image: "image\\Ren\\download (87).jpg", desc: "Action - ปามีดในระยะ 10 FT ทำดาเมจ 1d6 + Dex Mod * 3" },
  // Abdulla
  "Drunken Stance": { icon: "🍶", image: "image\\Abdulla\\3067.png", desc: "เมา." },
  "Incendiary Body": { icon: "🔥", image: "image\\Abdulla\\Égide de Fogo Solar.jpg", desc: "เผาตัวเอง" },
  "Abdulla's Molotov": { icon: "🍾", image: "image\\Abdulla\\download (72) (1).jpg", desc: "ปาขวด" },
  "Heat Blast": { icon: "💥", image: "image\\Abdulla\\6660.png", desc: "พ่นไฟ" }
};

function getMeta(name) {
  return SKILL_META[name] || { icon: "✦", image: "", desc: "" };
}

// ============ PORTRAIT / ICON HELPERS ============
// สร้าง portrait ตัวละคร — ถ้ามี portraitImage ใช้รูป ถ้าไม่มีใช้ emoji
function createPortraitEl(character, size) {
  const el = document.createElement("div");
  el.classList.add("char-portrait");
  if (size) el.classList.add(size);
  if (character.portraitImage) {
    const img = document.createElement("img");
    img.src = character.portraitImage;
    img.alt = character.name;
    img.classList.add("portrait-img");
    el.appendChild(img);
  } else {
    el.textContent = character.portrait;
  }
  return el;
}

// สร้าง skill icon — ถ้ามี meta.image ใช้รูป ถ้าไม่มีใช้ emoji
function createSkillIconEl(meta) {
  const el = document.createElement("div");
  el.classList.add("skill-icon");
  if (meta.image) {
    const img = document.createElement("img");
    img.src = meta.image;
    img.alt = "";
    img.classList.add("skill-icon-img");
    el.appendChild(img);
  } else {
    el.textContent = meta.icon;
  }
  return el;
}

// ============ ACTIVITY LOG ============
const activityLog = []; // { charName, skillName, action, time }
const MAX_LOG = 30;

function logAction(charName, skillName, action) {
  activityLog.unshift({ charName, skillName, action, time: Date.now() });
  if (activityLog.length > MAX_LOG) activityLog.pop();
  renderActivityLog();
}

function renderActivityLog() {
  const logEl = document.getElementById("dm-activity-log");
  if (!logEl) return;
  if (activityLog.length === 0) {
    logEl.innerHTML = '<div class="log-empty">No actions yet this session.</div>';
    return;
  }
  logEl.innerHTML = activityLog.slice(0, 8).map(entry => {
    const ago = formatTimeAgo(entry.time);
    return `<div class="log-entry">
      <span class="log-char">${entry.charName}</span>
      <span class="log-skill">${entry.skillName}</span>
      <span class="log-action log-action-${entry.action.toLowerCase().replace(/\s/g, '-')}">${entry.action}</span>
      <span class="log-time">${ago}</span>
    </div>`;
  }).join("");
}

function formatTimeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 5) return "just now";
  if (s < 60) return s + "s ago";
  return Math.floor(s / 60) + "m ago";
}

// อัปเดต time ago ทุก 10 วิ
setInterval(() => { if (activityLog.length) renderActivityLog(); }, 10000);

// ============ STATE + FIREBASE ============
const firebaseConfig = {
  databaseURL: "https://dnd---cooldown-tracker-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// เริ่มต้นเปิดใช้งาน Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ROOM_ID = "dnd-session-1"; // ชื่อห้อง (ถ้าเล่นหลายปาร์ตี้ ค่อยมาแก้ตรงนี้ได้)

let turnNumber = 1;

function saveState() {
  const payload = {
    turnNumber: turnNumber,
    // ถ้า activityLog ไม่มีข้อมูล ให้ส่ง null (Firebase ไม่รับ Array ว่าง)
    activityLog: activityLog.length > 0 ? activityLog : null, 
    chars: characters.map(c => ({
      name: c.name,
      mode: c.mode || null,
      skills: c.skills.map(s => ({
        // ป้องกัน Error: ดักค่า undefined ให้กลายเป็น null
        currentProgress: s.currentProgress !== undefined ? s.currentProgress : null,
        active: s.active !== undefined ? s.active : null,
        bulletsLeft: s.bulletsLeft !== undefined ? s.bulletsLeft : null
      }))
    }))
  };
  
  // ส่งขึ้น Firebase ทันทีที่มีการกด
  database.ref('rooms/' + ROOM_ID).set(payload).catch(err => {
    console.error("Firebase Sync Error: ", err);
  });
}

function loadState() {
  // .on('value') คือการ "ดักฟัง" ถ้ามีใครกดปุ่ม ข้อมูลจะเปลี่ยน แล้วมันจะอัปเดตหน้าจอทันที
  database.ref('rooms/' + ROOM_ID).on('value', (snapshot) => {
    const data = snapshot.val();
    if (!data) return; // ถ้าเพิ่งสร้างห้องยังไม่มีข้อมูล ให้ข้ามไปก่อน

    if (typeof data.turnNumber === "number") turnNumber = data.turnNumber;

    if (Array.isArray(data.chars)) {
      data.chars.forEach(savedChar => {
        const c = characters.find(x => x.name === savedChar.name);
        if (!c) return;

        // จัดการโหมดของ Lumira
        if (savedChar.mode && c.modes) {
          c.mode = savedChar.mode;
          const modeData = c.modes[savedChar.mode];
          if (modeData) {
            c.color = modeData.color;
            if (modeData.portraitImage) c.portraitImage = modeData.portraitImage;
          }
        }

        // จัดการสกิล
        savedChar.skills.forEach((s, i) => {
          if (!c.skills[i]) return;
          if (typeof s.currentProgress === "number") c.skills[i].currentProgress = s.currentProgress;
          if (typeof s.active === "boolean") c.skills[i].active = s.active;
          if (typeof s.bulletsLeft === "number") c.skills[i].bulletsLeft = s.bulletsLeft;
        });
      });
    }

    // จัดการ Activity Log
    if (Array.isArray(data.activityLog)) {
      activityLog.length = 0;
      data.activityLog.forEach(log => activityLog.push(log));
      renderActivityLog();
    } else {
      activityLog.length = 0;
      renderActivityLog();
    }

    // สั่งวาด UI ใหม่
    updateDmTurnUi();
    
    // ถ้าหน้าจอ DM ไม่ได้ถูกซ่อนอยู่ ให้รีเฟรชหน้า DM
    if (!dmScreen.classList.contains("hidden")) {
      renderDm();
    } 
    // ถ้าหน้าจอกดสกิลไม่ได้ถูกซ่อนอยู่ ให้รีเฟรชปุ่มสกิล
    else if (!gameScreen.classList.contains("hidden")) {
      renderSkills();
    }
  });
}
// ============ DOM REFS ============
const characterButtons = document.getElementById("character-buttons");
const characterSelect = document.getElementById("character-select");
const gameScreen = document.getElementById("game-screen");
const characterHeader = document.getElementById("character-header");
const skillsContainer = document.getElementById("skills-container");
const endTurnButton = document.getElementById("end-turn");
const backButton = document.getElementById("back-button");
const dmTurnNumberEl = document.getElementById("dm-turn-number");
const dmModeButton = document.getElementById("dm-mode-button");
const dmScreen = document.getElementById("dm-screen");
const dmContainer = document.getElementById("dm-container");
const dmBackButton = document.getElementById("dm-back-button");
const dmEndTurnButton = document.getElementById("dm-end-turn");
const dmResetTurnButton = document.getElementById("dm-reset-turn");

let currentCharacter = null;

// ============ HELPERS ============
function isReady(skill) {
  if (skill.maxCooldown === undefined) return false;
  return skill.currentProgress >= skill.maxCooldown;
}
function isPassiveToggle(skill) {
  return skill.canBeActive && skill.maxCooldown === undefined;
}
function updateDmTurnUi() {
  if (dmTurnNumberEl) dmTurnNumberEl.textContent = turnNumber;
}

// ============ CHARACTER SELECT ============
function createCharacterButtons() {
  characters.forEach(character => {
    const button = document.createElement("button");
    button.classList.add("character-button");
    button.style.setProperty("--char-color", character.color);

    const portrait = createPortraitEl(character, "");

    const info = document.createElement("div");
    info.classList.add("char-info");
    const cname = document.createElement("div");
    cname.classList.add("char-name");
    cname.textContent = character.name;
    const cmeta = document.createElement("div");
    cmeta.classList.add("char-meta");
    cmeta.textContent = `${character.skills.length} skills`;
    info.appendChild(cname);
    info.appendChild(cmeta);

    const arrow = document.createElement("div");
    arrow.classList.add("char-arrow");
    arrow.textContent = "→";

    button.appendChild(portrait);
    button.appendChild(info);
    button.appendChild(arrow);

    button.addEventListener("click", () => loadCharacter(character));
    characterButtons.appendChild(button);
  });
}

function loadCharacter(character) {
  // Lumira ต้องเลือกโหมดก่อน
  if (character.modes && !character.mode) {
    showModeSelect(character);
    return;
  }
  currentCharacter = character;
  characterSelect.classList.add("hidden");
  dmScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  characterHeader.innerHTML = "";
  characterHeader.style.setProperty("--char-color", character.color);
  const portrait = createPortraitEl(character, "large");
  const name = document.createElement("h1");
  name.id = "character-name";
  name.textContent = character.name;
  // ถ้ามี mode ให้แสดง badge
  if (character.mode) {
    const modeBadge = document.createElement("div");
    modeBadge.classList.add("mode-badge");
    const modeData = character.modes[character.mode];
    modeBadge.textContent = modeData.emoji + " " + modeData.label;
    modeBadge.style.color = modeData.color;
    characterHeader.appendChild(portrait);
    characterHeader.appendChild(name);
    characterHeader.appendChild(modeBadge);
  } else {
    characterHeader.appendChild(portrait);
    characterHeader.appendChild(name);
  }

  renderSkills();
}

// ============ MODE SELECT (Lumira) ============
function showModeSelect(character) {
  characterSelect.classList.add("hidden");
  const modeScreen = document.getElementById("mode-select-screen");
  const modeTitle = document.getElementById("mode-select-title");
  const modeButtons = document.getElementById("mode-select-buttons");
  const modeBack = document.getElementById("mode-back-button");

  modeTitle.textContent = character.name;
  modeButtons.innerHTML = "";

  Object.entries(character.modes).forEach(([key, modeData]) => {
    const btn = document.createElement("button");
    btn.classList.add("mode-option-btn");
    btn.style.setProperty("--mode-color", modeData.color);

    // ใช้รูป portrait หลักของตัวละคร ไม่เปลี่ยนตาม mode
    const portrait = createPortraitEl(character, "large");

    const label = document.createElement("div");
    label.classList.add("mode-label");
    label.textContent = modeData.emoji + " " + modeData.label;

    btn.appendChild(portrait);
    btn.appendChild(label);

    btn.addEventListener("click", () => {
      // เซ็ต mode และ copy skills จาก mode ที่เลือก
      character.mode = key;
      character.color = modeData.color;
      if (modeData.portraitImage) character.portraitImage = modeData.portraitImage;
      // reset skills จาก mode template
      character.skills = JSON.parse(JSON.stringify(modeData.skills));
      modeScreen.classList.add("hidden");
      loadCharacter(character);
    });

    modeButtons.appendChild(btn);
  });

  modeBack.onclick = () => {
    modeScreen.classList.add("hidden");
    characterSelect.classList.remove("hidden");
  };

  modeScreen.classList.remove("hidden");
}

// ============ RENDER SKILLS ============
function renderSkills() {
  skillsContainer.innerHTML = "";

  currentCharacter.skills.forEach(skill => {
    const ready = isReady(skill);
    const meta = getMeta(skill.name);
    const card = document.createElement("div");
    card.classList.add("skill-card");
    if (ready) card.classList.add("ready");
    if (skill.canBeActive && skill.active) card.classList.add("is-active");

    // Header: icon + name + READY badge + info tooltip
    const header = document.createElement("div");
    header.classList.add("skill-header");

    const icon = createSkillIconEl(meta);
    header.appendChild(icon);

    const name = document.createElement("div");
    name.classList.add("skill-name");
    name.textContent = skill.name;
    header.appendChild(name);

    if (ready) {
      const badge = document.createElement("div");
      badge.classList.add("ready-badge");
      badge.textContent = "READY";
      header.appendChild(badge);
    }

    if (meta.desc) {
      const info = document.createElement("div");
      info.classList.add("skill-info");
      info.textContent = "?";
      info.tabIndex = 0;
      const tip = document.createElement("div");
      tip.classList.add("skill-tooltip");
      tip.textContent = meta.desc;
      info.appendChild(tip);
      // tap-to-toggle for mobile
      info.addEventListener("click", (e) => {
        e.stopPropagation();
        info.classList.toggle("open");
      });
      header.appendChild(info);
    }

    card.appendChild(header);

    // Cooldown dots
    if (skill.maxCooldown !== undefined) {
      const dots = document.createElement("div");
      dots.classList.add("dots");
      for (let i = 0; i < skill.maxCooldown; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i < skill.currentProgress) dot.classList.add("filled");
        dots.appendChild(dot);
      }
      card.appendChild(dots);
    }

    // Bullet dots (กระสุน — กดทีละ 1)
    if (skill.isBullet) {
      const dots = document.createElement("div");
      dots.classList.add("dots", "bullet-dots");
      for (let i = 0; i < skill.maxBullets; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot", "bullet-dot");
        if (i < skill.bulletsLeft) dot.classList.add("filled");
        dots.appendChild(dot);
      }
      card.appendChild(dots);
    }

    // Active text
    if (skill.canBeActive) {
      const activeText = document.createElement("div");
      activeText.classList.add("active-text");
      if (skill.active) {
        activeText.textContent = "● ACTIVE";
        activeText.classList.add("on");
      } else {
        activeText.textContent = "○ NOT ACTIVE";
      }
      card.appendChild(activeText);
    }

    // Buttons row
    const row = document.createElement("div");
    row.classList.add("button-row");
    let btnCount = 0;

    if (skill.isBullet) {
      const fireBtn = document.createElement("button");
      fireBtn.textContent = "FIRE";
      fireBtn.classList.add("use-button", "hit");
      fireBtn.disabled = skill.bulletsLeft <= 0;
      fireBtn.addEventListener("click", () => {
        if (skill.bulletsLeft > 0) {
          skill.bulletsLeft--;
          logAction(currentCharacter.name, skill.name, "FIRE");
          saveState();
          renderSkills();
        }
      });
      row.appendChild(fireBtn);

      const reloadBtn = document.createElement("button");
      reloadBtn.textContent = "RELOAD";
      reloadBtn.classList.add("use-button", "reset");
      reloadBtn.disabled = skill.bulletsLeft >= skill.maxBullets;
      reloadBtn.addEventListener("click", () => {
        skill.bulletsLeft = skill.maxBullets;
        saveState();
        renderSkills();
      });
      row.appendChild(reloadBtn);
      btnCount += 2;
    }

    if (skill.hitCooldown === undefined && skill.canUse !== false && skill.maxCooldown !== undefined) {
      const useButton = document.createElement("button");
      useButton.textContent = "USE";
      useButton.classList.add("use-button");
      useButton.disabled = !ready;
      useButton.addEventListener("click", () => {
        skill.currentProgress = 0;
        logAction(currentCharacter.name, skill.name, "USE");
        saveState();
        renderSkills();
      });
      row.appendChild(useButton);
      btnCount++;
    }

    if (skill.hitCooldown !== undefined) {
      const hitButton = document.createElement("button");
      hitButton.textContent = "HIT";
      hitButton.classList.add("use-button", "hit");
      hitButton.disabled = !ready;
      hitButton.addEventListener("click", () => {
        skill.currentProgress = skill.maxCooldown - skill.hitCooldown;
        logAction(currentCharacter.name, skill.name, "HIT");
        saveState();
        renderSkills();
      });
      row.appendChild(hitButton);

      const missButton = document.createElement("button");
      missButton.textContent = "MISS";
      missButton.classList.add("use-button", "miss");
      missButton.disabled = !ready;
      missButton.addEventListener("click", () => {
        skill.currentProgress = skill.maxCooldown - skill.missCooldown;
        logAction(currentCharacter.name, skill.name, "MISS");
        saveState();
        renderSkills();
      });
      row.appendChild(missButton);
      btnCount += 2;
    }

    if (skill.canReset) {
      const resetButton = document.createElement("button");
      resetButton.textContent = "RESET";
      resetButton.classList.add("use-button", "reset");
      resetButton.addEventListener("click", () => {
        skill.currentProgress = skill.maxCooldown;
        saveState();
        renderSkills();
      });
      row.appendChild(resetButton);
      btnCount++;
    }

    if (skill.canBeActive) {
      const activeButton = document.createElement("button");
      activeButton.textContent = skill.active ? "DEACTIVATE" : "ACTIVATE";
      activeButton.classList.add("use-button", "toggle");
      if (skill.active) activeButton.classList.add("on");
      activeButton.addEventListener("click", () => {
        skill.active = !skill.active;
        logAction(currentCharacter.name, skill.name, skill.active ? "ACTIVATE" : "DEACTIVATE");
        saveState();
        renderSkills();
      });
      row.appendChild(activeButton);
      btnCount++;
    }

    if (btnCount === 2) row.classList.add("two");
    else if (btnCount === 3) row.classList.add("three");
    if (btnCount > 0) card.appendChild(row);

    skillsContainer.appendChild(card);
  });
}

// ============ END TURN ============
function resetTurn() {
  turnNumber = 1;
  characters.forEach(c => {
    c.skills.forEach(skill => {
      if (skill.maxCooldown !== undefined) {
        skill.currentProgress = skill.maxCooldown;
      }
    });
  });
  saveState();
  updateDmTurnUi();
}

function advanceTurn() {
  turnNumber++;
  characters.forEach(c => {
    c.skills.forEach(skill => {
      if (skill.maxCooldown !== undefined && skill.currentProgress < skill.maxCooldown) {
        skill.currentProgress++;
      }
    });
  });
  saveState();
  updateDmTurnUi();
}

endTurnButton.addEventListener("click", () => {
  advanceTurn();
  renderSkills();
});

backButton.addEventListener("click", () => {
  // ถ้าเป็น Lumira ให้ reset mode เพื่อให้เลือกใหม่ได้
  if (currentCharacter && currentCharacter.modes) {
    currentCharacter.mode = null;
    currentCharacter.color = "#ffe100";
    currentCharacter.portraitImage = "image\\Lumira\\Lumira.png";
  }
  gameScreen.classList.add("hidden");
  characterSelect.classList.remove("hidden");
});

// ============ DM OVERVIEW ============
function renderDm() {
  dmContainer.innerHTML = "";
  characters.forEach(c => {
    const wrap = document.createElement("div");
    wrap.classList.add("dm-character");
    wrap.style.setProperty("--char-color", c.color);

    const head = document.createElement("div");
    head.classList.add("dm-character-head");
    const p = createPortraitEl(c, "small");
    const h = document.createElement("h2");
    h.textContent = c.name;
    head.appendChild(p);
    head.appendChild(h);
    wrap.appendChild(head);

    c.skills.forEach(s => {
      const row = document.createElement("div");
      row.classList.add("dm-skill-row");

      // ซ้าย: icon + ชื่อ + tooltip
      const left = document.createElement("span");
      left.classList.add("name");

      const meta = getMeta(s.name);
      const dmIcon = createSkillIconEl(meta);
      dmIcon.classList.add("dm-skill-icon");
      left.appendChild(dmIcon);

      const nameSpan = document.createElement("span");
      nameSpan.classList.add("dm-skill-name-text");
      nameSpan.textContent = s.name;
      left.appendChild(nameSpan);

      // tooltip เหมือนผู้เล่น
      if (meta.desc) {
        const infoBtn = document.createElement("div");
        infoBtn.classList.add("skill-info", "dm-skill-info");
        infoBtn.textContent = "?";
        infoBtn.tabIndex = 0;
        const tip = document.createElement("div");
        tip.classList.add("skill-tooltip");
        tip.textContent = meta.desc;
        infoBtn.appendChild(tip);
        infoBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          infoBtn.classList.toggle("open");
        });
        left.appendChild(infoBtn);
      }

      row.appendChild(left);

      const status = document.createElement("span");
      status.classList.add("status");
      if (isPassiveToggle(s)) {
        if (s.active) {
          status.textContent = "ACTIVE";
          status.classList.add("active");
        } else {
          status.textContent = "NOT ACTIVE";
          status.classList.add("inactive");
        }
      } else if (s.canBeActive && s.active) {
        status.textContent = "ACTIVE";
        status.classList.add("active");
      } else if (s.isBullet) {
        status.textContent = `${s.bulletsLeft}/${s.maxBullets} 🔮`;
        if (s.bulletsLeft === 0) status.classList.add("inactive");
        else status.classList.add("ready");
      } else if (s.maxCooldown === undefined) {
        status.textContent = "—";
      } else if (isReady(s)) {
        status.textContent = "READY";
        status.classList.add("ready");
      } else {
        status.textContent = `${s.currentProgress}/${s.maxCooldown}`;
      }
      row.appendChild(status);
      wrap.appendChild(row);
    });

    dmContainer.appendChild(wrap);
  });
  // Activity log panel
  const logSection = document.createElement("div");
  logSection.classList.add("dm-log-section");
  const logTitle = document.createElement("div");
  logTitle.classList.add("dm-log-title");
  logTitle.textContent = "📋 Activity Log";
  const logEntries = document.createElement("div");
  logEntries.id = "dm-activity-log";
  logEntries.classList.add("dm-activity-log");
  logSection.appendChild(logTitle);
  logSection.appendChild(logEntries);
  dmContainer.appendChild(logSection);

  updateDmTurnUi();
  renderActivityLog();
}

// ============ DM PIN ============
const DM_PIN = "1234"; 
let pinInput = "";

const pinModal = document.getElementById("pin-modal");
const pinDots = document.querySelectorAll(".pin-dot");
const pinError = document.getElementById("pin-error");

function openPinModal() {
  pinInput = "";
  updatePinDots();
  pinError.classList.add("hidden");
  pinModal.classList.remove("hidden");
  pinModal.classList.add("visible");
}

function closePinModal() {
  pinModal.classList.remove("visible");
  setTimeout(() => pinModal.classList.add("hidden"), 200);
  pinInput = "";
  updatePinDots();
  pinError.classList.add("hidden");
}

function updatePinDots() {
  pinDots.forEach((dot, i) => {
    dot.classList.toggle("filled", i < pinInput.length);
    dot.classList.toggle("error", pinError && !pinError.classList.contains("hidden"));
  });
}

function handlePinDigit(digit) {
  if (pinInput.length >= DM_PIN.length) return;
  pinError.classList.add("hidden");
  pinDots.forEach(d => d.classList.remove("error"));
  pinInput += digit;
  updatePinDots();

  if (pinInput.length === DM_PIN.length) {
    setTimeout(() => {
      if (pinInput === DM_PIN) {
        closePinModal();
        characterSelect.classList.add("hidden");
        dmScreen.classList.remove("hidden");
        renderDm();
      } else {
        pinError.classList.remove("hidden");
        pinDots.forEach(d => d.classList.add("error"));
        setTimeout(() => {
          pinInput = "";
          updatePinDots();
          pinError.classList.add("hidden");
          pinDots.forEach(d => d.classList.remove("error"));
        }, 700);
      }
    }, 120);
  }
}

document.querySelectorAll(".pin-key[data-digit]").forEach(btn => {
  btn.addEventListener("click", () => handlePinDigit(btn.dataset.digit));
});

document.getElementById("pin-backspace").addEventListener("click", () => {
  pinInput = pinInput.slice(0, -1);
  pinError.classList.add("hidden");
  pinDots.forEach(d => d.classList.remove("error"));
  updatePinDots();
});

document.getElementById("pin-cancel").addEventListener("click", closePinModal);

dmModeButton.addEventListener("click", openPinModal);

dmBackButton.addEventListener("click", () => {
  dmScreen.classList.add("hidden");
  characterSelect.classList.remove("hidden");
});

dmEndTurnButton.addEventListener("click", () => {
  advanceTurn();
  renderDm();
});

dmResetTurnButton.addEventListener("click", () => {
  if (confirm("Reset turn 1 และ cooldown ทุกสกิล?")) {
    resetTurn();
    renderDm();
  }
});

// close any open tooltips on outside click
document.addEventListener("click", () => {
  document.querySelectorAll(".skill-info.open").forEach(el => el.classList.remove("open"));
});

// ============ START ============
loadState();
updateDmTurnUi();
createCharacterButtons();
