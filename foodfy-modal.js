    const ModalReceitas = document.querySelector(".modal-receitas")
    const Receitas = document.querySelectorAll(".receitinha")


    for (let Receita of Receitas) {
        Receita.addEventListener('click', function(){
            ModalReceitas.classList.add('Ativo');
        })
    }

    document.querySelector(".close-modal").addEventListener('click', function (){
            ModalReceitas.classList.remove('Ativo');
    })