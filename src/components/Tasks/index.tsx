import { ITask } from '../../App'
import { Task } from '../Task'
import styles from './Tasks.module.css'
import { Clipboard, ClipboardText } from 'phosphor-react';

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onCompleted }: Props) {

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Tarefas Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onCompleted={onCompleted} />
                ))}
                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <Clipboard size={60} color="#777777" weight="thin" />
                        <div>
                            <p>Parece que não há nenhuma tarefa por aqui!</p>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}