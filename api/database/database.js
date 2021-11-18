import mongoose from "mongoose";

const mongoURL = "mongodb+srv://TheJokerV18:Thegamers4@cluster0.arops.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})

    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))