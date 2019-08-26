# 所有脚本皆为搬运，脚本内均标注来源作者

# > [Rule]

// ZhiHu

URL-REGEX,https://api.zhihu.com/(ab|fringe|zst|commercial|ad-style-service|topstory/hot-lists|market/popover|search/(top|tab|preset)|.*(recommendations|featured-comment-ad)),REJECT

AND,((USER-AGENT,osee2*), (NOT,((DOMAIN,api.zhihu.com))), (NOT,((DOMAIN,link.zhihu.com))), (NOT,((DOMAIN,lens.zhihu.com))), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT

// BiliBili

URL-REGEX,https://app.bilibili.com/(pgc/season/rank/cn|x/v2/(rank.*rid=(168|5)|search/(defaultword|hot|recommend|resource))),REJECT


[MITM]

hostname = api.amemv.com, api*.musical.ly, api*.tiktokv.com, api.zhihu.com, app.bilibili.com, api.bilibili.com, *.kuwo.cn, *.api.vcinema.cn, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, api-163.biliapi.net, getuserinfo-globalapi.zymk.cn



# > [Script]

# 抖音去水印去广告

[Script]

http-response ^https://[\s\S]*\.snssdk\.com/.+/(feed|post)/ requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Aweme.js

[MITM]

hostname = *.snssdk.com

# tiktok去水印

[Script]

http-request ^https:\/\/[\s\S]*\/aweme\/v1\/play\/\?video script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Amark.js,requires-body=true

[MITM]

hostname = api.amemv.com, api*.musical.ly, api*.tiktokv.com


#  知乎去广告

[Script]

http-response https://api.zhihu.com/moments requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuFeed.js,script-update-interval=-1

http-response https://api.zhihu.com/topstory/recommend requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuRecommed.js,script-update-interval=-1

http-response https://api.zhihu.com/.*/questions requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuAnswer.js,script-update-interval=-1

http-response https://api.zhihu.com/market/header requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuMarket.js,script-update-interval=-1

[MITM]

hostname = api.zhihu.com,

# 哔哩哔哩去广告

[Script]

http-response https://app.bilibili.com/x/resource/show/tab requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliTab.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/feed requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliFeed.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/account/mine requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliAccount.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/view\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliViewrelate.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/rank requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliRank.js,script-update-interval=-1

[MITM]

hostname = app.bilibili.com, api.bilibili.com

#  酷我音乐vip

[Script]

https?:\/\/.*\.kuwo\.cn script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/kuwovip.js,requires-body=true

[MITM]

hostname = *.kuwo.cn,

# 南瓜电影

[Script]

http-response https?:\/\/p\.doras\.api\.vcinema\.cn\/v5.0\/user/  script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/ngdy.js,requires-body=true

[MITM]

hostname = *.api.vcinema.cn

# 微博去广告

[Script]

http-response ^https?:\/\/(api|mapi)\.weibo\.(cn|com)\/2/(statuses\/(unread|extend|positives/get|friends(\/|_)timeline)|stories\/(video_stream|home_list)|groups\/timeline|fangle\/timeline|profile\/statuses|comments\/build_comments|photo\/recommend_list|service\/picfeed|searchall|cardlist) script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wb_ad.js,requires-body=true

[MITM]

hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com

# 网易漫画vip

[Script]

 http-response https?:\/\/api-163\.biliapi\.net\/getUserProfile script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wymh.js,requires-body=true

[MITM]

hostname = api-163.biliapi.net, getuserinfo-globalapi.zymk.cn

# 知音漫客vip

[Script]

http-response ^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zymk.js,requires-body = true

[MITM]

hostname = getuserinfo-globalapi.zymk.cn


# 网易蜗牛读书

// Surge

[URL Rewrite]

^https?:\/\/p\.du\.163\.com\/readtime\/info\.json - reject

[Script]

http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/woniuyuedu.js,requires-body=true

[MITM]

hostname = p.du.163.com

//Quantumult X 

hostname = p.du.163.com

^https?:\/\/p\.du\.163\.com\/readtime\/info\.json url reject-img

以下二选一

^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/woniuyuedu.js

^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url response-body "tradeEndTime":\d{10} response-body "tradeEndTime":1679685290

# 微信公众号去广告

[Script]

http-response ^https://mp\.weixin\.qq\.com/mp/getappmsgad requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/WeChat.js

[MITM]

hostname = mp.weixin.qq.com

# 今日头条去广告

[Script]

http-response ^https://[a-zA-Z]*\.snssdk\.com/api/news/feed/v88/ requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Toutiao.js

[MITM]

hostname = *.snssdk.com

# 人人视频去广告

[Script]

http-response ^https://api\.rr\.tv/v3plus/index/(channel|todayChoice)$ requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master//Script/RRad.js

[MITM]

hostname = api.rr.tv

# 网易漫画Vip  NobyDa自用版

// quantumult x

[rewrite_local]

^https?:\/\/api-163\.biliapi\.net\/(getUserProfile|source\/detail) url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wymh163.js

hostname = api-163.biliapi.net,

# YouTube

[Script]

http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/YouTube.js

[MITM]

hostname = *.googlevideo.com

# 哔哩哔哩去广告 合并版

[Script]

http-response ^https?:\/\/ap(i|p).bilibili.com\/x\/(resource\/show\/tab|(v2\/(reply\/main|view\/material|view|account\/mine|feed))) requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Bilibili.js
 
[MITM]

hostname = app.bilibili.com
