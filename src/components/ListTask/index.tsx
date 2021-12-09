import { Container } from './styles'
import { Task } from '../../types/task'

type Props = {
    task: Task,
    onChange: (id: number, done: boolean) => void,
    handleDeleteTask(taskIdToDelete: number): void;
}

export const ListTask = ({ task, onChange, handleDeleteTask}: Props) => {

    return (
        <Container done={task.done}>
            <input  
            type="checkbox" 
            checked={task.done}
            onChange={e => onChange(task.id, e.target.checked)}
            />
            <label>{task.name}</label>
            <button className="deleteBtn" onClick={() => {handleDeleteTask(task.id)}}>X</button>
        </Container>
    )
}