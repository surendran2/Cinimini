import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useSearchParams } from "react-router-dom";
import background from './img/btman.jpg';

// import { useSearchParams } from "react-router-dom";

// import background from './js_file/year.jsx';
// import Test from './test'

// import $ from 'jquery';




// import React from 'react';
// import ReactDom from 'react-dom';

// import './App.css';
//  const App =() => {

function ViewMovie() {
  const [searchParams] = useSearchParams();


  // let dateDropdown = document.getElementById('date-dropdown');
  let currentYear = new Date().getFullYear();
  let earliestYear = 1970;

  while (currentYear >= earliestYear) {
    let dateOption = document.createElement('option');
    dateOption.text = currentYear;
    dateOption.value = currentYear;
    currentYear -= 1;
  }
  const [getid, setTheGetid] = useState('');
  const [getmoviename, setTheGetMoviename] = useState('');
  const [getquality, setTheGetQuality] = useState('');
  const [getrating, setTheGetRating] = useState('');
  const [getgenre, setTheGetGenre] = useState('');
  const [getyear, setTheGetYear] = useState('');
  const [getlanguage, setTheGetLanguage] = useState('');
  const [getimage, setTheImage] = useState();
  const [getmovie, setTheMovie] = useState();
  const [getstatus, setTheStatus] = useState();

  useEffect(() => {
    const params = window.location.search.substring(1);
    var pair = params.split("=");
    var passId = pair[1];
    console.log(passId);
    try {
      const res = Axios.post(
        "http://localhost:3001/getEditData", { passId: passId },

      ).then((response) => response.data)
        .then((json) => {
          console.log('edit data', json.data[0])
          setTheGetid(json.data[0].id);
          setTheGetMoviename(json.data[0].moviename);
          setTheGetQuality(json.data[0].quality);
          setTheGetRating(json.data[0].rating);
          setTheGetGenre(json.data[0].genre);
          setTheGetYear(json.data[0].year);
          setTheGetLanguage(json.data[0].language);
          setTheImage(json.data[0].image);
          setTheMovie(json.data[0].movie);
          setTheStatus(json.data[0].status);

        });
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }

  }, []);


  const history = useNavigate();
  // const [id, setId] = useState('');
  // const [moviename, setMoviename] = useState('');
  // const [quality, setQuality] = useState('');
  // const [rating, setRating] = useState('');
  // const [genre, setGenre] = useState('');
  // const [year, setYear] = useState('');
  // const [language, setLanguage] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [fileSrc, setFileSrc] = useState("");

  const [movie, setMovie] = useState();
  const [movieFileName, setMovieFileName] = useState("");
  const [movieSrc, setMovieSrc] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setFileSrc(URL.createObjectURL(e.target.files[0]));
  };
  const saveMovie = (e) => {
    setMovie(e.target.files[0]);
    setMovieFileName(e.target.files[0].name);
    setMovieSrc(URL.createObjectURL(e.target.files[0]));
  };


  const setMovies = async (e) => {
    const formData = new FormData();
    formData.append("file", movie);
    formData.append("fileName", movieFileName);
    formData.set("id", getid);

    try {
      const res = await Axios.post(
        "http://localhost:3001/movUpdate", formData,

      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
    // Axios.post('http://localhost:3001/addmovie',
    //   {

    //     moviename: moviename,
    //     quality: quality,
    //     rating: rating,
    //     genre: genre,
    //     language: language,
    //     year: year,
    //     inputEstimatedBudget: inputEstimatedBudget,
    //     inputSpentBudget: inputSpentBudget,
    //     formData: formData,

    //   }).then(function (response) {
    //     //handle success
    //     console.log('Success');
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log('Failed');
    //     console.log(response);
    //   });
    // history("/indexs", { state: { id: 1, name: 'Movie Added Successfully' } });



  }
  let minOffset = 0, maxOffset = 100;
  let thisYear = (new Date()).getFullYear();
  let allYears = [];
  for (let x = minOffset; x <= maxOffset; x++) {
    allYears.push(thisYear - x)
  }

  const yearList = allYears.map((x) => { return (<option key={x}>{x}</option>) });
  //For display the image
  var imgtag;
  var videotag;

  if (fileSrc) {
    imgtag = <div class="form-group">
      <img src={fileSrc} alt={fileName} height={400} width={400} class="rounded mx-auto d-block" />
    </div>;
  }
  else if (getimage) {
    imgtag = <div class="form-group">
      <img src={`http://localhost:3001/images/${getimage}`} alt={fileName} class="rounded mx-auto d-block" height={400} width={400}/>
    </div>;
  }
  else {
    imgtag = <div class="form-group">
    </div>;
  }
  //For display the video
  if (movieSrc) {
    videotag = <div class="form-group">
      <video width="320" height="240" controls>
        <source src={movieSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>        </div>;
  }
  else if (getmovie) {
    videotag = <div class="form-group">
      <a href={`http://localhost:3001/movies/${getmovie}`} download>Click to download</a>
      {/* <video width="320" height="240" controls>
        <source src={`http://localhost:3001/movies/${getmovie}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>     */}
    </div>;
  }
 
  else {
    videotag = <div class="form-group">
    </div>;
  }

  return (
    <div >
      <body>
        <div class='row'>
          <div class='col-md-4'></div>
          <div class='col-md-4'>

            <div class="card card-info">
              <div class="card-header">
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <section class="content">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">{imgtag} </h3>
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
                      <form onSubmit={setMovies}>

                        <table class="table table-striped table-dark " style={{ backgroundImage: `url(${background})`, textAlign: 'center', backgroundSize: '500px 300px' }}>
                          {/* <tr colspan='2'>
                          <td >{imgtag}</td>
                        </tr> */}
                          <tr>
                            <td style={{fontWeight:'bold'}}>Movie Name</td>
                            <td>{getmoviename}</td>
                          </tr>
                          <tr>
                            <td  style={{fontWeight:'bold'}}>Quality</td>
                            <td>{getquality}</td>
                          </tr>
                          <tr>

                            <td style={{fontWeight:'bold'}} >Rating</td>
                            <td>{getrating}</td>
                          </tr>
                          <tr>
                            <td style={{fontWeight:'bold'}}>Genre</td>
                            <td>{getgenre}</td>
                          </tr>
                          <tr>
                            <td style={{fontWeight:'bold'}}>Language</td>
                            <td>{getlanguage}</td>
                          </tr>
                          <tr>
                            <td style={{fontWeight:'bold'}}>Year</td>
                            <td>{getyear}</td>
                          </tr>
                          <tr>
                            <td  style={{fontWeight:'bold'}}>Upload Status</td>
                            <td>{getstatus == 0 ? <span class="badge bg-primary">Pending</span> : <span class="badge bg-success">Uploaded</span>}
                            </td>
                          </tr>


                          <tr>
                            <td>
                              <div class="form-group">
                               {getstatus == 0? <input type="file" onChange={saveMovie} required />:''} 
                                {videotag}
                              </div>
                            </td>
                            <td>{getstatus == 0 ? <button type="submit" class="btn btn-success float-right" >Upload</button>:''}</td>

                          </tr>


                        </table>
                      </form>

                    </div>

                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class="card-body">
              <section class="content-header">
                <div class="container-fluid">

                </div>
              </section>
            </div>
          </div>
        </div>

      </body>
    </div>

  );
}
export default ViewMovie;