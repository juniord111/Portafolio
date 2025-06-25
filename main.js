// ========== 1. Scroll suave ==========
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(enlace.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ========== 2. Animaciones al hacer scroll ==========
const animarAlScroll = () => {
  const elementos = document.querySelectorAll('.proyecto, .animar');
  const triggerBottom = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('animate-fade-in');
    } else {
      el.classList.remove('animate-fade-in');
    }
  });
};

window.addEventListener('scroll', animarAlScroll);
window.addEventListener('load', animarAlScroll);

// ========== 3. Validación de formulario ==========
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos.');
      e.preventDefault();
    }
  });
}

// ========== 4. Botón "Ir arriba" ==========
const btnUp = document.createElement('button');
btnUp.innerHTML = '⬆';
btnUp.className = 'fixed bottom-5 right-5 p-3 bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-400 hidden z-50';
document.body.appendChild(btnUp);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnUp.classList.remove('hidden');
  } else {
    btnUp.classList.add('hidden');
  }
});

btnUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== 5. Efecto de hover en títulos ==========
document.querySelectorAll('h2, h3').forEach(titulo => {
  titulo.addEventListener('mouseenter', () => {
    titulo.classList.add('text-yellow-400', 'scale-105');
  });
  titulo.addEventListener('mouseleave', () => {
    titulo.classList.remove('text-yellow-400', 'scale-105');
  });
});
const linterna = document.getElementById('linterna');
  document.addEventListener('mousemove', e => {
    linterna.style.left = `${e.clientX}px`;
    linterna.style.top = `${e.clientY}px`;
  });
    const btnModo = document.getElementById('modoDetective');
  let modoOn = false;

  btnModo.addEventListener('click', () => {
    modoOn = !modoOn;
    if (modoOn) {
      document.body.style.filter = 'contrast(120%) brightness(60%) hue-rotate(300deg)';
      document.body.style.transition = 'filter 0.4s';
      btnModo.textContent = '☀️ Modo Normal';
    } else {
      document.body.style.filter = 'none';
      btnModo.textContent = '🕵️ Modo Detective';
    }
  });
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination' }
  });
  // Guardar estado del modo detective
  const modoGuardado = localStorage.getItem('modoDetective');
  if (modoGuardado === 'on') {
    document.body.style.filter = 'contrast(120%) brightness(60%) hue-rotate(300deg)';
    document.getElementById('modoDetective').textContent = '☀️ Modo Normal';
  }

  btnModo.addEventListener('click', () => {
    if (modoOn) {
      localStorage.setItem('modoDetective', 'on');
    } else {
      localStorage.setItem('modoDetective', 'off');
    }
  });
if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.classList.add('movil');
  }