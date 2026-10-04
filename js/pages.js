/* Ăn Thôi - hiển thị Thực đơn, Journal và trang chi tiết bài viết từ js/data.js.
   File này nạp TRƯỚC script.js để hiệu ứng reveal áp dụng được cho nội dung vừa tạo. */
(() => {
  const D = window.AN_THOI_DATA || {};
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  /* Ảnh thiếu/lỗi -> tự gỡ thẻ, giữ nền gradient của khung .media */
  const img = (src, alt) => src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">` : "";

  /* ---------- THỰC ĐƠN ---------- */
  const dish = i => `<article class="card2 reveal"><div class="media">${img(i.image, i.name)}</div>
    <div class="card2__b"><div class="card2__row"><h3>${esc(i.name)}</h3><span class="price">${esc(i.price)}</span></div><p>${esc(i.desc)}</p></div></article>`;
  const cards = list => `<div class="cards">${list.map(dish).join("")}</div>`;

  const sig = $("#signature");
  if (sig && D.menu) sig.innerHTML = D.menu.signature.map((i, n) => `<article class="row reveal${n % 2 ? " row--rev" : ""}">
    <div class="media zoom">${img(i.image, i.name)}</div>
    <div class="row__t"><p class="eyebrow">Món đặc trưng</p><h3>${esc(i.name)}</h3><p>${esc(i.desc)}</p><p class="note">${esc(i.story)}</p></div></article>`).join("");

  const groups = $("#menu-groups"), chips = $("#menu-chips");
  if (groups && D.menu) {
    groups.innerHTML = D.menu.categories.map(c => `<div class="menu-group" data-cat="${esc(c.name)}"><h3 class="group-title">${esc(c.name)}</h3>${cards(c.items)}</div>`).join("");
    const names = ["Tất cả", ...D.menu.categories.map(c => c.name)];
    chips.innerHTML = names.map((n, k) => `<button type="button" class="chip" aria-pressed="${k === 0}">${esc(n)}</button>`).join("");
    chips.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      [...chips.children].forEach(x => x.setAttribute("aria-pressed", x === b));
      groups.querySelectorAll(".menu-group").forEach(g => g.hidden = b.textContent !== "Tất cả" && g.dataset.cat !== b.textContent);
    });
  }
  if ($("#drinks") && D.menu) $("#drinks").innerHTML = cards(D.menu.drinks);
  if ($("#combos") && D.menu) $("#combos").innerHTML = cards(D.menu.combos);

  /* ---------- JOURNAL ---------- */
  const posts = (D.journal && D.journal.posts) || [];
  const link = p => `bai-viet.html?id=${encodeURIComponent(p.id)}`;
  const featured = $("#featured");
  if (featured && posts.length) {
    const f = posts.find(p => p.featured) || posts[0];
    featured.innerHTML = `<a class="feat reveal" href="${link(f)}"><div class="media zoom">${img(f.image, f.title)}</div>
      <div class="feat__t"><p class="eyebrow">Bài viết nổi bật · ${esc(f.category)}</p><h2>${esc(f.title)}</h2><p class="muted">${esc(f.excerpt)}</p>
      <span class="link">Đọc bài viết <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 10h14M11 4l6 6-6 6"/></svg></span><small class="date">${esc(f.date)}</small></div></a>`;
  }
  const grid = $("#journal-grid"), jchips = $("#journal-chips");
  if (grid) {
    const draw = cat => {
      const list = posts.filter(p => !cat || p.category === cat);
      grid.innerHTML = list.length ? list.map(p => `<a class="card2 card2--post" href="${link(p)}"><div class="media">${img(p.image, p.title)}</div>
        <div class="card2__b"><p class="meta"><span>${esc(p.category)}</span><span>${esc(p.date)}</span></p><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p></div></a>`).join("")
        : `<p class="muted">Chưa có bài viết trong chủ đề này.</p>`;
    };
    draw("");
    const cats = ["Tất cả", ...((D.journal && D.journal.categories) || [])];
    jchips.innerHTML = cats.map((n, k) => `<button type="button" class="chip" aria-pressed="${k === 0}">${esc(n)}</button>`).join("");
    jchips.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      [...jchips.children].forEach(x => x.setAttribute("aria-pressed", x === b));
      draw(b.textContent === "Tất cả" ? "" : b.textContent);
    });
  }

  /* ---------- CHI TIẾT BÀI VIẾT (bai-viet.html?id=...) ---------- */
  const art = $("#article");
  if (art) {
    const p = posts.find(x => x.id === new URLSearchParams(location.search).get("id"));
    if (!p) { $("#a-title").textContent = "Không tìm thấy bài viết"; art.hidden = true; }
    else {
      document.title = `${p.title} - Ăn Thôi`;
      $("#a-cat").textContent = p.category; $("#a-title").textContent = p.title; $("#a-date").textContent = p.date;
      $("#a-cover").innerHTML = img(p.image, p.title);
      $("#a-body").innerHTML = (p.body || []).map(t => `<p>${esc(t)}</p>`).join("");
    }
  }
})();