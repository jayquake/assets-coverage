//import file_pdf from "./files/example-of-a-really-long-file-name-file-pdf-file-sample_PDFexample-of-a-really-long-file-name-file-pdf-file-sample_PDFexample-of-a-really-long-file-name-file-pdf-file-sample_PDFexample.pdf";
import file_doc from "./files/file-sample_DOC.doc";
import file_docx from "./files/file-sample_DOCX.docx";
import file_ppt from "./files/file_example_PPT.ppt";
import file_pptx from "./files/file_example_PPTX_.pptx";
import file_xls from "./files/file_example_XLS.xls";
import file_xlsx from "./files/file_example_XLSX.xlsx";
import audio_mp3 from "./audios/file_example_MP3.mp3";
import audio_wav from "./audios/file_example_WAV.wav";
import video_asf from "./videos/file_example_ASF.asf";
import video_avi from "./videos/file_example_AVI.avi";
import video_m4v from "./videos/file_example_M4V.m4v";
import video_mov from "./videos/file_example_MOV.mov";
import video_mp4 from "./videos/file_example_MP4.mp4";
import video_webm from "./videos/file_example_WEBM.webm";
import video_wmv from "./videos/file_example_WMV.wmv";

// files
const files = [
  //file_pdf,
  file_doc,
  file_docx,
  file_ppt,
  file_pptx,
  file_xls,
  file_xlsx
];

let allFilesHTML = `<div><h1>Files:</h1>`;
files.forEach((file) => {
  let fileHtml = `<a href="${file}">${file}</a></br>`;
  allFilesHTML += fileHtml;
});
allFilesHTML += "</div>";

// audios
const audios = [audio_mp3, audio_wav];
const audioErrMsg = `<p>Your browser does not support the audio element.
</p>`;

let allAudiosHTML = `<div><h2>Audios:</h2>`;
audios.forEach((audio) => {
  let audioHtml = `<div><span>${audio}</span><audio controls>
  <source src="${audio}" type="audio/ogg">
  ${audioErrMsg}</audio></div>`;
  allAudiosHTML += audioHtml;
});
allAudiosHTML += "</div>";

// videos
const videos = [
  video_asf,
  video_avi,
  video_mov,
  video_m4v,
  video_mp4,
  video_webm,
  video_wmv
];
const videoErrMsg = `<p>
Your browser doesn't support HTML video. Here is a
</p>`;

let allVideosHTML = `<div><h2>Videos:</h2>
`;
videos.forEach((video) => {
  let videoHtml = `<div><span>${video}</span><video controls>
  <source src="${video}" />
  ${videoErrMsg}</video></div>`;
  allVideosHTML += videoHtml;
});
allVideosHTML += "</div>";

// media iframes
const youtubeIframe = `<div><span>YouTube embedded</span><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/9E6b3swbnWg?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/pl/">youtubeembedcode pl</a></small></div><div><small><a href="https://spelbolag-utan-svensk-licens.se">https://spelbolag-utan-svensk-licens.se</a></small></div><div><small><a href="https://youtubeembedcode.com/pl/">youtubeembedcode.com/pl/</a></small></div><div><small><a href="https://casinotrotsspelpaus.net">casino trots spelpaus</a></small></div></iframe></div>`;
const vimeoIframe = `<div><span>Vimeo embedded</span><iframe src="https://player.vimeo.com/video/302154312?h=ad06a49e3c&color=969696" width="640" height="268" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/302154312">&ldquo;Way of Giants&rdquo; - &ldquo;Caminho dos Gigantes&rdquo;</a> from <a href="https://vimeo.com/sinlogo">SINLOGO Animation</a> on <a href="https://vimeo.com">Vimeo</a>.</p></div>`;

export const assets = {
  //allFilesHTML,
  allAudiosHTML,
  allVideosHTML,
  youtubeIframe,
  vimeoIframe
};
