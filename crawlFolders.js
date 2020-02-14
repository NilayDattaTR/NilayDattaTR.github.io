const fs = require("fs");
const joinPath = require("path.join");
const root = __dirname + '/Files';

function crawlFiles() {
    if(fs.existsSync(root)) {
        const list = fs.readdirSync(root);
        const filepath = list.map(el => {
            return 'https://github.com/NilayDattaTR/NilayDattaTR.github.io/tree/master/Files/' + el + '/index.html';
        })
        const stringData = filepath.join('\n');
        console.log(stringData);
        fs.writeFile('links.txt', stringData, function(err) {
            if (err) {
                console.log('Some Error Occured while saving links.txt !');
            } else {
                console.log("File saved successfully!");
            }
        });
    } else {
        console.log('Files folder is missing !!');
    }
    
}
crawlFiles();