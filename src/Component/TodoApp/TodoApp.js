import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {
  state ={
    input:"",
    items:[]
  };


  handleChange=(event)=>{
    this.setState({
      input : event.target.value
    });
  };

  storeItems =(event)=>{
    event.preventDefault();
    const{input}=this.state;
    const allItems= this.state.items;

    allItems.push(input);
    this.setState({
      items: allItems,
      input: ""

    });
   //alternative way of pushhing to array using spread operatr
   //delete const allItems= this.state.items;

   //delete allItems.push(input);
   //this.setState({
     //items: [...this.state.items,input]


  }

  deleteItem=(key)=>{

    const allItems = this.state.items;
    allItems.splice(key,1);

    this.setState({

      items: allItems

    });


  }

  render() {
    const {input,items}=this.state;
    console.log(items);
    return (
      <div className='todo-container' >
       
        <form className='input-section' onSubmit={this.storeItems}>
        <h1>Todo App</h1>
            <input type="text" 
            value={input} 
            onChange={this.handleChange}
            placeholder='Enter items..'/>
           
        </form>

        <ul>
          {items.map((data,index)=>(
            <li key={index}>
              {data} <i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i>
            </li>

          ))};
        </ul>
      </div>
    )
  }
}
