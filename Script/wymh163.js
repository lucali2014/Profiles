/* by NobyDa

新增: 网易漫画VIP  解锁VIP漫画 以及付费漫画

// quantumult x

[rewrite_local]

^https?:\/\/api-163\.biliapi\.net\/(getUserProfile|source\/detail) url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/wymh163.js

hostname = api-163.biliapi.net,

适配quanX 但脚本理论支持surge
*/





var body = $response.body;
var url = $request.url;

const path1 = '/getUserProfile';
const path2 = '/source/detail';

let obj = JSON.parse(body)

if (url.indexOf(path1) != -1) {
	obj.data["level"] = "VIP8";
	obj.data["to"] = 3042979200716;
	obj.data["from"] = 1546272000716;
	obj.data["realVipType"] = 1;
	obj.data["hongbao"] = 66666;
	obj.data["money"] = 66666
	obj.data["score"] = 66666; 
	body = JSON.stringify(obj);  
 }

if (url.indexOf(path2) != -1) {
	obj.data["vip"] = 0;
	obj.data["baoyue"] = 1;
	body = JSON.stringify(obj);   
 }

$done({body});
