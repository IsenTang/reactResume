import React from "react";

export default class StyleEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: '',
            content:''
        }
    }

    componentWillReceiveProps(nextProps){
		this.setState({
            content:nextProps.styleContent
        });
	}

    render() {
        return (
            <div className='leftContent'><pre>{this.state.content}</pre></div>
        )
    }

}