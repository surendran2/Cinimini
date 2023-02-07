import React from 'react';
import Axios from 'axios';
import background from './img/Blue-Dragon-HD-Wallpapers.jpg';
import './sample.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Navbar from "./layout/navbar.js";
 

// import logo from './logo.svg';
// import './App.css';
class MovIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '', DataisLoaded: false };


  }

  componentWillMount() {
    // Axios.get('http://localhost:3001/showmovielist').then((response) => {
    //   this.setState({ apiResponse: JSON.stringify(response.data.message) });
    // });
      const params = new URLSearchParams(window.location.pathname);

    Axios.get('http://localhost:3001/showmovielist').then((response) => response.data.message)
      .then((json) => {
        console.log(json)
        this.setState({
          apiResponse: JSON.parse(json),
          DataisLoaded: true
        });
      })
      $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable();
         } ,1000);
    });
 
  }
  //   let allProducts = data.map(function (item) {
  //     return new getData(item);
  // });
  render() {
    const { DataisLoaded, apiResponse } = this.state;
    var imgdata;
    // const folder = 'http://localhost:3001/';
    if (!DataisLoaded) return <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 style={{textAlign: 'center'}}> Pleses wait some time.... </h1>
      <center><img src={"https://media.tenor.com/-NoKc-auITEAAAAM/loading-buffering.gif"} height = {200} width = {200} /></center> </div>;
    // const image = window.location.origin ; 

    return (
      <div className="App">
      <Navbar />
      
        <div class="card">
          <div class="card-header">
          <h1>Movie List</h1>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i class="fas fa-minus"></i>
              </button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div class="card-body p-0">

            <table id="example" class="table table-striped backGroundImageForMovIndex">
              <thead>
                <tr>
                  <th scope="col"><h4>Movie Name</h4></th>
                  <th scope="col"><h4>Quality</h4></th>
                  <th scope="col"><h4>Rating</h4></th>
                  <th scope="col"><h4>Genre</h4></th>
                  <th scope="col"><h4>Language</h4></th>
                  <th scope="col"><h4>Year</h4></th>
                  <th scope="col"><h4>Upload Status</h4></th>
                  <th scope="col"><h4>Image</h4></th>
                  <th scope="col"><h4>Action</h4></th>
                </tr>
              </thead>
              <tbody>
                {apiResponse.map((item, i) => (
                  <tr key={i}>
                    <td><h6>{item.moviename}</h6></td>
                    <td><h6>{item.quality}</h6></td>
                    <td><h6>{item.rating}</h6></td>
                    <td><h6>{item.genre}</h6></td>
                    <td><h6>{item.language}</h6></td>
                    <td><h6>{item.year}</h6></td>
                    <td>{item.status==0?<span class="badge bg-primary">Pending</span>:<span class="badge bg-success">Uploaded</span>}</td>

                    <td><img src={`http://localhost:3001/images/${item.image}`} height='200' width='250' />
                    </td>
                    <td class=" text-center ">
                      <tr><td>
                        <a class="btn btn-primary btn-sm" href={`http://localhost:3000/mov_view?projId=${item.id}`}>
                          <i class="fas fa-folder">
                          </i>
                          View
                        </a> </td><td>
                          <a class="btn btn-info btn-sm" href={`http://localhost:3000/mov_edit?projId=${item.id}`}>
                            <i class="fas fa-pencil-alt">
                            </i>
                            Edit
                          </a> </td><td>
                          <a class="btn btn-danger btn-sm" href="#">
                            <i class="fas fa-trash">
                            </i>
                            Delete
                          </a></td>
                      </tr>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}
export default MovIndex;
