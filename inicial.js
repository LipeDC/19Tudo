
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuToggle.querySelectorAll(".bar").forEach(bar => {
            bar.classList.toggle("active");
        });
    });

function exibirAlertaPersonalizado() {
  
  Swal.fire({
    title: 'Você tem certeza que deseja chamar a polícia?',
    text: "Essa ação não poderá ser desfeita",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, tenho certeza!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'A policia foi chamada!',
        'Não se preocupe, a polícia está a caminho para resolver a situação.',
        'success'
      )
    }
  })
}
function exibirAlertaPersonalizado2() {
  
    Swal.fire({
      title: 'Você tem certeza que deseja chamar o bombeiro?',
      text: "Essa ação não poderá ser desfeita",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, tenho certeza!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'O bombeiro foi chamado!',
          'Não se preocupe, o bombeiro está a caminho para resolver a situação.',
          'success'
        )
      }
    })}

    function exibirAlertaPersonalizado3() {
  
        Swal.fire({
          title: 'Você tem certeza que deseja chamar o serviço médico?',
          text: "Essa ação não poderá ser desfeita",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, tenho certeza!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'O serviço médico foi chamado!',
              'Não se preocupe, a ambulância está a caminho para resolver a situação.',
              'success'
            )
          }
        })}

        function exibirAlertaPersonalizado4() {
  
            Swal.fire({
              title: 'Você tem certeza que deseja chamar o serviço de resgate de animais?',
              text: "Essa ação não poderá ser desfeita",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sim, tenho certeza!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'O serviço de resgate de animais foi chamado!',
                  'Não se preocupe, o serviço de resgate de animais está a caminho para resolver a situação.',
                  'success'
                )
              }
            })}
   