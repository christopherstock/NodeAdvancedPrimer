
    import * as React  from 'react';
    import * as moment from 'moment';
    import * as rp     from '.';

    /**
    *   The entire application component.
    *   This is an example for a stateful component.
    */
    export class App extends React.Component<rp.AppProps, rp.AppState>
    {
        /**
        *   Initializes this component by setting the initial state.
        *
        *   @param props The initial properties being passed in the component tag.
        */
        public constructor( props:rp.AppProps )
        {
            console.log( 'App.constructor() being invoked' );

            super( props );

            this.state = {
                taskList: [
                    'Milch kaufen',
                    'Brownies backen',
                    'Wäsche waschen',
                    'Workshop vorbereiten',
                ],
            }
        }

        /**
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        */
        public render() : JSX.Element
        {
            console.log( 'App.render() being invoked' );

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <rp.TaskInput
                    onTaskCreate={ ( taskName:string ) :void => { this.createTask( taskName ); } }
                />

                { /* task list */ }
                <rp.TaskList
                    taskList={ this.state.taskList }
                    onTaskDelete={   ( taskIndex:number ):void => { this.deleteTask(   taskIndex ); } }
                    onTaskMoveUp={   ( taskIndex:number ):void => { this.moveTaskUp(   taskIndex ); } }
                    onTaskMoveDown={ ( taskIndex:number ):void => { this.moveTaskDown( taskIndex ); } }
                />

            </div>;
        }

        /**
        *   Creates a new task.
        *
        *   @param taskName The name of the task to create.
        */
        private createTask( taskName:string ) : void
        {
            console.log( 'App.createTask( ' + taskName + ' ) being invoked' );

            // copy original array
            const newTaskList:string[] = this.state.taskList.slice();
            newTaskList.push( taskName );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            );
        }

        /**
        *   Deletes the task with the specified index.
        *
        *   @param taskIndex The index of the task to delete.
        */
        private deleteTask( taskIndex:number ) : void
        {
            console.log( 'App.deleteTask( ' + taskIndex + ' ) being invoked' );

            // copy original array
            const newTaskList:string[] = this.state.taskList.slice();
            newTaskList.splice( taskIndex, 1 );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /**
        *   Moves the task with the specified index up.
        *
        *   @param taskIndex The index of the task to move up.
        */
        private moveTaskUp( taskIndex:number ) : void
        {
            console.log( 'App.moveTaskUp( ' + taskIndex + ' ) being invoked' );

            if ( taskIndex > 0 )
            {
                // copy original array
                const newTaskList    :string[] = this.state.taskList.slice();

                const taskToMoveUp   :string   = newTaskList[ taskIndex     ];
                const taskToMoveDown :string   = newTaskList[ taskIndex - 1 ];

                newTaskList[ taskIndex - 1 ] = taskToMoveUp;
                newTaskList[ taskIndex     ] = taskToMoveDown;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
        }

        /**
        *   Moves the task with the specified index down.
        *
        *   @param taskIndex The index of the task to move down.
        */
        private moveTaskDown( taskIndex:number ) : void
        {
            console.log( 'App.moveTaskDown( ' + taskIndex + ' ) being invoked' );

            if ( taskIndex < this.state.taskList.length - 1 )
            {
                // copy original array
                const newTaskList    :string[]  = this.state.taskList.slice();

                const taskToMoveDown :string    = newTaskList[ taskIndex     ];
                const taskToMoveUp   :string    = newTaskList[ taskIndex + 1 ];

                newTaskList[ taskIndex + 1  ] = taskToMoveDown;
                newTaskList[ taskIndex      ] = taskToMoveUp;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
        }
    }
