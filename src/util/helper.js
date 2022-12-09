function printDate() {
      console.log(new Date().toDateString());
}

function printMonth() {
      console.log(new Date().getMonth() + 1);
}


function getBatchInfo() {
      console.log('Californium, W3D4, the topic for today is Nodejs module system');
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo