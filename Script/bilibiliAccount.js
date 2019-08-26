/*by onewayticket25

http-response https://app.bilibili.com/x/v2/account/mine requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/bilibiliAccount.js,script-update-interval=-1

hostname = app.bilibili.com, api.bilibili.com

*/



let body = $response.body
body=JSON.parse(body)
body['data']['sections'].splice(0,1)
body['data']['sections'][0]['items'].splice(3,1)
body['data']['sections'][0]['items'].splice(4,3)
body['data']['sections'].splice(1,1)
body=JSON.stringify(body)
$done({body})
