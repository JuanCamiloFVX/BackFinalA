import app from './app.js'
import '../api/database/database.js'

const port = 4000;
app.listen(port, ()=>{
    console.log(`server is listening at http://localhost:${port}`)
});