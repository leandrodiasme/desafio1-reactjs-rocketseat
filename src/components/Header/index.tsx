import styles from './Header.module.css';
import todoLogo from '../../assets/Logo.svg';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logo do ToDo" />
            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text" placeholder='Adicione uma nova tarefa' name="task" onChange={onChangeTitle} value={title} />
                <button type="submit">Criar <PlusCircle size={16} /> </button>
            </form>
        </header>
    )
}