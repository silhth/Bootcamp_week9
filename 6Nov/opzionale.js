const fs = require('fs').promises

const arguments = process.argv.slice(2)

const data = require('./data.json')

data.list.push({
    product: arguments[0],
    quantity: arguments[1]
})

const htmlList = data.list.map((el)=> `<li> ${el.product} ${el.quantity}</li>`).join("\n\t\t\t")
const htmltext = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<ul>
${htmlList}
</ul>
    
</body>
</html>`

async function printHtml() {
    const newData = JSON.stringify(data)
    await fs.writeFile('./data.json', newData)
    await fs.writeFile('./index.html', htmltext)
}

printHtml()