function render(posts) {
  const hash = location.hash.slice(1);
  const container = document.getElementById("blog");

  if (/^s\d+$/.test(hash)) {
    const pageNum = parseInt(hash.slice(1), 10);
    const start = (pageNum - 1) * 5;
    const end = start + 5;
    const list = posts.slice(start, end);

    container.innerHTML = '<div class="main-title">記事一覧 (Page ' + pageNum + `)</div><div class="main-text"><a href="#s${pageNum - 1}">[前のページ]</a> | <a href="#s${pageNum + 1}">[次のページ]</a></div>`;
    list.forEach(post => {
      container.innerHTML += `
        <br>
        <div class="post-summary">
          <a href="#k${post.id}">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-direction: row; border-radius: 15px; display: block;" id="blog-card">
              <div style="display: flex; flex-direction: column; display: inline-block;">
                <div style="font-size: 20px; padding: 10px 0px 5px 10px;">${post.title}</div>
                <div style="font-size: 16px: padding: 5px 0px 10px 10px;">${post.date}</div>
              </div>
              <div style="background-color: #f3f4f6; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 16px; display: inline-block;">約${Math.round(post.content.length / 500)}分</div>
            </div>
          </a>
        </div>
      `;
    });

  } else if (/^k\d+$/.test(hash)) {
    const id = parseInt(hash.slice(1), 10);
    const post = posts.find(p => p.id == id);

    if (post) {
      container.innerHTML = `
        <div class="main-title">${post.title}</div>
        <p class="blog-text">${post.date}</p>
        ${post.img ? `<img src="${post.img}" alt="${post.title}" class="blog-img">` : ""}
        <p class="blog-text">${post.content}</p>
        <input type="button" onclick="history.back();" value="戻る" class="blog-button">
      `;
    } else {
      container.innerHTML = "<p>記事が見つかりません。</p>";
    }

  } else {
    location.hash = "#s1";
  }
}

fetch("blog.json")
  .then(res => res.json())
  .then(posts => {
    render(posts);
    window.addEventListener("hashchange", () => render(posts));
  });







