import SectionOne from "./components/SectionOne/SectionOne";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";

document.querySelector("#app").innerHTML = /*html*/ `
  <div class="mx-auto max-w-3xl h-screen bg-bgContainer">
      ${SectionOne()}
      ${SectionTwo()}
      ${SectionThree()}
  </div>
`;
