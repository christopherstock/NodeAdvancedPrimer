
    import * as React from 'react';
    import * as rp    from '.';

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

                { /* task list */ }
                <ul id="taskList">{ this.createTaskList() }</ul>

            </div>;
        }

        /**
        *   Creates an array of task items.
        *
        *   @return All task list items.
        */
        private createTaskList() : JSX.Element[]
        {
            const taskItems:JSX.Element[] = [];

            for ( let taskIndex:number = 0; taskIndex < this.state.taskList.length; ++taskIndex )
            {
                taskItems.push
                (
                    <li key={ taskIndex }>{ this.state.taskList[ taskIndex ] }</li>
                );
            }

            return taskItems;
        }
    }
