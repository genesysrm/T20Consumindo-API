let dadosCep;
  
   function buscarDados(){
      let cep = document.querySelector('#cep').value;
      let url = `http://viacep.com.br/ws/${cep}/json/`;
       fetch(url).then(resp => resp.json()).then(data => dadosCep = data).then(preencherDados => { //função para criar os novos elementos, não funcionava porque debiamos criar os elementos dentro da própria requisição cuando termina os dados não existem mais por isso quando estava tentando acceder de fora ele não conseguia achar
         console.log(dadosCep)
         let container = document.querySelector('#informacoes')
         let bairro = document.createElement('li');
         bairro.innerHTML = `<label>Bairro:</label> ${dadosCep.bairro}`;
         container.appendChild(bairro);  
       }).catch(erro => console.log(erro));
       console.log(url)
   }

   //eventos
   document.querySelector('#btn-submit').addEventListener('click',function(evt){
      evt.preventDefault();
   })
   document.querySelector('#btn-submit').addEventListener('click',buscarDados)
   


  

 





