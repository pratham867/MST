if(window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote',
    time: 5000, 
  })
  
  new SimpleSlide({
    slide: 'portfolio',
    time: 5000,
    nav: true,
  })
}
if(window.SimpleAnime) {
  new SimpleAnime();
}
if(window.SimpleForm){
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#send", // seletor do botão
    erro: "<div id='form-error'><h2>Error!</h2><p>Something is Wrong</p></div>", // mensagem de erro
    sucesso: "<div id='form-success'><h2>Please try again</p></div>", // mensagem de sucesso
  });
}