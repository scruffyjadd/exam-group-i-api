// Modify routes/exams.js: PAULO SERRADO

const express = require('express');
const router = express.Router();

const exams = [
  { id: 1, name: 'Math Exam', date: '2024-03-15' },
  { id: 2, name: 'Science Exam', date: '2024-03-22' },
];

router.get('/', (req, res) => {
  res.json(exams);
});
router.post('/', (req, res) => {
  const newExam = {
    id: exams.length + 1,
    name: req.body.name,
    date: req.body.date,
  };
  exams.push(newExam);
  res.status(201).json(newExam);
});

router.put('/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const examIndex = exams.findIndex((exam) => exam.id === examId);
