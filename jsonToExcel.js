var xlsx = require('node-xlsx');
var fs = require('fs');

let data= [
    [1, 2, 3],
    [4, 5, 6]
]



let buffer = xlsx.build([{name: "mySheetName", data: data}]);

fs.writeFileSync("my.xlsx", buffer, 'binary');    // 转为excel