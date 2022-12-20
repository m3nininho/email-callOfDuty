import img3 from "../../assets/img3.png";

function SectionThree() {
  return /*html*/ `
    <div class="mx-auto max-w-3xl flex flex-col flex-wrap borderTesting ">
      <div>
        <img class="mx-auto w-screen" src=${img3}>
      </div>  
      <div class="  mx-auto bg-bgContent p-5 ">
        <h1 class=" uppercase text-4xl text-center text-colorTitle mb-10">prepare-se para a mobilização com a edição cofre</h1>
        <p class=" text-textAll p-4 text-lg">Escolha Call of Duty: Modern Warfare II Edição Cofre para ter a experiência VIP. A Edição Cofre dá acesso a:</p>
      </div>

      <div class=" taman ml-10 mb-16">
          <ul class=" text-textAll mx-10 list-disc flex flex-col">
              <li>Pacote de Operadores da Equipe Vermelha 141 (4 Operadores: Ghost, Soap, Farah e Price)</li>
              <li>FJX Cinder - O primeiro Cofre de Armas</li>
              <li>Passe de Batalha (1 Temporada)</li>
              <li>50 Pulos de Escalão</li>
          </ul>
      </div>

      <div class="mx-auto mb-16">
        <a class=" mb-10 uppercase text-textAll bgBtn py-4 px-10 font-bold text-3xl ">compre agora</a>
      </div>
    </div>
  `;
}
export default SectionThree;
