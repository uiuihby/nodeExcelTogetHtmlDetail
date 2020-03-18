var xlsx = require('node-xlsx');
var fs = require('fs');
var sheets = xlsx.parse('./data.xlsx');
let arr=[]
let index=0
sheets[0]['data'].forEach(element => {
    if(index!=0){
        arr.push(element[1])
    }
   index+=1
});

fs.writeFileSync('data.json',JSON.stringify(arr));          // 获取后裔采集到的所有 列表页面详情页面

// 微博
var request = require('superagent')
var fs = require('fs');
request
  .get("https://weibo.com/aj/v6/comment/big?ajwvr=6&id=4082296585476416&root_comment_max_id_type=0&root_comment_ext_param=&page=99")
  .set('Cookie', '_s_tentry=passport.weibo.com; Apache=5224858063877.46.1584494116830; SINAGLOBAL=5224858063877.46.1584494116830; ULV=1584494116876:1:1:1:5224858063877.46.1584494116830:; Ugrow-G0=cf25a00b541269674d0feadd72dce35f; YF-V5-G0=7a7738669dbd9095bf06898e71d6256d; login_sid_t=52656bd53ade8d385a1024c4e19b59d9; cross_origin_proto=SSL; SSOLoginState=1584499005; wvr=6; UOR=www.techweb.com.cn,widget.weibo.com,graph.qq.com; wb_view_log_6109608044=1680*10502; SCF=AgLq5M_0lfbCOcfNSrcoUDTcrPsEsmaKDqwNrRicfpOgY0NpyNjQNRRKgtMmCeAyo5h6j0ztc68kbVWfFYTqKHE.; SUB=_2A25zdfnGDeRhGeBP61sX8CbMzziIHXVQA2wOrDV8PUNbmtAfLW3RkW9NRZNPoY9Ptz9Pk_HNCbT1kGQVosyVmpON; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WFuxeZTWRm0rpHAzbvI359.5JpX5KMhUgL.Foqpeh.cehn7ShB2dJLoI7pHCHHiC2i91hncSo2t; SUHB=0S7SCr4_Bw8fil; ALF=1616035093; YF-Page-G0=753ea17f0c76317e0e3d9670fa168584|1584502689|1584502661; webim_unReadCount=%7B%22time%22%3A1584502702449%2C%22dm_pub_total%22%3A1%2C%22chat_group_client%22%3A0%2C%22allcountNum%22%3A3%2C%22msgbox%22%3A0%7D')
  .then(res => {
     console.log(res.body);
     fs.writeFileSync('test.html', res.body.data.html);
  })
  .catch(err => {
     console.log(err);
  });
