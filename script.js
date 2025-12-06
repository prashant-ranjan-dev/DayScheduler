// ---------- Default full-week schedule (with start & optional end) ----------

const defaultSchedule = [
  // MONDAY
  { id: "m1", day: "Monday", start: "08:00", end: "08:30", title: "Wake up + Bath" },
  { id: "m2", day: "Monday", start: "08:30", end: "09:15", title: "Breakfast & Get Ready" },
  { id: "m3", day: "Monday", start: "09:15", end: "12:30", title: "CSCA 424 Classes" },
  { id: "m4", day: "Monday", start: "12:30", end: "13:30", title: "Lunch & Rest" },
  { id: "m5", day: "Monday", start: "13:30", end: "16:30", title: "Web Dev Course (Learning + Practice)" },
  { id: "m6", day: "Monday", start: "16:30", end: "18:00", title: "Rest + Tea + Walk" },
  { id: "m7", day: "Monday", start: "18:00", end: "19:30", title: "Soft Skill / Reading / Notes" },
  { id: "m8", day: "Monday", start: "19:30", end: "20:15", title: "Dinner" },
  { id: "m9", day: "Monday", start: "20:15", end: "22:30", title: "Mini-Project / Light Practice" },
  { id: "m10", day: "Monday", start: "22:30", end: "00:30", title: "Deep Focus Coding (Web Dev)" },

  // TUESDAY
  { id: "t1", day: "Tuesday", start: "08:00", end: "09:15", title: "Morning Routine + Breakfast" },
  { id: "t2", day: "Tuesday", start: "09:15", end: "11:30", title: "CSCA 422 + CSCA 421" },
  { id: "t3", day: "Tuesday", start: "11:30", end: "12:30", title: "DSA Quick Revision" },
  { id: "t4", day: "Tuesday", start: "12:30", end: "14:30", title: "Lunch + Rest" },
  { id: "t5", day: "Tuesday", start: "14:30", end: "16:30", title: "CSCA 425" },
  { id: "t6", day: "Tuesday", start: "16:30", end: "18:00", title: "Return + Rest" },
  { id: "t7", day: "Tuesday", start: "18:00", end: "19:30", title: "Notes + Journal" },
  { id: "t8", day: "Tuesday", start: "19:30", end: "20:30", title: "Dinner" },
  { id: "t9", day: "Tuesday", start: "20:30", end: "22:30", title: "Light Revision / Learning" },
  { id: "t10", day: "Tuesday", start: "22:30", end: "00:30", title: "Deep Focus Coding (DSA)" },

  // WEDNESDAY
  { id: "w1", day: "Wednesday", start: "08:00", end: "09:15", title: "Breakfast + Prep" },
  { id: "w2", day: "Wednesday", start: "09:15", end: "12:30", title: "CSCA 423 + CSCA 422" },
  { id: "w3", day: "Wednesday", start: "12:30", end: "14:00", title: "Lunch + Rest" },
  { id: "w4", day: "Wednesday", start: "14:00", end: "16:30", title: "Web Dev Learning" },
  { id: "w5", day: "Wednesday", start: "16:30", end: "18:00", title: "Rest / Gym / Walk" },
  { id: "w6", day: "Wednesday", start: "18:00", end: "19:30", title: "Notes / Self Improvement" },
  { id: "w7", day: "Wednesday", start: "19:30", end: "20:30", title: "Dinner" },
  { id: "w8", day: "Wednesday", start: "20:30", end: "22:30", title: "Light Revision" },
  { id: "w9", day: "Wednesday", start: "22:30", end: "00:30", title: "Deep Focus Coding (Web Dev)" },

  // THURSDAY
  { id: "th1", day: "Thursday", start: "08:00", end: "09:15", title: "Breakfast" },
  { id: "th2", day: "Thursday", start: "09:15", end: "11:30", title: "CSEL 581" },
  { id: "th3", day: "Thursday", start: "11:30", end: "12:30", title: "DSA Weak Topics" },
  { id: "th4", day: "Thursday", start: "12:30", end: "13:30", title: "Lunch" },
  { id: "th5", day: "Thursday", start: "13:30", end: "14:30", title: "CSCA 421" },
  { id: "th6", day: "Thursday", start: "14:30", end: "16:30", title: "Web Dev Project Work" },
  { id: "th7", day: "Thursday", start: "16:30", end: "18:00", title: "Rest" },
  { id: "th8", day: "Thursday", start: "18:00", end: "19:30", title: "Interview Prep & Notes" },
  { id: "th9", day: "Thursday", start: "19:30", end: "20:30", title: "Dinner" },
  { id: "th10", day: "Thursday", start: "20:30", end: "22:30", title: "Light Learning" },
  { id: "th11", day: "Thursday", start: "22:30", end: "00:30", title: "Deep Focus Coding (DSA)" },

  // FRIDAY
  { id: "f1", day: "Friday", start: "08:00", end: "09:30", title: "Breakfast" },
  { id: "f2", day: "Friday", start: "09:30", end: "11:30", title: "DSA + LeetCode Combo" },
  { id: "f3", day: "Friday", start: "11:30", end: "12:30", title: "CSEL 448" },
  { id: "f4", day: "Friday", start: "12:30", end: "14:00", title: "Lunch + Break" },
  { id: "f5", day: "Friday", start: "14:00", end: "15:30", title: "CSEL 581" },
  { id: "f6", day: "Friday", start: "15:30", end: "16:30", title: "CSCA 423" },
  { id: "f7", day: "Friday", start: "16:30", end: "18:00", title: "Return + Power Nap" },
  { id: "f8", day: "Friday", start: "18:00", end: "19:30", title: "Planning Weekend Learning" },
  { id: "f9", day: "Friday", start: "19:30", end: "20:30", title: "Dinner" },
  { id: "f10", day: "Friday", start: "20:30", end: "22:30", title: "Light Coding / Review" },
  { id: "f11", day: "Friday", start: "22:30", end: "00:30", title: "Deep Focus Coding (Web Dev)" },

  // SATURDAY
  { id: "s1", day: "Saturday", start: "08:30", end: "09:30", title: "Breakfast" },
  { id: "s2", day: "Saturday", start: "09:30", end: "12:30", title: "Web Dev Deep Work" },
  { id: "s3", day: "Saturday", start: "12:30", end: "14:30", title: "Lunch + Break" },
  { id: "s4", day: "Saturday", start: "14:30", end: "16:30", title: "Contest + Practice" },
  { id: "s5", day: "Saturday", start: "16:30", end: "19:00", title: "Sports / Free Time" },
  { id: "s6", day: "Saturday", start: "19:30", end: "20:30", title: "Dinner" },
  { id: "s7", day: "Saturday", start: "20:30", end: "22:30", title: "Relax / Movie" },

  // SUNDAY
  { id: "su1", day: "Sunday", start: "09:00", end: "10:00", title: "Breakfast + Slow Start" },
  { id: "su2", day: "Sunday", start: "10:00", end: "13:00", title: "Weekly Revision" },
  { id: "su3", day: "Sunday", start: "13:00", end: "14:30", title: "Lunch" },
  { id: "su4", day: "Sunday", start: "14:30", end: "18:00", title: "Planning & Reading" },
  { id: "su5", day: "Sunday", start: "18:00", end: "19:30", title: "Walk + Refresh" },
  { id: "su6", day: "Sunday", start: "19:30", end: "20:30", title: "Dinner" },
  { id: "su7", day: "Sunday", start: "20:30", end: "23:59", title: "Free Day & Social" }
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let schedule = [];
let activeDay = getTodayName();
let notiIntervalId = null;
let alarmIntervalId = null;
let alarmLastTriggerDate = null;
const firedNotifications = new Set();

// DOM elements
let dayTabsEl, hoursColumnEl, taskListEl;
let importBtn, timetableFileInput, addTaskBtn, enableNotiBtn;
let alarmSoundEl, autoAlarmStatusEl;

// Modal elems
let taskModalBackdrop, taskDaySelect, taskStartInput, taskEndInput, taskTitleInput;
let saveTaskBtn, cancelTaskBtn, deleteTaskBtn, modalTitleEl;
let editingTaskId = null; // null => adding new

// ---------- INIT ----------

window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("chronosSchedule");
  schedule = stored ? JSON.parse(stored) : [...defaultSchedule];

  cacheElements();
  buildDayTabs();
  buildHoursColumn();
  renderActiveDay();
  populateModalDayOptions();
  updateAutoAlarmStatus();
  attachEventListeners();
});

function cacheElements() {
  dayTabsEl = document.getElementById("dayTabs");
  hoursColumnEl = document.getElementById("hoursColumn");
  taskListEl = document.getElementById("taskList");

  importBtn = document.getElementById("importBtn");
  timetableFileInput = document.getElementById("timetableFile");
  addTaskBtn = document.getElementById("addTaskBtn");
  enableNotiBtn = document.getElementById("enableNotiBtn");

  alarmSoundEl = document.getElementById("alarmSound");
  autoAlarmStatusEl = document.getElementById("autoAlarmStatus");

  taskModalBackdrop = document.getElementById("taskModalBackdrop");
  taskDaySelect = document.getElementById("taskDay");
  taskStartInput = document.getElementById("taskStart");
  taskEndInput = document.getElementById("taskEnd");
  taskTitleInput = document.getElementById("taskTitle");
  saveTaskBtn = document.getElementById("saveTaskBtn");
  cancelTaskBtn = document.getElementById("cancelTaskBtn");
  deleteTaskBtn = document.getElementById("deleteTaskBtn");
  modalTitleEl = document.getElementById("modalTitle");
}

// ---------- UI BUILD ----------

function buildDayTabs() {
  dayTabsEl.innerHTML = "";
  daysOfWeek.forEach((dayName) => {
    const btn = document.createElement("button");
    btn.textContent = dayName.slice(0, 3);
    if (dayName === activeDay) btn.classList.add("active");
    btn.addEventListener("click", () => {
      activeDay = dayName;
      document.querySelectorAll(".day-tabs button").forEach((b) =>
        b.classList.remove("active")
      );
      btn.classList.add("active");
      renderActiveDay();
    });
    dayTabsEl.appendChild(btn);
  });
}

function buildHoursColumn() {
  hoursColumnEl.innerHTML = "";
  for (let h = 0; h < 24; h++) {
    const row = document.createElement("div");
    row.className = "hour-row";
    const label = String(h).padStart(2, "0") + ":00";
    row.textContent = label;
    hoursColumnEl.appendChild(row);
  }
}

function renderActiveDay() {
  taskListEl.innerHTML = "";

  const tasks = schedule
    .filter((t) => t.day === activeDay)
    .sort((a, b) => (a.start < b.start ? -1 : 1));

  if (tasks.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "No tasks for this day yet. Tap “Add Task” to begin.";
    taskListEl.appendChild(empty);
    return;
  }

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = "task-card";

    // color variance
    if (task.title.toLowerCase().includes("deep focus") || task.title.toLowerCase().includes("web dev")) {
      card.classList.add("task-pill-green");
    } else if (task.title.toLowerCase().includes("class") || task.title.toLowerCase().includes("csel") || task.title.toLowerCase().includes("csca")) {
      card.classList.add("task-pill-gold");
    }

    const titleEl = document.createElement("div");
    titleEl.className = "task-title";
    titleEl.textContent = task.title;

    const timeEl = document.createElement("div");
    timeEl.className = "task-time";

    const timeSpan = document.createElement("span");
    timeSpan.textContent = task.end
      ? `${task.start}  –  ${task.end}`
      : task.start;

    timeEl.appendChild(timeSpan);

    card.appendChild(titleEl);
    card.appendChild(timeEl);

    card.addEventListener("click", () => openEditTaskModal(task.id));

    taskListEl.appendChild(card);
  });
}

function populateModalDayOptions() {
  taskDaySelect.innerHTML = "";
  daysOfWeek.forEach((day) => {
    const opt = document.createElement("option");
    opt.value = day;
    opt.textContent = day;
    taskDaySelect.appendChild(opt);
  });
}

// ---------- MODAL ----------

function openAddTaskModal() {
  editingTaskId = null;
  modalTitleEl.textContent = "Add Task";
  taskDaySelect.value = activeDay;
  taskStartInput.value = "";
  taskEndInput.value = "";
  taskTitleInput.value = "";
  deleteTaskBtn.classList.add("hidden");
  taskModalBackdrop.classList.remove("hidden");
}

function openEditTaskModal(taskId) {
  const task = schedule.find((t) => t.id === taskId);
  if (!task) return;
  editingTaskId = taskId;
  modalTitleEl.textContent = "Edit Task";
  taskDaySelect.value = task.day;
  taskStartInput.value = task.start;
  taskEndInput.value = task.end || "";
  taskTitleInput.value = task.title;
  deleteTaskBtn.classList.remove("hidden");
  taskModalBackdrop.classList.remove("hidden");
}

function closeTaskModal() {
  taskModalBackdrop.classList.add("hidden");
}

function saveTaskFromModal() {
  const day = taskDaySelect.value;
  const start = taskStartInput.value;
  const end = taskEndInput.value || "";
  const title = taskTitleInput.value.trim();

  if (!day || !start || !title) {
    alert("Day, start time and title are required.");
    return;
  }

  if (editingTaskId) {
    const idx = schedule.findIndex((t) => t.id === editingTaskId);
    if (idx >= 0) {
      schedule[idx].day = day;
      schedule[idx].start = start;
      schedule[idx].end = end;
      schedule[idx].title = title;
    }
  } else {
    const id = "t_" + Date.now() + "_" + Math.floor(Math.random() * 9999);
    schedule.push({ id, day, start, end, title });
  }

  saveSchedule();
  renderActiveDay();
  updateAutoAlarmStatus();
  closeTaskModal();
}

function deleteTaskFromModal() {
  if (!editingTaskId) return;
  if (!confirm("Delete this task?")) return;
  schedule = schedule.filter((t) => t.id !== editingTaskId);
  saveSchedule();
  renderActiveDay();
  updateAutoAlarmStatus();
  closeTaskModal();
}

// ---------- STORAGE ----------

function saveSchedule() {
  localStorage.setItem("chronosSchedule", JSON.stringify(schedule));
}

// ---------- CSV IMPORT ----------

function handleImportClick() {
  timetableFileInput.click();
}

function handleTimetableFileChange() {
  const file = timetableFileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const text = e.target.result;
      const parsed = parseCSVToSchedule(text);
      if (parsed.length === 0) {
        alert("No valid rows in CSV. Expected format: Day,Start,End,Task");
        return;
      }
      schedule = parsed;
      saveSchedule();
      renderActiveDay();
      updateAutoAlarmStatus();
      alert("Schedule replaced with uploaded timetable.");
    } catch (err) {
      console.error(err);
      alert("Error reading CSV. Check format and try again.");
    } finally {
      timetableFileInput.value = "";
    }
  };
  reader.readAsText(file);
}

function parseCSVToSchedule(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  if (!lines.length) return [];

  let startIndex = 0;
  const h = lines[0].toLowerCase();
  if (h.includes("day") && h.includes("time")) startIndex = 1;

  const out = [];

  for (let i = startIndex; i < lines.length; i++) {
    const row = lines[i];
    const parts = row.split(",");
    if (parts.length < 3) continue;

    const rawDay = parts[0].trim();
    const day = capitalizeFirst(rawDay);
    const start = parts[1].trim();
    let end = "";
    let title = "";

    if (parts.length === 3) {
      // Day,Time,Task
      title = parts[2].trim();
    } else {
      // Day,Start,End,Task (rest)
      end = parts[2].trim();
      title = parts.slice(3).join(",").trim();
    }

    if (!daysOfWeek.includes(day)) continue;
    if (!/^\d{2}:\d{2}$/.test(start)) continue;
    if (end && !/^\d{2}:\d{2}$/.test(end)) end = "";
    if (!title) continue;

    const id = "csv_" + i + "_" + Date.now();
    out.push({ id, day, start, end, title });
  }

  return out;
}

function capitalizeFirst(str) {
  const s = str.toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------- NOTIFICATIONS & AUTO ALARM ----------

function requestAndStartNotifications() {
  if (!("Notification" in window)) {
    alert("Notifications are not supported in this browser.");
    return;
  }

  const startLoops = () => {
    if (!notiIntervalId) {
      notiIntervalId = setInterval(checkAndFireNotifications, 1000);
    }
    if (!alarmIntervalId) {
      alarmIntervalId = setInterval(checkAutoAlarm, 1000);
    }
    alert("✅ Notifications & auto alarm running. Keep this tab open.");
  };

  if (Notification.permission === "granted") {
    startLoops();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") startLoops();
      else alert("Notification permission denied.");
    });
  } else {
    alert("Notification permission was previously denied in this browser.");
  }
}

function checkAndFireNotifications() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hh}:${mm}`;
  const todayName = daysOfWeek[now.getDay()];
  const dayKey = now.toDateString();

  schedule.forEach((task) => {
    if (task.day !== todayName) return;
    if (task.start !== currentTime) return;

    const key = `${dayKey}-${task.day}-${task.start}-${task.title}`;
    if (firedNotifications.has(key)) return;

    firedNotifications.add(key);
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("⏰ " + task.title, {
        body: `${task.day} • ${task.start}`
      });
    }
  });

  if (currentTime === "00:00") {
    firedNotifications.clear();
  }
}

function getEarliestStartForDay(dayName) {
  const tasks = schedule.filter((t) => t.day === dayName);
  if (!tasks.length) return null;
  const times = tasks.map((t) => t.start).sort();
  return times[0];
}

function updateAutoAlarmStatus() {
  const todayName = getTodayName();
  const earliest = getEarliestStartForDay(todayName);
  if (!earliest) {
    autoAlarmStatusEl.textContent =
      "No tasks scheduled for today. Alarm is off.";
  } else {
    autoAlarmStatusEl.textContent = `Daily alarm is set automatically to ${earliest} (first task today).`;
  }
}

function checkAutoAlarm() {
  const now = new Date();
  const todayName = daysOfWeek[now.getDay()];
  const earliest = getEarliestStartForDay(todayName);
  if (!earliest) return;

  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hh}:${mm}`;
  const todayKey = now.toDateString();

  if (currentTime === earliest && alarmLastTriggerDate !== todayKey) {
    alarmLastTriggerDate = todayKey;
    try {
      alarmSoundEl.currentTime = 0;
      alarmSoundEl.play();
    } catch (e) {
      console.log("Alarm audio may require a user gesture first.", e);
    }

    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("⏰ Daily Alarm", {
        body: `First task of the day is starting at ${earliest}.`
      });
    }
  }

  if (currentTime === "00:01") {
    alarmLastTriggerDate = null;
    updateAutoAlarmStatus();
  }
}

// ---------- HELPERS ----------

function getTodayName() {
  return daysOfWeek[new Date().getDay()];
}

// ---------- EVENT LISTENERS ----------

function attachEventListeners() {
  addTaskBtn.addEventListener("click", openAddTaskModal);
  cancelTaskBtn.addEventListener("click", closeTaskModal);
  saveTaskBtn.addEventListener("click", saveTaskFromModal);
  deleteTaskBtn.addEventListener("click", deleteTaskFromModal);

  importBtn.addEventListener("click", handleImportClick);
  timetableFileInput.addEventListener("change", handleTimetableFileChange);

  enableNotiBtn.addEventListener("click", requestAndStartNotifications);

  // Close modal when clicking backdrop (not inside modal)
  taskModalBackdrop.addEventListener("click", (e) => {
    if (e.target === taskModalBackdrop) closeTaskModal();
  });
}
