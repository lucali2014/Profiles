/*

原作者：https://Choler.github.io/Surge/Script/Amark.js 

http-request ^https:\/\/[\s\S]*\/aweme\/v1\/play\/\?video script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/Amark.js,requires-body=true
[MITM]
hostname = api.amemv.com, api*.musical.ly, api*.tiktokv.com


*/





if ($request.url.indexOf('watermark') > 0) {
  $done({url: $request.url.replace(/&watermark=\d/, "")});
} else {
  $done();
}
if ($request.url.indexOf('vide.f7') > 0) {
  $done({url: $request.url.replace(/vide\.f7/, "vide.f")});
} else {
  $done();
}

