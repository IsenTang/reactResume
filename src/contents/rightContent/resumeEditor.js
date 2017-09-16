import React from "react";
import marked from "marked";
import  '../../github-markdown.css';

export default class ResumeEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: '',
            content:``,
            isMarkdown : false,
            markdownStyle:'',
        }
    }

    componentWillReceiveProps(nextProps){
		this.setState({
            content:nextProps.resumeContent,
            isMarkdown: nextProps.isMarkdown,
            markdownStyle:nextProps.markdownStyle
        });
	}

    render() {
        return (
            <div className='rightContent'>
                    <code className={this.state.markdownStyle} dangerouslySetInnerHTML={{ __html: this.state.isMarkdown ? marked(this.state.content) : this.state.content}}></code>   
            </div>
        )
    }

}