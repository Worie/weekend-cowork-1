import * as Express from 'express';

const app = Express();

app.get('/', (req: any, res: any) => {
  res.send('hello world');
});

app.listen(8888);