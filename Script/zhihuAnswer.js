
//by onewayticket25

//http-response https://api.zhihu.com/.*/questions requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/zhihuAnswer.js,script-update-interval=-1

//hostname = app.zhihu.com






let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
$done({body})
