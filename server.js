const app = require('express')();

app.get('*', (req, res) => {
    res.send(Date.now() + "")
})

app.listen(5000, () =>  {
    console.info('listening on port 5000')
})