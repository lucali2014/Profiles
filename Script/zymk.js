/*知音漫客VIP (By mieqq)
http-response ^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/zymk.js,requires-body = true

hostname = getuserinfo-globalapi.zymk.cn

*/

let url = $request.url;
let body = JSON.parse($response.body);

let user = '/app_api/v5/getuserinfo/';
let coin = '/app_api/v5/coin_account/';
let ticket = '/app_api/v5/getuserinfo_ticket/';
let free = '/app_api/v5/getcomicinfo/';

if (url.indexOf(user) != -1) {
	body.data.coins = 6666;
	body.data.isvip = 1;
	body.data.recommend = 6666;
	body.data.Cticket = 6666;
	body.data.Cgold = 6666;
}
else if (url.indexOf(coin) != -1) {
	body.data.coins = 6666;
	body.data.golds = 6666;
}
else if (url.indexOf(ticket) != -1) {
	body.data.Cticket = 6666;	
} 

else if (url.indexOf(free) != -1) {
	body.data.price = 0;
	body.data.download_price = 0;
}

	body = JSON.stringify(body);

$done({body});