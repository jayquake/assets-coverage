import "./styles.css";
import { assets } from "../public/assets/assets";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer"></a>
</div>
<a href="./assets/files/file-sample_PDF.pdf">Access the PDF file here</a>

 
${assets.allAudiosHTML}
${assets.allVideosHTML}
${assets.allFilesHTML}
${assets.youtubeIframe}
${assets.vimeoIframe}`;
