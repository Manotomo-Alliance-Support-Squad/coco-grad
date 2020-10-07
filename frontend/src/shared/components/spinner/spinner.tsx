import React from "react";
import Logo from '../../../assets/icons/temp_logo.svg';
import './spinner.css';

interface SpinnerProps {
}

interface SpinnerState {
}

export default class Spinner extends React.Component<SpinnerProps, SpinnerState> {
    constructor(props: SpinnerProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="loading-background height-width-100"/>
                <img className="loading-icon-center App-logo" src={Logo} alt="logo" />
            </div>
        )
    }
}
