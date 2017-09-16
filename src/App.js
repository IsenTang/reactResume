import React, {Component} from 'react';
import StyleEditor from './contents/leftContent/styleEditor';
import ResumeEditor from './contents/rightContent/resumeEditor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      resumeContent:'',
      isMarkdown : false,
      markdownStyle:''
    };
    this.interval = 50;//间隔时间    
    this.styleContent = [
      `/* Hello, My name is Yichao Tang, you can call me Isen 
* This is how I write my resume
* It is base on react. I use create-react-app to build the scaffold.
* I hope you like it~
* ===================================================
*/`,`/* This interface is not like development interface.
/* So , let me beautify the interface ^_^
*/`,`
{
  -webkit-transition: all .3s;
  transition: all .3s;
}
html {
  color: #5CACEE; background: #030303; 
}
.leftContent {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* It looks like a  command-line tool now , right ?
/* Let me finish my resume~
* ====================================================
* First of all , I need a paper.
*/
.rightContent {
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* Now, I got a white paper. 
* Let me start~~
*/`,`/*As you see, it wirte by markdown grammar.
/*Let me translated into HTML by using marked package.*/
/*Let us start~*/
/*....1....*/
/*....2....*/
/*....3....*/
/*.action!.*/`,`
/*Emmmmmmmmmmmmmmmm......*/
/*It is not pretty right?*/
/*So I use css to beautify my resume. I used github-markdown-css.*/
/*Let us start~*/
/*....1....*/
/*....2....*/
/*....3....*/
/*...go!...*/`,
`/*And here we are.*/?`
    ];
    this.resumeContent = [`
## MyResume

### Name : *Yichao Tang*
### Gender : *male*
### Email : *3104255643@qq.com*
### Education : Nanjing University of Posts and Telecommunication`];
  }

  async show(){
    await this.showLeftContent(this.styleContent[0]);
    await this.showLeftContent(this.styleContent[1]);
    await this.showLeftContent(this.styleContent[2]);
    await this.showRightContent(this.resumeContent[0]);
    await this.showLeftContent(this.styleContent[3]);
    this.getIsMarked();
    await this.showLeftContent(this.styleContent[4]);
    this.getMarkedStyle();
    await this.showLeftContent(this.styleContent[5]);
  }

  showLeftContent(content){
    let len = 0;
    if(this.state.style.length === 0){
      len = content.length;
    }else{
      len = this.state.style.length + content.length;
    }
    let lastIndex = this.state.style.length;
    return new Promise((resolve,reject)=>{
      const getLeftContnet = () => {
        let currentIndex = this.state.style.length - lastIndex;
        if (currentIndex>=len-lastIndex){
          resolve();
        }else{
          this.setState(
            {
              style : this.state.style + content.substring(currentIndex,currentIndex+1)
            }
          );
          setTimeout(getLeftContnet,this.interval);
        }
      }
      getLeftContnet();
    })
  }


  getIsMarked(){
    this.setState({
      isMarkdown:true
    });
  }

  getMarkedStyle(){
    this.setState({
      markdownStyle:'markdown-body'
    })
  }


  showRightContent(content){
    let len = 0;
    if(this.state.resumeContent.length === 0){
      len = content.length;
    }else{
      len = this.state.resumeContent.length + content.length;
    }
    let lastIndex = this.state.resumeContent.length;
    return new Promise((resolve,reject)=>{
      const getRightContnet = () => {
        let currentIndex = this.state.resumeContent.length - lastIndex;
        if (currentIndex>=len-lastIndex){
          resolve();
        }else{
          this.setState(
            {
              resumeContent : this.state.resumeContent + content.substring(currentIndex,currentIndex+1)
            }
          );
          setTimeout(getRightContnet,this.interval);
        }
      }
      getRightContnet();
    })
  }

  addStyle(char){
    this.setState({
      style:this.state.style + char
    });
  }

   componentDidMount(){
      this.show();
  }

  render() {
    return (
      <div>
        <StyleEditor styleContent={this.state.style} resumeContent={this.resumeContent} ref='StyleEditor'/>
        <ResumeEditor resumeContent={this.state.resumeContent} isMarkdown={this.state.isMarkdown} markdownStyle={this.state.markdownStyle}/>
        <style>{this.state.style}</style>
      </div>
    )
  }
}

export default App;
