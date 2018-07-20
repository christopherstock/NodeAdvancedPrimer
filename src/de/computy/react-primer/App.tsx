
    import * as React from 'react';
    import * as rp    from '.';

    /**
    *   The entire application component.
    */
    export class App extends React.Component<rp.AppProps, any>
    {
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

            </div>;
        }
    }
