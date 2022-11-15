const express = require('express');
const app = express();
const env = require('./config/envConfig');
const cors = require('cors');
const connect = require('./config/db');
const authRoute = require('./routes/authRoute');
const counselorsRoute = require('./routes/counselorsRoute');
const leadsRoute = require('./routes/leadsRoute');
const adminRoute = require('./routes/adminRoute');
const path = require('path');
const profileRoute = require('./routes/profileRoute');
const leadsTrashRoute = require('./routes/leadsTrashRoute');
const counselorsTrashRoute = require('./routes/counselorsTrashRoute')

// setting time zone
process.env.TZ = env.TZ;
// db connection 
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}

connect();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'images/')));

app.use("/api/admin", adminRoute);
app.use("/api", authRoute);
app.use("/api/profile", profileRoute)
app.use("/api/counselors", counselorsRoute);
app.use("/api/leads", leadsRoute);
app.use("/api/leads/trash", leadsTrashRoute);
app.use("/api/counselors/trash", counselorsTrashRoute);

const port = env.PORT || 6000;
app.listen(port, () => {
    console.log(`Git Server is running on port ${port}`);
});