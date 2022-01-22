//Filtra uma tabela pelo texto digitado usando expressão regular

filterByTypeText = (elInput, elTrTarget, elTdTarget, displayNone, displayInherit) => {
    //elInput é o input que receberá o texto digitado para comparação
    //elTrTarget são todos os elementos que será verificados para comparação (serão iterados)
    //elTdTarget é o elemento que foi iterado dentro
    //displayNone e displayInherit são as propriedades do display. Para não ter qe criar uma classe nessa funcção
    //... optei por dar a opção da escolha do display de acordo com o projeto. Nesse não funcionou o inherit, então usei o table-row...
    //... dessa forma a fução fica completamente dinâmica

    //pegar o campo que irá receber os dados didgitados
    let filterField = document.querySelector(elInput)   

    //Inicia o escutador de evento em busca do evento input
    filterField.addEventListener("input", function(event) {
        
        //console.log(this.value)
        //Pegar o elemento da tabela que será o alvo da pesquisa
        let trTarget = document.querySelectorAll(elTrTarget)

        //se tiver algo digitado dentro do input(value > 0)
        if(this.value.length > 0) {
            //itere por todos os elementos da lista e em cada iteração faça....
            //itere por todos os elementos da tabela ...
            trTarget.forEach((data) => {
                //coloque cada elemento na variavel targetElement ...
                let targetElement = data;
                
                //... Preciso que compare o elemento da iteração atual, com o elemento a ser pesquisado
                //... como o elemento pesquisado será o nome do paciente, vamos pegar o elemento onde ele se encontra
                //... com isso pegamos todos os elementos com a classe .info-none (como é uma lista, vamos usar o querySelectAll)
                let tdTarget = targetElement.querySelector(elTdTarget)

                //... como o tdNome é um elemento e não o conteúdo pesquisado, temos que pegar o conteúdo pesquisado
                //... pegamos entaão o seu texto e colocamos na variavel nome.
                //... agora sempre que disser nome, estarei me referindo ao conteudo do input
                let comparableText = tdTarget.textContent //elemento da pesquisa


                // Agora vamos criar uma experessão regualar para executar a filtragem por cada letra digitada
            // a expressão regular permite indigar flags, como parametros. A fla i diz que a busca será por case insensitive
                // se o comparableText for diferente do digitado no input ...
                var experessaoRegular = new RegExp(this.value, 'i');

                //Para exutar a filtragem, vamos criar uma condição para testar o comparableText que está na tdNome, ou seja, o comparableText que está cadastrado na tabela.
                //se tiver uma letra pelo menos igual ...
                if(!experessaoRegular.test(comparableText)){
                    // esconde o paciente da iteração atual
                    //targetElement.classList.add('invisivel')
                    targetElement.style.display = displayNone

                }else{ //senao
                    // exiba o paciente da iteração atual
                    targetElement.style.display = displayInherit
                    //targetElement.classList.remove('invisivel')
                }
            })

            //Se o input não tiver conteúdo (esse else é primeiro if desta função)
        }else{

            //itere por todos os elementos da tabela ...
            trTarget.forEach((data) => {
                //coloque cada elemento na variavel targetElement ...
                let targetElement = data;
                //deixe o elemento visível (removendo a classe invisivel dele)
                //targetElement.classList.remove('invisivel')
                targetElement.style.display = displayInherit
            })  

        } 
    })

}

filterByTypeText('#filtrar-tabela', '.paciente', '.info-nome', 'none', 'table-row')


// Exemplo da função sem os comentários
/*
filterByTypeText = (elInput, elTrTarget, elTdTarget, displayNone, displayInherit) => {
    let filterField = document.querySelector(elInput)   
    filterField.addEventListener("input", function(event) {
        let trTarget = document.querySelectorAll(elTrTarget)

        if(this.value.length > 0) {
            for(let i = 0; i<trTarget.length;i++){
                let targetElement = trTarget[i];
                let tdTarget = targetElement.querySelector(elTdTarget)
                let comparableText = tdTarget.textContent 

                var experessaoRegular = new RegExp(this.value, 'i');
                if(!experessaoRegular.test(comparableText)){

                    targetElement.style.display = displayNone
                }else{
                    targetElement.style.display = displayInherit
                }
            }
        }else{
            for(let i = 0; i<trTarget.length;i++){
                let targetElement = trTarget[i];
                targetElement.style.display = displayInherit

            }
        } 
    })
}
*/