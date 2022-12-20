import Footer from "./components/Footer/Footer";
import OtherInformation from "./components/OtherInformation/OtherInformation";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SocialMedia from "./components/SocialMedia/SocialMedia";

document.querySelector("#app").innerHTML = /*html*/ `
  <div class="mx-auto max-w-3xl h-screen bg-bgContainer">
      ${SectionOne()}
      ${SectionTwo()}
      ${SectionThree()}
      ${SocialMedia()}
      ${OtherInformation()}
      ${Footer()}
  </div>
`;
