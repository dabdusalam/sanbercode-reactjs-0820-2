import React from 'react';


export default class tugas9 extends React.Component{
  render(){
    return(
      <>
        <div>
  <title>Form Pembelian Buah</title>
  <div style={{width: "40%",margin: "0 auto",border: "1px solid #000",borderRadius: 20}}>
    <h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
    <div style={{ padding: 20, paddingTop: 0 }}>
      <div style={{ display: "block", marginBottom: "1em" }}>
        <div style={{ display: "inline-block",width: 150,fontWeight: "bold",fontSize: 16}}>
          Nama Pelanggan
        </div>
        <input style={{ display: "inline-block" }} type="text" name="name" />
      </div>
      <div style={{ display: "block", marginBottom: "1em" }}>
        <div style={{display: "inline-block",width: 150,fontWeight: "bold",fontSize: 16}}>
          Daftar Item
        </div>
        <div style={{ display: "inline-block" }}>
          <input type="checkbox" name="semangka" defaultValue="semangka" />
          <label>Semangka</label><br />
          <input type="checkbox" name="jeruk" defaultValue="jeruk" />
          <label>Jeruk</label><br />
          <input type="checkbox" name="nanas" defaultValue="nanas" />
          <label>Nanas</label><br />
          <input type="checkbox" name="salak" defaultValue="salak" />
          <label>Salak</label><br />
          <input type="checkbox" name="anggur" defaultValue="anggur" />
          <label>Anggur</label><br />
        </div>
      </div>
      <button style={{ background: "white", borderRadius: 20 }}>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Kirim
        </a>
      </button>
    </div>
  </div>
</div>
</>
      );
  }
}