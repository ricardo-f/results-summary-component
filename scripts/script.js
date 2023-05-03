fetch('scripts/data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('dynamic-list');
    data.forEach(item => {
      const li = document.createElement('li');
      li.classList.add(item.category.toLowerCase());
      const img = document.createElement('img');
      img.src = item.icon;
      img.alt = item.category;
      const div1 = document.createElement('div');
      div1.classList.add('icon');
      div1.appendChild(img);
      const div2 = document.createElement('div');
      div2.classList.add('category');
      div2.textContent = item.category;
      const div3 = document.createElement('div');
      div3.classList.add('score');
      div3.textContent = item.score;
      const div4 = document.createElement('div');
      div4.classList.add('score-text');
      div4.textContent = '/100';
      li.appendChild(div1);
      li.appendChild(div2);
      li.appendChild(div3);
      li.appendChild(div4);
      list.appendChild(li);
    });
  })
  .catch(error => console.error(error));