import express from 'express';
const app = express();
import crypto from 'crypto';

// params
const todoList = [
    {
        id: crypto.randomUUID(),
        todoName: 'Làm việc nhà cho mẹ',
        date: new Date(),
        status: 'Pending'
    }
];

app.get('/api/v1/todo-list', (req, res) => {
    res.send({
        data: todoList,
        message: 'Thành công!',
        success: true,
    })
});

app.get('/api/v1/todo-list/:id', (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const findRecordToDo = todoList.find((item) => {
            return item.id === id;
        });
        if (!findRecordToDo) throw new Error('Không tìm thấy')

        res.send({
            data: findRecordToDo,
            message: 'Thành cônng',
            success: true,
        })


    } catch (error) {
        res.send({
            data: null,
            message: error.message,
            success: true,
        })
    }
})

app.listen(5003, () => {
    console.log('Server nè')
})