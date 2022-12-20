import desenv from "../../assets/desenv.png";
import distr from "../../assets/distr.png";
function OtherInformation() {
  return /*html*/ `
    <div class="mx-auto max-w-3xl flex flex-col flex-wrap bg-bgContent mb-5">
        <div class=" my-16">
            <h2 class=" text-center text-colorSubtit mb-5">Desenvolvido por</h2>
            <img class="mx-auto  mt-5" src=${desenv}>
        </div>    
        <div class=" mb-10">
            <h2 class=" text-center text-colorSubtit mb-5">Desenvolvido por</h2>
            <img class="mx-auto w-48 mt-5" src=${distr}>
        </div> 

    </div>
    `;
}
export default OtherInformation;
