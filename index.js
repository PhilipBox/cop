const express = require("express"); // require : import
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // 가본 local에서 5000번 port를 사용.


app.use(cors()); // CORS 미들웨어 추가

const data = [
    {
        id: 1,
        title: 'html',
        desc: 'html is Hyper Text Markup Language.'
    },
    {
        id: 2,
        title: 'css',
        desc: 'css is for design.'
    },
    {
        id: 3,
        title: 'JavaScript',
        desc: 'JavaScript is for interactive.'
    }
]


//파라미터로 /api/contents를 던진 것. 
// 그 이하를 실행하겠다. (req,res~~)
app.get('/api/contents', (req, res) =>{
    res.json(data);
});

app.listen(port, () => console.log(`Listening on port ${port} `));