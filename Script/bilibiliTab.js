/*by onewayticket25

http-response https://app.bilibili.com/x/resource/show/tab requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/bilibiliTab.js,script-update-interval=-1

hostname = app.bilibili.com, api.bilibili.com

*/

let body = $response.body
body=JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
if(!(["追番","推荐","直播","热门","影视"].includes(element["name"]))) body['data']['tab'].splice(index,1)  
});

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})

delete body['data']['top']
body=JSON.stringify(body)
$done({body}) 
