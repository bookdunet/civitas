/* ──────────────────────────────
   Civitas Life · Bookdu Media
   Site Integrity Protection v2025
   For GitHub Pages
   ────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // 🪪 브랜드 서명 표시
  console.log(
    "%cCIVITAS LIFE — Because trust is the oldest currency.",
    "color:#0ea5e9;font-weight:bold;font-size:14px;"
  );
  console.log(
    "Official Site: https://bookdu.net | Report abuse: editor@bookdu.net"
  );

  // 🧱 도메인 무단 복제 탐지
  const legitDomains = ["bookdu.net", "bookdu.github.io", "civitas.bookdu.net"];
  const host = window.location.hostname;
  if (!legitDomains.some((d) => host.includes(d))) {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;font-family:'Noto Sans KR',sans-serif;color:#1e293b;">
        <h1>Unauthorized Copy Detected</h1>
        <p style="max-width:420px;line-height:1.6;">
          이 사이트는 Civitas Life의 공식 도메인이 아닙니다.<br>
          원본: <a href="https://bookdu.net" style="color:#0ea5e9;">https://bookdu.net</a>
        </p>
      </div>`;
    document.title = "Unauthorized Copy — Civitas Life";
  }

  // 🧠 HTML 워터마크 삽입
  const mark = document.createComment(
    "Civitas Life · Bookdu Media Digital Signature v2025.10"
  );
  document.body.appendChild(mark);
});

