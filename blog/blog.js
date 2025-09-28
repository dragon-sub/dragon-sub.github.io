function render(posts) {
  const hash = location.hash.slice(1);
  const container = document.getElementById("blog");

  if (/^s\d+$/.test(hash)) {
    const pageNum = parseInt(hash.slice(1), 10);
    const start = (pageNum - 1) * 5;
    const end = start + 5;
    const list = posts.slice(start, end);

    container.innerHTML = '<div class="main-title">記事一覧 (Page ' + pageNum + ")</div>";
    list.forEach(post => {
      container.innerHTML += `
        <br>
        <div class="post-summary">
          <div class="blog-posts"><a href="#k${post.id}">${post.title}</a></div>
          <p>${post.date}</p>
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
