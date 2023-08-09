import { useState } from 'react';
import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import { ITask } from '../../App';
import { CheckCircle } from 'phosphor-react';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Task({ task, onDelete, onCompleted }: Props) {
    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete(task.id);
    };

    const handleTaskClick = () => {
        onCompleted(task.id);
    };

    return (
        <div className={styles.task} onClick={handleTaskClick}>
            <button className={styles.checkContainer}>
                {task.isCompleted ? <CheckCircle size={22} color={"#5E60CE"} weight="fill" /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.deleteButton} onClick={handleDeleteClick}>
                <Trash size={20} />
            </button>
        </div>
    );
}
