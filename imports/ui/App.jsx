import React,{Component} from 'react';
import CreateArticle from "./CreateArticle";
import DisplayArticle from "./DisplayArticle";



export default class App extends Component{
    render(){
        return <div>
            <h1>BOOTCAMP BLOG</h1>
            <CreateArticle />
            <DisplayArticle />
          </div>;
    }
}

