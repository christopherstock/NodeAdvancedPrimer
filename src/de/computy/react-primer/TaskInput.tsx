
    import * as React from 'react';

    /**
    *   Represents the input component that lets the user create new tasks.
    *   This is an example for a stateful and uncontrolled component.
    */
    export class TaskInput extends React.Component<any, any>
    {
        /**
        *   Initializes this component by setting the initial state.
        *
        *   @param props The initial properties being passed in the component tag.
        */
        public constructor( props:any )
        {
            super( props );

            this.state = {
                inputError: false,
            }
        }

        /**
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        */
        public render() : JSX.Element
        {
            console.log( 'TaskInput.render() being invoked' );

            return <form onSubmit={ ( event:React.FormEvent ) :void => { this.onFormSubmit( event ); } }>

                { /* new task input */ }
                <input
                    id="newTask"
                    type="text"
                    maxLength={ 50 }
                    className={ ( this.state.inputError ? 'input error' : 'input' ) }
                />

                <br />

                { /* new task button */ }
                <input
                    id="submitButton"
                    type="submit"
                    value="Create Task"
                    className="button"
                />

            </form>;
        }

        /**
        *   Being invoked when the form is submitted.
        *
        *   @param event The form submission event.
        */
        private onFormSubmit( event:any ) : void
        {
            console.log( 'TaskInput.onFormSubmit being invoked' );

            // suppress page reload
            event.preventDefault();

            // get input field and trim entered text
            const inputField  :HTMLInputElement = event.target.firstChild;
            const enteredText :string           = inputField.value.trim();

            // clear input field
            inputField.value = '';

            // check entered text
            console.log( 'Trimmed text in the box is [' + enteredText + ']' );
            if ( enteredText.length === 0 )
            {
                console.log( 'Empty text input detected.' );

                // set error state
                this.setState(
                    {
                        inputError: true,
                    }
                );
            }
            else
            {
                // clear error state
                this.setState(
                    {
                        inputError: false,
                    }
                );

                // invoke parent listener
                this.props.onTaskCreate( enteredText );
            }
        };
    }
