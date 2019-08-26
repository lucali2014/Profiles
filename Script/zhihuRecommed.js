/*by onewayticket25

http-response https://api.zhihu.com/topstory/recommend requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/zhihuRecommed.js,script-update-interval=-1

hostname = app.zhihu.com


*/
let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
