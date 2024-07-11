document.addEventListener('DOMContentLoaded', () => {
  const mainText = document.querySelector('.main-text');
  const cursor = document.getElementById('cursor');
  const clickMeText = document.querySelector('.click-me');
  const seriousCheckbox = document.querySelector('.serious-checkbox');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    clickMeText.style.left = `${e.pageX + 25}px`;
    clickMeText.style.top = `${e.pageY + 30}px`;
  });

  mainText.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
    clickMeText.style.display = 'block';
  });

  mainText.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
    clickMeText.style.display = 'none';
  });

  seriousCheckbox.addEventListener('mouseenter', () => {

  });

  seriousCheckbox.addEventListener('mouseleave', () => {

  });

  // Deafult pointer over handle
  document.querySelectorAll('a, button, .hover-target').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });

    seriousCheckbox.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
  
    seriousCheckbox.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
});
