import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
function EditMovie() {
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



  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setFileSrc(URL.createObjectURL(e.target.files[0]));
  };


  const setMovies = (e) => {
    // alert(rating);
    e.preventDefault();

    const formData = new FormData();
    // if(!file && !fileName)
    // {
    //   formData.append("file", file);
    //   formData.append("fileName", fileName);
    // }
    // else{
    //   file = 
    //   formData.append("file", file);
    //   formData.append("fileName", fileName);
    // }
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.set("id", getid);
    formData.set("moviename", getmoviename);
    formData.set("quality", getquality);
    formData.set("rating", getrating);
    formData.set("genre", getgenre);
    formData.set("year", getyear);
    formData.set("language", getlanguage);
    formData.set("tempimage", getimage);

    console.log(formData)
    // alert('hello');
    Axios.post(
      "http://localhost:3001/editmovie", formData
    ).then(function (response) {
      //handle success
      console.log(response);
    })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
      if (getmoviename && getquality && getrating && getgenre && getlanguage && getyear ) {
        history("/index", { state: { id: 1, name: "Movie Added Successfully" } });
      }
      }
  let minOffset = 0, maxOffset = 100;
  let thisYear = (new Date()).getFullYear();
  let allYears = [];
  for (let x = minOffset; x <= maxOffset; x++) {
    allYears.push(thisYear - x)
  }

  const yearList = allYears.map((x) => { return (<option key={x}>{x}</option>) });
  var imgtag,imginput;

  if (fileSrc) {
    imgtag = <div class="form-group">
      <img src={fileSrc} alt={fileName} width="100%" height="100%" />
    </div>;
  }
  else if (getimage) {
    imgtag = <div class="form-group">
      <img src={`http://localhost:3001/images/${getimage}`} alt={fileName} width="100%" height="100%" />
    </div>;
    imginput = <input type="file" onChange={saveFile} />;

  }
  else {
    imgtag = <div class="form-group">
    </div>;
    imginput = <input type="file" onChange={saveFile} required />;

  }


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
                      <input type="hidden" id="id" name='id' class="form-control" required value={getid} onChange={(e) => { setTheGetid(e.target.value) }
                      }
                      />
                      <input type="text" id="moviename" name='moviename' placeholder='Type Movie Name' class="form-control" required value={getmoviename} onChange={(e) => { setTheGetMoviename(e.target.value) }
                      }
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputStatus">Quality</label>
                      <select id="inputStatus" name='quality' class="form-control custom-select" required value={getquality} onChange={(e) => { setTheGetQuality(e.target.value) }
                      }>
                        <option value=''>Select Quality</option>
                        <option>720p</option>
                        <option>1080p</option>
                        <option>2160p</option>
                        <option>3D</option>

                      </select>
                    </div>
                    <div class="form-group">
                      <label for="inputStatus">Rating</label>
                      <select id="inputStatus" name='rating' required class="form-control custom-select" value={getrating} onChange={(e) => { setTheGetRating(e.target.value) }
                      } >
                        <option value=''>Select Rating</option>
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
                      <select id="inputStatus" name='genre' required class="form-control custom-select" value={getgenre} onChange={(e) => { setTheGetGenre(e.target.value) }
                      } >
                        <option value=''>Select Genre</option>
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
                      <select id="inputStatus" name='language' required class="form-control custom-select" value={getlanguage} onChange={(e) => { setTheGetLanguage(e.target.value) }
                      }
                      >
                        <option value=''>Select Language</option>
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
                      <select id="inputStatus" name='year' required class="form-control custom-select" value={getyear} onChange={(e) => { setTheGetYear(e.target.value) }
                      }>
                        <option value=''>Select Year</option>
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
                    {/* <input type="file" onChange={saveFile} /> */}
                    {imginput}
                  </div>
                  {imgtag}

                  <div class="form-group">
                    {/* <a href="/index" class="btn btn-secondary">Cancel</a> */}

                    <button type="submit"  class="btn btn-success float-right" >Create new Project</button>
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
export default EditMovie;