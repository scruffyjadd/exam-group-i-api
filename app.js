const express = require('express');
const examsRouter = require('./routes/exams');

const app = express();
const port = 3000;

app.use.(express.json());

app.get('/exam-group', (req, res) => {
  res.json({ message: 'Group <your_group> API' });
});

app.use('/exams', examsRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
