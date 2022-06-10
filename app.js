const app = require('./config/express');
const { port } = require('./config/vars');
const { sequalize } = require('./config/mysql');

sequalize.sync();

app.listen(port, () => console.log(`Started at localhost:${port}`));
