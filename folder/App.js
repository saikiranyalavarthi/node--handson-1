const http=require('http');
const data={
    fname:'yalavrthi',
    lname:'saikiran'
   
    

}
const server=http.createServer((req,res)=>{
    res.write("<h1> HELLO world </h1>");
    res.write(JSON.stringify(data));
    res.end();

})
server.listen(4000,()=>{
    console.log("server 1 is running")
})