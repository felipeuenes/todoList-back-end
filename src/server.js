const express = require('express');
const app = express();
const cors = require('cors')

const port = 3000;

app.use(express.json());
app.use(cors())

app.listen(port, console.log(`server is conected in port ${port}`));


const routes = require('./routes')
app.use(routes);


const prisma = require('./database');
prisma.$connect()
.then(() => console.log('deu certo!!'))
.catch((error) => console.log(error));
