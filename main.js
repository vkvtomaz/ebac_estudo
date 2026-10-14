$(document).ready(function () {
  const $form =$('#form-tarefa');
  const $inputTarefa =$('#nome-tarefa');
  const $listaTarefas =$('#lista-tarefas');

  //Evento de submissão do formulário e inserção do <li>
  $form.on('submit', function (e) {
    e.preventDefault();

    const nomeTarefa = $inputTarefa.val().trim();

    if (nomeTarefa !== '') {
      // Cria o novo elemento <li>
      const $novoItem =$(`<li>${nomeTarefa}</li>`);

      // Oculta e adiciona à lista com animação suave de fadeIn
      $novoItem.hide().appendTo($listaTarefas).fadeIn(300);

      // Limpa o campo e foca novamente
      $inputTarefa.val('');$inputTarefa.focus();
    }
  });

  // Delegação de evento de clique para aplicar o line-through
  $listaTarefas.on('click', 'li', function () {$(this).toggleClass('concluida');
  });
});