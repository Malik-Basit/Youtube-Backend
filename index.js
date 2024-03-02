import express from  'express' 
import cors from  'cors'
const app = express();
const port =3000;

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use(cors());

app.get('/api/data',(req,res)=>{
  let  Object=[{
name:'Ali Khan',
age:12,
class:15,
fathername:'nithin',
color:'black&white'
    },
    {
        name:'Ali Khan',
        age:12,
        class:15,
        fathername:'nithin',
        color:'black&white'
            },
            {
                name:'Ali Khan',
                age:12,
                class:15,
                fathername:'nithin',
                color:'black&white'
                    },{
                        name:'Ali Khan',
                        age:12,
                        class:15,
                        fathername:'nithin',
                        color:'black&white'
                            }]
    res.send(Object);
})




app.listen(port,()=>{
    console.log(`server is runing at port ${port}`);
})