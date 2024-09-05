document.addEventListener('DOMContentLoaded', function () {
  const conteudo = document.getElementById('conteudo');

  // Funnções responsáveis por carregar páginas dinamicamente
  function carregarPagina(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar a página: ' + response.status);
        }
        return response.text();
      })
      .then(html => {
        conteudo.innerHTML = html;
      })
      .catch(error => {
        conteudo.innerHTML = `<p>Desculpe, ocorreu um erro ao carregar o conteúdo: ${error.message}</p>`;
      });
  }

  function carregarInicio() {
    carregarPagina('./src/home.html');
  }

  function carregarArtisticas() {
    carregarPagina('./src/artisticas.html');
  }

  function carregarPaisagens() {
    carregarPagina('./src/paisagens.html');
  }

  function carregarSobre() {
    carregarPagina('./src/sobre.html');
  }

  carregarInicio();

  // Função para lidar com click's normais
  function adicionarEventoDeClique(idElemento, funcaoDeCarregamento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
      elemento.addEventListener('click', function (event) {
        funcaoDeCarregamento();
      });
    }
  }

  adicionarEventoDeClique('link-home', carregarInicio);
  adicionarEventoDeClique('link-artisticas', carregarArtisticas);
  adicionarEventoDeClique('link-paisagens', carregarPaisagens);
  adicionarEventoDeClique('link-sobre', carregarSobre);

  
  // Listener para lidar com cliques de conteúdos dinamicamente adicionados
  document.body.addEventListener('click', function (event) {
    const id = event.target.id;
    if (id === 'main-btn-artistica') {
      carregarArtisticas();
    } else if (id === 'main-btn-paisagem') {
      carregarPaisagens();
    } else if (id === 'main-btn-profile') {
      carregarSobre();
    }
  });
});