import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const quizzes = [
  { id: 1, question: "What is the safety protocol?", options: ["A", "B", "C"], correct: "A", lang: "en" },
  { id: 2, question: "Was ist das Sicherheitsprotokoll?", options: ["A", "B", "C"], correct: "A", lang: "de" }
];

app.get('/api/quizzes/:lang', (req: Request, res: Response) => {
  const { lang } = req.params;
  res.json(quizzes.filter(q => q.lang === lang));
});

app.post('/api/responses', (req: Request, res: Response) => {
  const { userId, quizId, answer } = req.body;
  res.json({ success: true, certificate: `Certificate for user ${userId}` });
});

app.listen(5000, () => console.log('Server running on port 5000'));
