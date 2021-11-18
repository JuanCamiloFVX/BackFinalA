import mongoose from "mongoose";

const mongoURL = "";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})

    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))


    

