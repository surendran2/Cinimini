import { Grid, Card } from 'semantic-ui-react'
import Navbar from "./layout/navbar.js";
import './sample.css';

import React from 'react';
import Axios from 'axios';
import './sample.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


// import logo from './logo.svg';
// import './App.css';

class CusIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '', DataisLoaded: false, hovered: false, mouseOver: false,
    };


  }

  componentWillMount() {
    // Axios.get('http://localhost:3001/showmovielist').then((response) => {
    //   this.setState({ apiResponse: JSON.stringify(response.data.message) });
    // });
    const params = new URLSearchParams(window.location.pathname);

    Axios.get('http://localhost:3001/showmovielists').then((response) => response.data.message)
      .then((json) => {
        console.log(json) 
        this.setState({
          apiResponse: JSON.parse(json),
          DataisLoaded: true
        });
      })
    $(document).ready(function () {
      setTimeout(function () {
        $('#example').DataTable();
      }, 1000);
    });

  }
  //   let allProducts = data.map(function (item) {
  //     return new getData(item);
  // });

  renderItems() {
    // const src = 'https://placeimg.com/640/480/arch'
    // console.log(mouseOver);
    const { path, mouseOver } = this.state;

    return this.state.apiResponse.map((item) => (
      // <div class='col-md-3'>
      //   <div class="card " style={{ backgroundColor: "#dae6eb" }}>
      //     <div class="card-header">
      //       <center>
      //         <img src={`http://localhost:3001/images/${item.image}`} alt="Avatar" class="image" />
      //         <div class="overlay">
      //           <div class="text">Hello World</div>
      //         </div>
      //       </center>
      //       <center> <b> <a href={`http://localhost:3000/mov_view?projId=${item.id}`}>{item.moviename} ({item.year})</a></b></center>
      //     </div>
      //   </div>
      // </div>
      <div class='col-md-2'>

        <div class="container">
          <div class="card " style={{ backgroundColor: "#dae6eb" }}>
            <div class="card-header">
              <img src={`http://localhost:3001/images/${item.image}`} alt="Avatar" height={150} width={150} />
              
              <div class="overlay">
                <img src={`http://localhost:3001/images/${item.image}`} alt="Avatar" height={200} width={300} /><br/>
        

              </div>
            </div>
            <div class="card-body">
          <center> <b> <a href={`http://localhost:3000/mov_view?projId=${item.id}`}>{item.moviename} ({item.year})</a></b></center>

          </div>  
          </div>
       

        </div>
      </div>


    ));
  }


  render() {
    const { DataisLoaded, apiResponse } = this.state;
    var imgdata;
    if (!DataisLoaded) return <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <h1 style={{textAlign: 'center'}}> Pleses wait some time.... </h1>
    <center><img src={"https://media.tenor.com/-NoKc-auITEAAAAM/loading-buffering.gif"} height = {200} width = {200} /></center> </div>;

    return (
      <div class='App'>
      <Navbar />

        <div class='row'>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
export default CusIndex;
