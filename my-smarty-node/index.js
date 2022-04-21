const express = require ('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('Hello from my own Smarty   Pant!!')
});

const users = [
    {
        id: 1, name: 'anamul', email: 'anamul@gmail.com', phone: '015542525'
    },
    {
        id: 2, name: 'rahim', email: 'rahim@gmail.com', phone: '015542525'
    },
    {
        id: 3, name: 'shahin', email: 'shahin@gmail.com', phone: '015542525'
    },
    {
        id: 4, name: 'rahim', email: 'rahim@gmail.com', phone: '015542525'
    },
    {
        id: 5, name: 'jahir', email: 'jahir@gmail.com', phone: '015542525'
    },
    {
        id: 6, name: 'sraboni', email: 'sraboni@gmail.com', phone: '015542525'
    },
    {
        id: 7, name: 'jhanker', email: 'jhanker@gmail.com', phone: '015542525'
    }
]
// app.get('/users',(req,res)=>{
//     res.send(users);
// })

app.get('/users', (req, res) =>{
    //filter by search query parameter
    // console.log('query', req.query)  //aita kaj korce nah empty dekhacce
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id',(req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(x =>x.id == id);
    // res.send('finding user')
    res.send(user)
})

app.post('/user',(req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})




app.get('/fruits',(req, res)=>{
    res.send(['mango','apple','oranges']);
});
app.get('/fruits/mango/fazle',(req, res)=>{
    res.send('sour soud fazle flavour');
});

app.listen(port, ()=>{
    console.log('listening to port ', port )
})