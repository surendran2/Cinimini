import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
// import background from './js_file/year.jsx';
// import Test from './test'

// import $ from 'jquery';




// import React from 'react';
// import ReactDom from 'react-dom';

// import './App.css';
//  const App =() => {

function AddMovie() {


  // let dateDropdown = document.getElementById('date-dropdown');
  let currentYear = new Date().getFullYear();
  let earliestYear = 1970;

  while (currentYear >= earliestYear) {
    let dateOption = document.createElement('option');
    dateOption.text = currentYear;
    dateOption.value = currentYear;
    currentYear -= 1;
  }



  const history = useNavigate();

  const [moviename, setMoviename] = useState('');
  const [quality, setQuality] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [language, setLanguage] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [fileSrc, setFileSrc] = useState("");
  // const [movie, setMovie] = useState();
  // const [movieFileName, setMovieFileName] = useState("");
  // const [movieSrc, setMovieSrc] = useState("");
  // const [allValues, setAllValues] = useState({
  //   moviename: '',
  //   quality: '',
  //   rating: '',
  //   genre: '',
  //   language: '',
  //   year: '',moviename
  //   inputEstimatedBudget: '',
  //   inputSpentBudget: '',
  //   file: ''
  // });
  // const changeHandler = e => {
  // setAllValues({
  //   ...allValues, [e.target.name]: e.target.value,
  //   // [e.target.quality]: e.target.value,
  //   // [e.target.rating]: e.target.value,
  //   // [e.target.genre]: e.target.value,
  //   // [e.target.language]: e.target.value,
  //   // [e.target.year]: e.target.value,
  //   // [e.target.inputEstimatedBudget]: e.target.value,
  //   // [e.target.inputSpentBudget]: e.target.value,

  // })
  // console.log("values....>", allValues);
  // alert(allValues);
  // }
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setFileSrc(URL.createObjectURL(e.target.files[0]));
  };
  // const saveMovie = (e) => {
  //   setMovie(e.target.files[0]);
  //   setMovieFileName(e.target.files[0].name);
  //   setMovieSrc(URL.createObjectURL(e.target.files[0]));
  // };


  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3001/upload",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

  const setMovies = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    // formData.append("movie", movie);
    // formData.append("movieFileName", movieFileName);
    formData.set("moviename", moviename);
    formData.set("quality", quality);
    formData.set("rating", rating);
    formData.set("genre", genre);
    formData.set("year", year);
    formData.set("language", language);
    console.log(formData)
    // alert(moviename && quality && rating && genre && rating && year && file && fileName)

    // alert('hello')
    Axios.post(
      "http://localhost:3001/addmovie", formData
    ).then(function (response) {
      //handle success
      console.log(response);
    })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    if (moviename && quality && rating && genre && rating && year && file && fileName) {
      history("/index", { state: { id: 1, name: "Movie Added Successfully" } });
    }
    // else{
    //   if(!moviename)
    //   {
    //     alert('Movie Name is mandatory');
    //     history("/index", { state: { id: 1, name: "Movie Added Successfully" } });
    //   }
    //   if(!quality)
    //   {
    //     alert('quality Name is mandatory');
    //   history("/mov_add");
    //   }      if(!rating)
    //   {
    //     alert('rating Name is mandatory');
    //   history("/mov_add");
    //   }
    // }

  }
  let minOffset = 0, maxOffset = 100;
  let thisYear = (new Date()).getFullYear();
  let allYears = [];
  for (let x = minOffset; x <= maxOffset; x++) {
    allYears.push(thisYear - x)
  }

  const yearList = allYears.map((x) => { return (<option key={x}>{x}</option>) });

  return (
    <div >
      <body>
        <form onSubmit={setMovies}>
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Add New Movie</h1>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <div class="row">
              <div class="col-md-6">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">General</h3>
                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="inputName">Movie Name</label>
                      <input type="text" id="moviename" name='moviename' placeholder='Type Movie Name' class="form-control" required onChange={(e) => { setMoviename(e.target.value) }
                      }
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputStatus">Quality</label>
                      <select id="inputStatus" name='quality' class="form-control custom-select" required onChange={(e) => { setQuality(e.target.value) }
                      }>
                        <option value="">Select Quality</option>
                        <option>720p</option>
                        <option>1080p</option>
                        <option>2160p</option>
                        <option>3D</option>

                      </select>
                    </div>
                    <div class="form-group">
                      <label for="inputStatus">Rating</label>
                      <select id="inputStatus" name='rating' class="form-control custom-select" required onChange={(e) => { setRating(e.target.value) }
                      } >
                        <option value="">Select Rating</option>
                        <option>9+</option>
                        <option>8+</option>
                        <option>7+</option>
                        <option>6+</option>
                        <option>5+</option>
                        <option>4+</option>
                        <option>3+</option>
                        <option>2+</option>
                        <option>1+</option>


                      </select>
                    </div>
                    <div class="form-group">
                      <label for="inputStatus">Genre</label>
                      <select id="inputStatus" name='genre' class="form-control custom-select" required onChange={(e) => { setGenre(e.target.value) }
                      } >
                        <option value="">Select Genre</option>
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>Animation</option>
                        <option>Biography</option>
                        <option>Comedy</option>
                        <option>Crime</option>
                        <option>Documentart</option>
                        <option>Drama</option>
                        <option>Family</option>
                        <option>Fantasy</option>
                        <option>Film-Noir</option>
                        <option>Game-Show</option>
                        <option>History</option>
                        <option>Horror</option>
                        <option>Music</option>
                        <option>Musical</option>
                        <option>Sport</option>
                        <option>Sci-Fi</option>
                        <option>Thriller</option>
                        <option>War</option>
                        <option>Romance</option>


                      </select>
                    </div>
                    <div class="form-group">
                      <label for="inputStatus">Language</label>
                      <select id="inputStatus" name='language' class="form-control custom-select" required onChange={(e) => { setLanguage(e.target.value) }
                      }
                      >
                        <option value="">Select Language</option>
                        <option>Tamil</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>English</option>
                        <option>Korean</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="inputStatus">Year</label>
                      {/* <input type="text" class="form-control" name="datepicker" id="datepicker" /> */}
                      <select id="inputStatus" name='year' class="form-control custom-select" required onChange={(e) => { setYear(e.target.value) }
                      }>
                        <option value="">Select Year</option>
                        {yearList}
                      </select>

                    </div>

                  </div>

                </div>

              </div>
              <div class="col-md-6">
                <div class="card card-secondary">
                  <div class="card-header">
                    <h3 class="card-title">Budget</h3>
                    <div class="card-tools">
                      <button type="button" name='budget' class="btn btn-tool" data-card-widget="collapse" title="Collapse" >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="uploadImage">Upload the Movie Picture</label>
                    <input type="file" onChange={saveFile} required />
                  </div>
                  {/* <div class="form-group">
                    <label for="uploadMovie">Upload the Movie </label>
                    <input type="file" onChange={saveMovie} required />
                  </div> */}

                  {/* {movieSrc ? (
                    <div class="form-group">
                      <video width="320" height="240" controls>
                        <source src={movieSrc} type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                        </div>) : (
                        '')} */}
                        {fileSrc ? (
                          <div class="form-group">
                            <img src={fileSrc} alt={fileName} width="100%" height="100%" />
                          </div>) : (
                          '')}


                        <div class="form-group">
                          {/* <a href="/index" class="btn btn-secondary">Cancel</a> */}

                          <button type="submit" class="btn btn-success float-right" >Create new Project</button>
                        </div>
                    </div>

                </div>

              </div>
              {/* <div class="row">
          <div class="col-12">
            <a href="#" class="btn btn-secondary">Cancel</a>
            <input type="submit" value="Create new Project" class="btn btn-success float-right" />
          </div>
        </div> */}
          </section>
        </form>
      </body>
    </div>





  );



  // ReactDom.render(<RegisterForm />, document.getElementById('root'));

}
export default AddMovie;