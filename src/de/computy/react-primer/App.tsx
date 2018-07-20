
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

                { /* new task button */ }
                <button id="submitButton" className="button" onClick={
                    () : void => { this.createTask( 'New Task on [' + moment().format() + ']' ); }
                }>
                    Create Task
                </button>

                { /* task list */ }
                <rp.TaskList taskList={ this.state.taskList } />

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
    }
