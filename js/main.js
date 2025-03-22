onload = () => {
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");

      const titles = ('Thanks. I Love You Fey ♡').split('');
      const titleElement = document.getElementById('title');
      let index = 0;

      function appendTitle() {
          if (index < titles.length) {
              titleElement.innerHTML += titles[index];
              index++;
              setTimeout(appendTitle, 150); // 300ms delay untuk efek mengetik
          }
      }

      appendTitle();

      clearTimeout(c);
  }, 1000);
};

