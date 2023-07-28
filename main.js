const search = document.getElementById('search')
const articles = document.querySelectorAll('aside figure')

search.addEventListener('input', filterArticles)

function filterArticles() {
  const inputText = search.value?.toLowerCase()

  if (!inputText) {
    articles.forEach(article => article.style.display = 'flex')
    return
  }

  for (const article of articles) {
    const title = article.querySelector('h3').textContent?.toLowerCase()

    if (title.includes(inputText)) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  }
}
