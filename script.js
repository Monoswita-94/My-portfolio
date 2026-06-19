 function toggleMenu(){
    document.getElementById('nav').classList.toggle('show');
  }

  function toggleTheme(){
    document.body.classList.toggle('light');
    const icon = document.getElementById('themeIcon');
    icon.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  }

  function handleSubmit(e){
    e.preventDefault();
    alert('Thanks for reaching out! (This is a demo — hook this up to a real backend to receive messages.)');
    e.target.reset();
    return false;
  }

  // Typing effect
  const texts = ["Web Developer", "Designer", "Frontend Enthusiast"];
  let i = 0, j = 0, isDeleting = false;

  function type(){
    const current = texts[i];
    const typingEl = document.getElementById("typing");

    if(isDeleting){
      typingEl.textContent = current.substring(0, j--);
    } else {
      typingEl.textContent = current.substring(0, j++);
    }

    if(!isDeleting && j === current.length){
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
    if(isDeleting && j === 0){
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
    setTimeout(type, 100);
  }

  type();

  // Scroll reveal
  const fadeElements = document.querySelectorAll('.fade');

  const showOnScroll = () => {
    fadeElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if(elementTop < window.innerHeight - 100){
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', showOnScroll);
  showOnScroll();
