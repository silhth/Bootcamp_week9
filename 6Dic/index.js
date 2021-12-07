const fs = require('fs').promises

const arguments = process.argv.slice(2)

 
async function readFile(file) {
    const data = await fs.readFile(file)
    console.log(data.toString())
}


async function writeFile(file, item, flag) {
    content = `${item[0]} - ${item[1]} \n`
    await fs.writeFile(file, content, flag);
    console.log(readFile(file));
}

writeFile('list.txt',arguments, {flag: 'a+'})

