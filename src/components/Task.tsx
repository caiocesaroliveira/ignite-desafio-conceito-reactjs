import { CheckCircle, Circle, Trash } from 'phosphor-react'

import { ContentProps } from './Content'

import styles from './Task.module.css'

interface TasksProps extends ContentProps {
  onDeleteTask: (taskToDelete: string) => void
  onHandleToggle: (id: string) => void
}

export function Task({
  title,
  isComplete,
  id,
  onDeleteTask,
  onHandleToggle,
}: TasksProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function toggleTask() {
    onHandleToggle(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkBoxAndTask}>
        <button onClick={toggleTask}>
          {isComplete === false ? (
            <Circle size={24} color={'#4EA8DE'} />
          ) : (
            <CheckCircle size={24} color={'#8284FA'} />
          )}
        </button>
        <p
          className={
            isComplete === false ? styles.notCompleteTask : styles.completeTask
          }
        >
          {title}
        </p>
      </div>
      <button className={styles.deleteTask} onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  )
}
