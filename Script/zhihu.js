/* by onewayticket25
   修改 小壮

http-response ^https?:\/\/api\.zhihu\.com\/(moments\?|topstory\/recommend|.*\/questions|market\/header) requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihu.js,script-update-interval=-1.js

hostname = app.zhihu.com

*/


const path1 = "/moments?";
const path2 = "/topstory/recommend";
const path3 = "/questions/";
const path4 = "/market/header";

const url = $request.url;
var body = $response.body;

if (url.indexOf(path1) != -1){
body=JSON.parse(body)
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('adjson')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(path2) != -1){
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(path3) != -1){
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
}

if (url.indexOf(path4) != -1){
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
}

$done({ body })
