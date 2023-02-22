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

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.post('/task', (req: Request, res: Response) => {
    tasks.push({
        title: req.body.task,
        done: false
    });
    res.redirect('/');
});

app.get('/', (req: Request, res: Response) => {
  res.render('todoList', {tasks});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
