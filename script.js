document.addEventListener('DOMContentLoaded', function () {
  // Tema escuro
  const html = document.documentElement;
  const btnTheme = document.getElementById('toggleTheme');
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    btnTheme.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  }
  setTheme('dark');
  btnTheme.addEventListener('click', function () {
    const currentTheme = html.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Carrossel de projetos
  const projetos = [
    {
      img: './img/pitch-regatepet.png',
      alt: 'Capa do estudo de caso Pitch Resgate Pet',
      title: 'Pitch Resgate Pet',
      desc: 'Aplicativo voltado para ONGs e governo, com recursos que permitem acionar resgates de animais de rua, visualizar eventos, conhecer parceiros e acessar informações sobre ONGs participantes.',
      link: 'https://www.behance.net/gallery/212243467/Pitch-Resgate-Pet'
    },
    {
      img: './img/miv-resgatepet.png',
      alt: 'Capa do estudo de caso Manual de Identidade Visual Resgate Pet',
      title: 'Manual de Identidade Visual Resgate Pet',
      desc: 'Esse manual do Aplicativo Resgate Pet é importante para manter a identidade da marca forte e reconhecível em todas as plataformas e junto ao público.',
      link: 'https://www.behance.net/gallery/210197349/Manual-de-Identidade-Visual-Resgate-Pet'
    },
    {
      img: './img/design-system.jpg',
      alt: 'Capa do estudo de caso Design System Resgate Pet',
      title: 'Design System Resgate Pet',
      desc: 'O Design System do Resgate Pet garante consistência e eficiência no design, com padrões e componentes que facilitam a criação e manutenção das interfaces.',
      link: 'https://www.behance.net/gallery/210207475/VdC-Styles-Design-System'
    },
    {
      img: './img/resgate-pet.jpg',
      alt: 'Capa do estudo de caso Aplicativo Resgate Pet',
      title: 'Aplicativo Resgate Pet',
      desc: 'O aplicativo Resgate Pet foi desenvolvido para facilitar o resgate de animais em situação de rua por pessoas comuns dispostas a ajudar.',
      link: 'https://www.behance.net/gallery/210818549/Aplicativo-Resgate-Pet'
    },
    {
      img: './img/healthdoc.jpg',
      alt: 'Capa do estudo de caso Aplicativo HealthDoc',
      title: 'Aplicativo HealthDoc',
      desc: 'O aplicativo HealthDoc foi desenvolvido para facilitar o acesso a informações de saúde e bem-estar para usuários em todo o mundo.',
      link: 'https://www.behance.net/gallery/218490207/HealthDoc-Resistros-de-Pacientes'
    },
    {
      img: './img/sorveteria-sabor-de-verão.png',
      alt: 'Capa do estudo de caso Midia Social Sorveteria Sabor de Verão',
      title: 'Midia Social Sorveteria Sabor de Verão',
      desc: 'Estudo de caso para mídia social da sorveteria Sabor de Verão.',
      link: 'https://www.behance.net/gallery/221181323/Sorveteria-Sabor-de-Verao-%28ficticio%29'
    },
    {
      img: './img/ebook.png',
      alt: 'Capa do estudo de caso Criando um Ebook com ChatGPT & MidJourney',
      title: 'Criando um Ebook com ChatGPT & MidJourney',
      desc: 'Estudo de caso para a criação de um Ebook utilizando ChatGPT e MidJourney.',
      link: 'https://www.behance.net/gallery/228884855/-Criando-um-Ebook-com-ChatGPT-MidJourney'
    }

  ];

  // Função para embaralhar projetos
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(projetos);

  let current = 0;
  const groupSize = 4; // Exibe 4 projetos por página
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const indicators = document.querySelector('.carousel-indicators');
  const totalGroups = Math.ceil(projetos.length / groupSize);

  function showProjects(startIdx) {
    let html = '';
    for (let i = 0; i < groupSize; i++) {
      const idx = (startIdx + i) % projetos.length;
      const p = projetos[idx];
      html += `
        <article class="card" aria-label="${p.title}">
          <img src="${p.img}" alt="${p.alt}" />
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <a href="${p.link}" target="_blank" rel="noopener">Ver projeto</a>
        </article>
      `;
    }
    track.innerHTML = html;

    // Indicadores de navegação
    let indHtml = '';
    for (let i = 0; i < totalGroups; i++) {
      indHtml += `<span class="${i === Math.floor(startIdx / groupSize) ? 'active' : ''}"></span>`;
    }
    indicators.innerHTML = indHtml;
  }

  prevBtn.addEventListener('click', () => {
    current = (current - groupSize + projetos.length) % projetos.length;
    showProjects(current);
    track.focus();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + groupSize) % projetos.length;
    showProjects(current);
    track.focus();
  });

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  showProjects(current);
});