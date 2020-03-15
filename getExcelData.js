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