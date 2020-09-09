import React, {Component} from "react"

class tugas12 extends Component{
  constructor(props){
    super(props)
    this.state = {
      pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ],
      inputNama: "",
      index: -1
    }
    // bind method if method using normal function
    this.submitForm = this.submitForm.bind(this);
    this.deletePeserta = this.deletePeserta.bind(this);
  }

  // method with normal function
  submitForm(event){
    event.preventDefault()
    var index = this.state.index
    if ( index === -1){
      this.setState({
        pesertaLomba: [...this.state.pesertaLomba, this.state.inputNama],
        inputNama: ""
      })
    }else{
      var newPesertaLomba = this.state.pesertaLomba 
      newPesertaLomba[index] = this.state.inputNama

      this.setState({
        pesertaLomba: [...newPesertaLomba],
        inputNama: "",
        index: -1
      })
    }
  }

  deletePeserta(event){
    var index= event.target.value
    var newPesertaLomba = this.state.pesertaLomba
    newPesertaLomba.splice(index, 1)
    this.setState({
      pesertaLomba: [...newPesertaLomba],
      inputNama: "",
      index: -1
    })
  }


  // method with arrow function
  changeInputNama = (event) =>{
    var value= event.target.value
    this.setState({inputNama: value})
  }

  editForm = (event) =>{
    var index= event.target.value
    var namaPeserta = this.state.pesertaLomba[index]
    this.setState({
      inputNama: namaPeserta,
      index
    })

  }


  render(){
    return(
      <>
        <div style={{width: "70vw", margin: "0 auto"}}>
          <h1 style={{textAlign: "center"}}>Daftar Peserta Lomba</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.pesertaLomba.map((val, index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val}</td>
                        <td>
                          <button value={index} style={{marginRight: "5px"}} onClick={this.editForm}>Edit</button>
                          <button value={index} onClick={this.deletePeserta}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
          <br/>
          <br/>
          <form style={{textAlign: "center"}} onSubmit={this.submitForm}>
              <strong style={{marginRight: "10px"}}>Nama</strong>
              <input required type="text" value={this.state.inputNama} onChange={this.changeInputNama}/>
              <button>Save</button>
          </form>
        </div>
      </>
    )
  }
}

export default tugas12
