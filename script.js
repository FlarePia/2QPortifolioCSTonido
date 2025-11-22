const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000);

const faders = document.querySelectorAll('.fade-up');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(el => appearOnScroll.observe(el));

document.querySelectorAll('.creator-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('pulse-active');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('pulse-active');
  });
});

// Episode toggle feature
document.querySelectorAll('.ep-card .more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.ep-card');
    card.classList.toggle('active');
    btn.textContent = card.classList.contains('active') ? 'View Less' : 'View More';
  });
});

function runQuiz() {
  const q1 = document.getElementById('q1').value;
  const q2 = document.getElementById('q2').value;
  const resultCard = document.getElementById('resultCard');
  const quizResult = document.getElementById('quizResult');

  let character = {};
  
  if ((q1 === 'sword' && q2 === 'strategic') || q2 === 'strategic') {
    character = {
      name: 'Parrot',
      role: 'The Strategist',
      img: 'https://i.imgur.com/t3C0b6S.jpeg',
      desc: 'Calm, tactical, and always two steps ahead — you embody Parrot’s precision and leadership.'
    };
  } else if (q1 === 'tnt' || q2 === 'explosive') {
    character = {
      name: 'Flame',
      role: 'The Wildcard',
      img: 'https://i.imgur.com/6mLw9Yt.jpeg',
      desc: 'You’re explosive and unpredictable — a true agent of chaos like Flame!'
    };
  } else if (q1 === 'pickaxe' || q2 === 'creative') {
    character = {
      name: 'Wemmbu',
      role: 'The Builder',
      img: 'https://i.imgur.com/AMW7rOD.jpeg',
      desc: 'Creative, patient, and precise — you think in blueprints and bring worlds to life.'
    };
  } else {
    character = {
      name: 'Spoke',
      role: 'The Enforcer',
      img: 'https://i.imgur.com/nCYyVZC.jpeg',
      desc: 'You’re fearless, bold, and thrive in chaos — Spoke would be proud.'
    };
  }

  resultCard.innerHTML = `
    <img src="${character.img}" alt="${character.name}">
    <h4>${character.name}</h4>
    <p><strong>${character.role}</strong></p>
    <p>${character.desc}</p>
  `;

  resultCard.classList.add('show');
  quizResult.scrollIntoView({ behavior: 'smooth' });
}


function characterTurns(name, isLeft){
  const images = [
    "assets/" + name + "/front.png",
    "assets/" + name + "/left.png",
    "assets/" + name + "/back.png",
    "assets/" + name + "/right.png"
  ]

  const currentImage = document.getElementById(name).src;

  let index = 0;
  for (let i = 0; i < images.length; i++){
    if (currentImage.endsWith(images[i])) {   
      index = i;
      break;
    }
  }

  let direction = -1;
  if (isLeft) direction = 1;

  let newIndex = (index + direction + images.length) % images.length;
  document.getElementById(name).src = images[newIndex];
}
