import React, { Component } from 'react';
import "./App.scss";


export interface IObejctVlaue{
  name: string;
  age: string;
  marks: string;
}

export interface IApp {
  name: string;
  age: string;
  marks: string;
  ObejctVlaueArray: Array<IObejctVlaue>;
}

export default class App extends Component {
  state: IApp = {
    name: " ",
    age: " ",
    marks: " ",
    ObejctVlaueArray: []
  }
  componentDidMount(){
  }

  enterText(e: any, num: number){
    if(num === 0){
      this.setState({name: e.target.value})
    }
    else if(num === 1){
      this.setState({age: e.target.value})
    }
    else if(num === 2){
      this.setState({marks: e.target.value})
    }
  }

  enterTextDone(){
    const x = [];
    // const formElements = document.getElementsByTagName( "input" );
    const value: IObejctVlaue = {
      // name:formElements[0].value, age:formElements[1].value, marks:formElements[2].value
      name:this.state.name, age:this.state.age, marks:this.state.marks
    }
    x.push(value);
    this.setState({
      ObejctVlaueArray:  [...x.concat(this.state.ObejctVlaueArray)],  /* Value print top */
      // ObejctVlaueArray:  this.state.ObejctVlaueArray.concat(x)        /* Value print bottom */
    })
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="row" style={{margin:"0px"}}>
          <div className="col-xl-5 offset-xl-3 block">
            <div style={{marginLeft:"-25%"}}>enter name</div>
              <input type="text" defaultValue= "" placeholder="Name" onChange={(e) => {this.enterText(e, 0)}} />
            <div style={{marginLeft:"-27%"}}>enter age</div>
              <input type="text" defaultValue= "" placeholder="Age" onChange={(e) => {this.enterText(e, 1)}}/>
            <div style={{marginLeft:"-25%"}}>enter marks</div>
              <input type="text" defaultValue= ""  placeholder="Marks" onChange={(e) => {this.enterText(e, 2)}}/>
              <div style={{marginTop:"15px"}}>
                <button onClick={() => {this.enterTextDone()}}>Submit</button>
              </div>
          </div>


          <div className="col-xl-5 offset-xl-3 block" style={{overflowY:"scroll", maxHeight:"400px"}}>
          <div style={{float:"left", marginTop:"-6%", marginLeft:"-5%"}}>Output:-</div>
              <table style={{width:"100%"}}>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                  </tr>
                    {this.state.ObejctVlaueArray.map((v: IObejctVlaue, index) => {
                      return(
                          <tr key= {index}>
                              <td>{v.name}</td>
                              <td>{v.age}</td>
                              <td>{v.marks}</td>
                          </tr>
                      )
                    })}
                </table>
          </div>
      </div>
    )
  }
}
