import React, {Component} from 'react'

class timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }

  stater() {
    this.setcurTime({
      curTime : this.Date().toLocaleString()
    });
 }


  render(){
    return(
      <>
        <h1 style={{textAlign: "center"}}>
          Sekarang Jam : {this.stater.curTime},
          hitung mundur: {this.state.time}
        </h1>
      </>
    )
  }
}

export default Timer