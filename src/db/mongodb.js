const mongoose = require('mongoose');

const user = "levichalaface";
const password = "ASYqqw00";

async function startDB() {
 await mongoose.connect(`mongodb+srv://${user}:${password}@servidor01.exeueid.mongodb.net/?retryWrites=true&w=majority`,
 {useNewUrlParser: true,
 useUnifiedTopology: true,});
}


module.exports = startDB;