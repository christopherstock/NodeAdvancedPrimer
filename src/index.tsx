
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as rp       from './de/computy/react-primer';

    console.log( 'index.ts being invoked' );

    window.onload = () :void =>
    {
        console.log( 'window.onload() invoked test' );

        const APP_TITLE:string = 'React Task List';

        // create a main container and append to it to the body
        const mainContainer:HTMLDivElement = document.createElement( 'div' );
        mainContainer.id = 'mainContainer';
        document.body.appendChild( mainContainer );

        // render the App component into the main container
        ReactDOM.render(
            <rp.App
                title={ APP_TITLE }
            />,
            mainContainer
        );
    };

    window.onunload = () :void =>
    {
        console.log( 'window.onunload() invoked' );
    };
