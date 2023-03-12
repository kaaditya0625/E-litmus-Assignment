const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

const upload = multer();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

const userRouter = require('./src/routers/userRouter');
const userImageRouter = require('./src/routers/userImageRouter');
const inviteCodeRouter = require('./src/routers/inviteCodeRouter');

app.use("/users", userRouter);
app.use("/images", userImageRouter);
app.use("/inviteCodes", inviteCodeRouter);


app.listen(port, () => {
  console.log(`Connection is live at port no. ${port}`);
});
