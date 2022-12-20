import home from "../../assets/home.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import twitch from "../../assets/twitch.png";
import instagram from "../../assets/instagram.png";
function SocialMedia() {
  return /*html*/ `
    <div class="mx-auto max-w-3xl flex flex-col flex-wrap bg-bgContent mt-10">
        <h1 class=" text-textAll text-center text-4xl mb-10">Conecte-se</h1>
        <div >
            <ul class="flex gap-5 justify-center items-center ">
                <li><a><img class=" w-8" src=${home}></a></li>
                <li><a><img class=" w-8" src=${facebook}></a></li>
                <li><a><img class=" w-8" src=${twitter}></a></li>
                <li><a><img class=" w-8" src=${youtube}></a></li>
                <li><a><img class=" w-8" src=${twitch}></a></li>
                <li><a><img class=" w-8" src=${instagram}></a></li>
            </ul>
        </div>
    </div>
`;
}

export default SocialMedia;
