// ==========================================================================
// 📱 1. 移动端菜单切换逻辑 (已加入安全防御检测)
// ==========================================================================
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

// 确保页面上确实存在这两个菜单元素，才绑定事件，防止因找不到元素而卡死后续脚本
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // 点击菜单内的任意链接后，自动收起菜单
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// ==========================================================================
// 📐 2. 刻度尺鼠标联动平移交互 (精密阻尼缓动)
// ==========================================================================
const rulerTrack = document.querySelector(".ruler-track");

if (rulerTrack) {
  window.addEventListener("mousemove", (e) => {
    // 1. 获取当前鼠标横坐标占屏幕总宽度的比例 (0 ~ 1)
    const mouseRatio = e.clientX / window.innerWidth;

    // 🌟 核心修正：反转逻辑，实现同向跟随
    // 将逻辑从 (0.5 - mouseRatio) 改为 (mouseRatio - 0.5)
    // 这样：鼠标最右侧计算出 +30px（同向右）；鼠标最左侧计算出 -30px（同向左）。
    const moveX = (mouseRatio - 0.5) * 60;

    // 3. 将精密计算好的像素值，实时传递给 CSS 变量
    rulerTrack.style.setProperty("--mouse-x", `${moveX}px`);
  });
}
