import React from 'react/addons';
import Components from './components';
import Money from './domain/Money';
import Currency from './domain/Currency';

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
        let moneyTest = new Money(10, new Currency("USD"));
        document.addEventListener("DOMContentLoaded", (event) => {
            React.render(<Components />, document.getElementById("wrap"));
        });
    }
}
