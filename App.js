import React from 'react';
import logo from './logo.svg';
import './App.css';


class app extends React.Component {
  constructor(props)
  { 
    super(props);
    this.state = {
                    name:" ",
                    age:" ",
                    salary : " "
                  }
  }

  handlenameChange = (event) =>{
    this.setState({name:event.target.value})
  }
  handleageChange = (event) =>{
    this.setState({age:event.target.value})
  }
  handlesalaryChange = (event) =>{
    this.setState({salary:event.target.value})
  }
  handleSubmit = event => {
    alert(`${this.state.name}${this.state.age}${this.state.salary}`)
  }
  render(){
    return(
      <form>
        <label for="Name">Name</label>
        <input type="text" value={this.state.name} onChange={this.handlenameChange} /><br />
        <label for="number">Age</label>
        <input type="number" value={this.state.age} onChange={this.handleageChange} /><br />
        <label for="number">Salary</label>
        <input type="number" value={this.state.salary} onChange={this.handlesalaryChange} /><br />
        <button type="submit" onSubmit="setvalue">Submit</button>
      </form>
    )
  }

}

export default app;

