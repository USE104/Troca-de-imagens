function trocarImagem(filename,animalname){
    document.querySelector('.imagem').setAttribute('src','images/'+filename)
    
    document.querySelector('.imagem').setAttribute('data-animal',animalname)
    }
    
    function pegarAnimal(){
        let SO = document.querySelector('.imagem').getAttribute('data-animal')
        alert("O Sistema é "+SO)
    }