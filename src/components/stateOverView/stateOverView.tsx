import React from 'react';
import './stateOverView.scss';

export interface StateProps {
    title?: React.ReactNode | string;
    count?: React.ReactNode | string;
}


export default class StateOverView extends React.Component<StateProps> {
    public render() {
        const { title, count } = this.props;
        return (
            <div className="overview">
                <p className="count">{count}</p>
                <p className="title">{title}</p>
            </div>
        )
    }
}