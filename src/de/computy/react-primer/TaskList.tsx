
    import * as React from 'react';
    import * as rp    from '.';

    /**
    *   Represents the TaskList component.
    *   This is an example for a stateless component.
    */
    export class TaskList extends React.Component<rp.TaskListProps, any>
    {
        /**
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        */
        public render() : JSX.Element
        {
            console.log( 'TaskList.render() being invoked' );

            return <ul id="taskList">

                { this.createTaskList() }

            </ul>;
        }

        /**
        *   Creates an array of task items.
        *
        *   @return All task list items.
        */
        private createTaskList() : JSX.Element[]
        {
            const taskItems:JSX.Element[] = [];

            for ( let taskIndex:number = 0; taskIndex < this.props.taskList.length; ++ taskIndex )
            {
                taskItems.push( <li key={ taskIndex }>{ this.props.taskList[ taskIndex ] }</li> );
            }

            return taskItems;
        }
    }
