import img1 from "../../assets/img1.png";

function Header() {
  return /*html*/ `
  <div class=" mx-auto max-w-3xl flex flex-col flex-wrap ">
    <div class="">
      <img class="mx-auto w-screen" src=${img1}> 
    </div>  
    <div class="  mx-auto bg-bgContent p-12 ">
      <h1 class=" uppercase text-5xl text-center text-colorTitle mb-10">modern warfare ii chegou</h1>
      <p class=" text-textAll p-5 text-lg">Prepare seu esquadrão e lute junto dos Operadores icônicos da Força-Tarefa 141 no retorno de Modern Warfare®.</p>
    </div>
  </div>
  `;
}
export default Header;
