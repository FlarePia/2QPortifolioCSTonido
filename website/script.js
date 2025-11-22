// slideshow
(function(){
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    let idx = 0;
    setInterval(()=>{
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 3500);
  })();
  
  // toggle episode summaries
  function toggleEp(el){
    const ep = el.closest('.ep');
    const full = ep.querySelector('.ep-full');
    if(full.style.display === 'block'){
      full.style.display = 'none';
      el.textContent = 'View More';
    } else {
      full.style.display = 'block';
      el.textContent = 'View Less';
    }
  }
  
  // expandable characters
  document.querySelectorAll('.character').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.character').forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.toggle('active');
    });
  });
  
  // interactive quiz
  function runQuiz(){
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const resultCard = document.getElementById('resultCard');
  
  
    const mapping = {
      sword: 'Spoke',
      pickaxe: 'Wemmbu',
      bow: 'Parrot',
      tnt: 'Flame',
      strategic: 'Parrot',
      chaotic: 'Spoke',
      creative: 'Wemmbu',
      explosive: 'Flame'
    };
  
    const results = {
      Parrot: {
        img: 'https://i.imgur.com/t3C0b6S.jpeg',
        name: 'Parrot',
        role: 'The Strategist',
        desc: 'Calculated and calm under pressure. Every move is a step in a grander plan.'
      },
      Spoke: {
        img: 'https://i.imgur.com/nCYyVZC.jpeg',
        name: 'Spoke',
        role: 'The Enforcer',
        desc: 'Thrives on chaos, strength, and raw unpredictability in every fight.'
      },
      Wemmbu: {
        img: 'https://i.imgur.com/AMW7rOD.jpeg',
        name: 'Wemmbu',
        role: 'The Builder',
        desc: 'Creative and precise — his bases are both deadly and beautiful.'
      },
      Flame: {
        img: 'https://i.imgur.com/6mLw9Yt.jpeg',
        name: 'Flame',
        role: 'The Wildcard',
        desc: 'Explosive energy and fearless action define Flame s approach to everything.'
      }
    };
  
    const choice = mapping[q1] || mapping[q2] || 'Parrot';
    const char = results[choice];
  
    resultCard.innerHTML = `
      <div class="card" style="animation:fadeIn .4s ease;">
        <img src="${char.img}" alt="${char.name}" style="width:100%;border-radius:8px;">
        <h3>${char.name}</h3>
        <p>${char.role}</p>
        <p style="color:var(--muted)">${char.desc}</p>
      </div>
    `;
  }

  function wifiesturns(isLeft){
    const images = [
      "assets/Wifies/front.png",
      "assets/Wifies/left.png",
      "assets/Wifies/back.png",
      "assets/Wifies/right.png"
    ]

    const currentImage = document.getElementById('Wifies').src;

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
    document.getElementById('Wifies').src = images[newIndex];
  }