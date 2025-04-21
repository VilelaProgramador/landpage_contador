AOS.init({
    duration: 1000, 
    once: true      
  });

  const dataEvento = new Date(2025, 6, 8, 19, 0, 0); // 08/07/2025 19:00

  function atualizarContador() {
      const agora = new Date();
      const tempoRestante = dataEvento - agora;

      if (tempoRestante <= 0) {
          document.querySelector('.contador').innerHTML = "<p style='font-size: 1.5rem; color: #B30059;'>A live já começou ou terminou!</p>";
          return;
      }

      const segundos = Math.floor((tempoRestante / 1000) % 60);
      const minutos = Math.floor((tempoRestante / 1000 / 60) % 60);
      const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
      const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

      const formatar = (num) => num.toString().padStart(2, '0');

      document.querySelectorAll('.contador__item h3')[0].textContent = formatar(dias);
      document.querySelectorAll('.contador__item h3')[1].textContent = formatar(horas);
      document.querySelectorAll('.contador__item h3')[2].textContent = formatar(minutos);
      document.querySelectorAll('.contador__item h3')[3].textContent = formatar(segundos);
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
