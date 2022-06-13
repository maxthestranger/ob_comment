const app = require('./config/express');
const { port } = require('./config/vars');
const { sequalize } = require('./config/mysql');

sequalize.sync({ force: true }).then(() => {
  console.log('Drop DB and resync');
});

app.listen(port, () => console.log(`Started at localhost:${port}`));
