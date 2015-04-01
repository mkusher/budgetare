"use strict";

import React from 'react/addons';
import Components from './components'

/**
 * @description Application class
 *
 */
export default class App {
    /**
     * @description starts application
     *
     * @param { Object } config  configuration of the application
     * @return { bool } whether application started successful
     */
    run(config){
        if(config.debug){
            window.React = React;
        }
        document.addEventListener("DOMContentLoaded", (event) => {
            React.render(<Components />, document.getElementById("wrap"));
        });
    }
}
