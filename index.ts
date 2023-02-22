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
    if (req.body.task){
        tasks.push({
            title: req.body.task,
            done: false
        });
    }
    res.redirect('/');
});

app.get('/task/:id/done', (req: Request, res: Response) => {
    if (tasks[req.params.id]) {
        tasks[req.params.id].done = true;
    }
    res.redirect('/');
});

app.get('/task/:id/delete', (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    tasks.splice(taskId, 1);
    res.redirect('/');
});

app.get('/', (req: Request, res: Response) => {
  res.render('todoList', {tasks});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
