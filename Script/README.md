# 所有脚本皆为搬运

# [Rule]

### 知乎

URL-REGEX,https://api.zhihu.com/(ab|fringe|zst|commercial|ad-style-service|topstory/hot-lists|market/popover|search/(top|tab|preset)|.*(recommendations|featured-comment-ad)),REJECT

AND,((USER-AGENT,osee2*), (NOT,((DOMAIN,api.zhihu.com))), (NOT,((DOMAIN,link.zhihu.com))), (NOT,((DOMAIN,lens.zhihu.com))), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT

### 知乎去广告  

URL-REGEX,https://(api|www).zhihu.com/(fringe|zst|commercial|real_time|ad-style-service|banners|topstory/hot-lists|market/popover|mqtt|.*(launch|featured-comment-ad|recommendations|community-ad)|search/(top|tab|preset)|ab),REJECT

AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT

AND,((USER-AGENT,osee2*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT

### 哔哩哔哩

URL-REGEX,https://app.bilibili.com/(pgc/season/rank/cn|x/v2/(rank.*rid=(168|5)|search/(defaultword|hot|recommend|resource))),REJECT


[MITM]

hostname = api.amemv.com, api*.musical.ly, api*.tiktokv.com, api.zhihu.com, app.bilibili.com, api.bilibili.com, *.kuwo.cn, *.api.vcinema.cn, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, api-163.biliapi.net, getuserinfo-globalapi.zymk.cn



# [Script]

# 抖音去水印去广告

> 来源：[Choler/Surge](https://github.com/Choler/Surge)

> 作者：[Choler](https://github.com/Choler/Surge)

[Script]

http-response ^https://[\s\S]*\/aweme/v1/(feed|aweme/post|follow/feed)/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Surge/Script/Aweme.js

[MITM]

hostname = *.amemv.com, *.snssdk.com

#抖音多功能

[URL Rewrite]

^https://aweme-eagle(.*)\.snssdk\.com/aweme/v2/ https://aweme-eagle$1.snssdk.com/aweme/v1/ 302

[Script]

http-response ^https://[\s\S]*\/aweme/v1/(feed|aweme/post|follow/feed)/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Aweme2.js

[MITM]

hostname = *.amemv.com, *.snssdk.com

# tiktok去水印

> 来源：[Choler/Surge](https://github.com/Choler/Surge)

> 作者：[Choler](https://github.com/Choler/Surge)

[Script]

http-request ^https:\/\/[\s\S]*\/aweme\/v1\/play\/\?video script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Amark.js,requires-body=true

[MITM]

hostname = api.amemv.com, api*.musical.ly, api*.tiktokv.com


# 知乎去广告

> 来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)

> 作者：[onewayticket255](https://github.com/onewayticket255/Surge-Script)

[Script]

http-response https://api.zhihu.com/moments requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuFeed.js,script-update-interval=-1

http-response https://api.zhihu.com/topstory/recommend requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuRecommed.js,script-update-interval=-1

http-response https://api.zhihu.com/.*/questions requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuAnswer.js,script-update-interval=-1

http-response https://api.zhihu.com/market/header requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihuMarket.js,script-update-interval=-1

[MITM]

hostname = api.zhihu.com,

# 哔哩哔哩去广告

> 来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)

> 作者：[onewayticket255](https://github.com/onewayticket255/Surge-Script)

[Script]

http-response https://app.bilibili.com/x/resource/show/tab requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliTab.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/feed requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliFeed.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/account/mine requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliAccount.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/view\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliViewrelate.js,script-update-interval=-1

http-response https://app.bilibili.com/x/v2/rank requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibiliRank.js,script-update-interval=-1

[MITM]

hostname = app.bilibili.com, api.bilibili.com

# 酷我音乐vip

> 来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)

> 作者：[Meeta](https://github.com/MeetaGit/MeetaRules)

[Script]

https?:\/\/.*\.kuwo\.cn script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/kuwovip.js,requires-body=true

[MITM]

hostname = *.kuwo.cn,

# 南瓜电影

> 来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)

> 作者：[Meeta](https://github.com/MeetaGit/MeetaRules)

[Script]

http-response https?:\/\/p\.doras\.api\.vcinema\.cn\/v5.0\/user/  script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/ngdy.js,requires-body=true

[MITM]

hostname = *.api.vcinema.cn

# 微博去广告

> 来源：[yichahucha/surge](https://github.com/yichahucha/surge)

> 作者：[yichahucha](https://github.com/yichahucha/surge)

[Script]

http-response ^https?:\/\/(api|mapi)\.weibo\.(cn|com)\/2/(statuses\/(unread|extend|positives/get|friends(\/|_)timeline)|stories\/(video_stream|home_list)|groups\/timeline|fangle\/timeline|profile\/statuses|comments\/build_comments|photo\/recommend_list|service\/picfeed|searchall|cardlist) script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wb_ad.js,requires-body=true

[MITM]

hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com

# 网易漫画vip

> 来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)

> 作者：[Meeta](https://github.com/MeetaGit/MeetaRules)

[Script]

 http-response https?:\/\/api-163\.biliapi\.net\/getUserProfile script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wymh.js,requires-body=true

[MITM]

hostname = api-163.biliapi.net, getuserinfo-globalapi.zymk.cn

# 知音漫客vip

> 来源：[mieqq/mieqq](https://github.com/mieqq/mieqq)

> 作者：[pysta](https://github.com/mieqq/mieqq)

[Script]

http-response ^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zymk.js,requires-body = true

[MITM]

hostname = getuserinfo-globalapi.zymk.cn


# 网易蜗牛读书

> 来源：[yxiaocai/quanx](https://github.com/yxiaocai/quanx)、[JO2EY/Rules](https://github.com/JO2EY/Rules)

> 作者：佚名

> 修改：[yxiaocai](https://github.com/yxiaocai/quanx)、[旺仔](https://github.com/JO2EY/Rules)

### Surge

[URL Rewrite]

^https?:\/\/p\.du\.163\.com\/readtime\/info\.json - reject

[Script]

http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/woniuyuedu.js,requires-body=true

[MITM]

hostname = p.du.163.com

### Quantumult X 

hostname = p.du.163.com

^https?:\/\/p\.du\.163\.com\/readtime\/info\.json url reject-img

以下二选一

^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/woniuyuedu.js

^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url response-body "tradeEndTime":\d{10} response-body "tradeEndTime":1679685290

# 微信公众号去广告

> 来源：[Choler/Surge](https://github.com/Choler/Surge)

> 作者：[Choler](https://github.com/Choler/Surge)

[Script]

http-response ^https://mp\.weixin\.qq\.com/mp/getappmsgad requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/WeChat.js

[MITM]

hostname = mp.weixin.qq.com

# 今日头条去广告

> 来源：[Choler/Surge](https://github.com/Choler/Surge)

> 作者：[Choler](https://github.com/Choler/Surge)

[Script]

http-response ^https://[a-zA-Z]*\.snssdk\.com/api/news/feed/v88/ requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Toutiao.js

[MITM]

hostname = *.snssdk.com

# 人人视频去广告

> 来源：[Choler/Surge](https://github.com/Choler/Surge)

> 作者：[Choler](https://github.com/Choler/Surge)

[Script]

http-response ^https://api\.rr\.tv/v3plus/index/(channel|todayChoice)$ requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master//Script/RRad.js

[MITM]

hostname = api.rr.tv

# 网易漫画Vip  

> 来源：[NobyDa/Script](https://github.com/NobyDa/Script)

> 作者：[野比](https://github.com/NobyDa/Script)

### quantumult x

[rewrite_local]

^https?:\/\/api-163\.biliapi\.net\/(getUserProfile|source\/detail) url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wymh163.js

hostname = api-163.biliapi.net,

# YouTube

> 来源：[Choler/Surge](https://github.com/Choler/Surge)

> 作者：[Choler](https://github.com/Choler/Surge)

[Script]

http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/YouTube.js

[MITM]

hostname = *.googlevideo.com

# 哔哩哔哩去广告 合并版

> 来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)

> 作者：[onewayticket255](https://github.com/onewayticket255/Surge-Script)

> 修改: [小壮](https://github.com/primovist)

[Script]

http-response ^https?:\/\/ap(i|p).bilibili.com\/x\/(resource\/show\/tab|v2\/(reply\/main|view\/material|account\/mine|view|feed\/index)\?access_key) requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Bilibili.js
 
[MITM]

hostname = app.bilibili.com

# 知乎去广告 合并版

> 来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)

> 作者：[onewayticket255](https://github.com/onewayticket255/Surge-Script)

> 修改: [小壮](https://github.com/primovist)

[Script]

http-response ^https?:\/\/api\.zhihu\.com\/(moments\?|topstory\/recommend|.*\/questions|market\/header) requires-body=1,max-size=-1,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zhihu.js,script-update-interval=-1.js

[MITM]

hostname = app.zhihu.com

# 大千视界破解5分钟限制 

> 来源：[NobyDa/Script](https://github.com/NobyDa/Script)

> 作者：[野比](https://github.com/NobyDa/Script)

### surge

[Script]

http-response ^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|a=addr.*vid=.*) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/dqsj.js

### quantumult x

[Script]

^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|a=addr.*vid=.*) url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/dqsj.js

[MITM]

hostname = api.mvmtv.com

# 布丁漫画 

> 来源：[NobyDa/Script](https://github.com/NobyDa/Script)

> 作者：[野比](https://github.com/NobyDa/Script)

### surge

[Script]

^https?:\/\/(bd|bdapp)\.4008109966\.net\/\/index\.php\/api\/User\/userLogin requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bdmh.js

### quantumult x

[Script]

^https?:\/\/(bd|bdapp)\.4008109966\.net\/\/index\.php\/api\/User\/userLogin url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bdmh.js

[MITM]

hostname = bd.4008109966.net

# 蜜桃漫画 

> 来源：[NobyDa/Script](https://github.com/NobyDa/Script)

> 作者：[野比](https://github.com/NobyDa/Script)

### Surge4:

http-response http:\/\/mitaoapp\.yeduapp\.com\/\/index\.php\/api\/User\/userLogin requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/mtmh.js,script-update-interval=0

### QuantumultX:

http:\/\/mitaoapp\.yeduapp\.com\/\/index\.php\/api\/User\/userLogin url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/mtmh.js

# 万象直播

> 来源：[NobyDa/Script](https://github.com/NobyDa/Script)

> 作者：[野比](https://github.com/NobyDa/Script)
 
### Surge4：

http-response https:\/\/u\.kanghuayun\.com\/api\/v2\/info requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wxzb.js

MITM = u.kanghuayun.com

### QuantumultX：

https:\/\/u\.kanghuayun\.com\/api\/v2\/info url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/wxzb.js

MITM = u.kanghuayun.com

# 小影

> 来源：hiepkimcdtk55

> 完善：野比

Surge4：

http-response ^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/xy.js

QX：

^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/xy.js

Surge & QX MITM = viva.v21xy.com


#南瓜电影 商店版 unlock vip

Surge:

http-response ^https:\/\/(p\.doras\.api\.vcinema\.cn|pay\.guoing\.com)\/(v5\.0\/user\/\d+$|d\/user\/get_user_info) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/ngdy2.js

QX:

^https:\/\/(p\.doras\.api\.vcinema\.cn|pay\.guoing\.com)\/(v5\.0\/user\/\d+$|d\/user\/get_user_info) url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/ngdy2.js

Surge & QX MITM = pay.guoing.com, p.doras.api.vcinema.cn,

# 水印精灵vip

Surge4：

http-response https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/syjl.js

QX：

https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/syjl.js

Surge & QX MITM = api1.dobenge.cn



# 知音漫客VIP 解锁收费章节

[rewrite_local]

^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ url script-response-body https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/zymh2.js

hostname = getuserinfo-globalapi.zymk.cn

如有启动广告可添加分流规则:

[filter_local]

host-suffix, adserver-ad.321mh.com, reject

# 哔哩哔哩番剧默认开启1080P+

QuantumultX : 

^https?:\/\/api\.bilibili\.com\/pgc\/player\/api\/playurl url response-body "quality":80, response-body "quality":112,

hostname = api.bilibili.com

Surge 4 TF :

http-response https?:\/\/api\.bilibili\.com\/pgc\/player\/api\/playurl script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/bilibili1080.js,requires-body=true

hostname = api.bilibili.com

注意 : 如番剧清晰度无1080P+ 请不要开启此脚本

# Pixiv (P站) 解除热门度搜索 伪装vip

> 来源：[onewayticket255](https://github.com/onewayticket255)

Surge4：

http-response https://oauth.secure.pixiv.net/auth/token requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/pixiv.js,script-update-interval=-1

http-request https://app-api.pixiv.net/v1/search.*popular script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/pixiv.js,script-update-interval=-1

Surge MITM = oauth.secure.pixiv.net, app-api.pixiv.net,

# 京东app 历史价格查询

> 来源：yichahucha

[Script]

http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) script-path= https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/jd_price.js,requires-body=1


[MITM]

hostname = api.m.jd.com

# Netflix IMDB

> 来源：yichahucha

[Script]

http-request ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Netflix_imdb.js

http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/Netflix_imdb.js,requires-body=1

[MITM]

hostname = ios.prod.ftl.netflix.com

# VSCO vip 解锁滤镜 视频编辑等

> 来源：[野比](https://github.com/NobyDa/Script)

QuantumultX : 

^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/\d{1,} url 302 https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/VSCO

hostname = vsco.co

Surge 4 TF :

http-response https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/ script-path=https://raw.githubusercontent.com/Cyansx/Profiles/master/Script/vsco.js,requires-body=true

hostname = vsco.co
