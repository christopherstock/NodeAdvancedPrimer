
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
                taskItems.push
                (
                    <li key={ taskIndex }>

                        <div>

                            { /* The item description */ }
                            { this.props.taskList[ taskIndex ] }

                            { /* Button 'Delete' */ }
                            <button
                                onClick={ ():void => { this.props.onTaskDelete( taskIndex ); } }
                                className="button"
                            >
                                &#10006;
                            </button>

                            { /* Button 'Move Down' */ }
                            <button
                                onClick={ ():void => { this.props.onTaskMoveDown( taskIndex ); } }
                                disabled={ taskIndex === this.props.taskList.length - 1 }
                                className="button"
                            >
                                &#9660;
                            </button>

                            { /* Button 'Move Up' */ }
                            <button
                                onClick={ ():void => { this.props.onTaskMoveUp( taskIndex ); } }
                                disabled={ taskIndex === 0 }
                                className="button"
                            >
                                &#9650;
                            </button>

                        </div>

                    </li>
                );
            }

            return taskItems;
        }
    }
