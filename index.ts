import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

interface Task {
    title: string;
    done: boolean;
}

const tasks: Task[] = [
    {
        title: "Apprendre à programmer",
        done: false,
    },
    {
        title: "Faire les courses",
        done: true,
    }
];

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.render('todoList', {tasks});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
