/*by onewayticket25
多了|| element.hasOwnProperty('from') by小壮提供


http-response https://app.bilibili.com/x/v2/view\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/bilibiliViewrelate.js,script-update-interval=-1

hostname = app.bilibili.com, api.bilibili.com

*/

let body = $response.body
body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad') || element.hasOwnProperty('from')){      
      body['data']['relates'].splice(index,1)  
    }
});
delete body['data']['cms']
body=JSON.stringify(body)
$done({body})
