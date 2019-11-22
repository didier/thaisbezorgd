// Used to grab all dishes and metadata from a different source.

const gerechten = [];
document.querySelectorAll('#main form').forEach((gerecht, index) =>
  gerechten.push({
    id: gerecht.querySelector('.nummer').textContent.replace('.', '') * 1 - 1,
    name: gerecht.querySelector('.naam').textContent,
    desc: gerecht.querySelector('.beschr').textContent,
    category: document.querySelector('h1').textContent.toLowerCase(),
    price:
      gerecht
        .querySelector('.prijs')
        .textContent.replace('€', '')
        .replace(['&nbsp;', ' '], '')
        .replace(',', '.') * 1
  })
);
console.log(JSON.stringify(gerechten));
