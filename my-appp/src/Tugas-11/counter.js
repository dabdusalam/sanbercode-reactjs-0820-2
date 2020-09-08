import React, {Component} from "react"

class counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

    render(){
    return(
      <>
        <h1 style={{textAlign: "center"}}>
          {this.state.count}
        </h1>
      </>
    )
  }
}

export default counter