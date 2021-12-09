import { useState } from 'react';
import { Container, MainArea, Header } from './App.styles'
import { Task } from './types/task'
import { ListTask } from './components/ListTask'
import { AddTaskArea } from './components/addTaskArea';

const App = () => {

  const [list, setList] = useState<Task[]>([
    { id: 1, name: 'Pagar a conta de luz', done: false },
    { id: 2, name: 'Pagar o aluguel', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleCheckBox = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const handleDeleteTask = (taskIdToDelete: number): void => {
    setList(list.filter((task) => {
      return task.id !== taskIdToDelete;
    }))
  }

  return (
    <Container>
      <MainArea>
        <Header>
          Lista de Tarefas
        </Header>
        
        <AddTaskArea onEnter={handleAddTask} />

        {list.map((task, index) => (
          <ListTask
            key={index}
            task={task}
            onChange={handleCheckBox}
            handleDeleteTask={handleDeleteTask}
            />
        ))}

      </MainArea>
    </Container>
  )
}
export default App