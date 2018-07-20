
    /**
    *   All properties of the 'TaskList' component.
    */
    export interface TaskListProps
    {
        /** All task items to display in the task list. */
        taskList       :string[];

        /** The callback being invoked when the 'delete task' button is pressed. */
        onTaskDelete   :( taskIndex:number ) => void;

        /** The callback being invoked when the 'move task down' button is pressed. */
        onTaskMoveDown :( taskIndex:number ) => void;

        /** The callback being invoked when the 'move task up' button is pressed. */
        onTaskMoveUp   :( taskIndex:number ) => void;
    }
