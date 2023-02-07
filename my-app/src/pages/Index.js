import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Navbar from "./layout/navbar.js";
import background from './img/16bf3ad0b84795293ccb5128c19e136a.jpg';
import './animation.css';

import Navbar from "./layout/navbar.js";
// import background from './img/16bf3ad0b84795293ccb5128c19e136a.jpg';
import first from './4k_images/16bf3ad0b84795293ccb5128c19e136a.jpg';
import second from './4k_images/37959.webp';
import third from './4k_images/23987.jpg';
import fourth from './4k_images/681754.jpg';
import fitth from './4k_images/all-hail-darkseid-4k-iu-1920x1080.jpg';
import sixth from './4k_images/bladerunner--movie-scene-wallpaper.jpg';
import seventh from './4k_images/images (1).jpg';
import eighth from './4k_images/images (2).jpg';
import nineth from './4k_images/images (3).jpg';
import tenth from './4k_images/jake-sully-neytiri-ikran-makto-seze-wallpaper-preview.jpg';
import eleventh from './4k_images/second.jpg';
import twelveth from './4k_images/sonic-sonic-the-hedgehog-2020-sonic-the-hedgehog-hd-wallpaper-preview.jpg';
import thirteenth from './4k_images/wallpapersden.com_76507-4096x1895.jpg';
import forteenth from './4k_images/wp3168865.jpg';
import fifteenth from './4k_images/wp7653796.webp';
// import one from './4k_images2/wp7653796.jpg';
import two from './4k_images2/10915293.jpg';
import three from './4k_images2/avengers-endgame-movie-characters-uhdpaper.com-4K-52.jpg';
import four from './4k_images2/dolittle-movie-poster-uhd-4k-wallpaper-548x308.jpg';
import five from './4k_images2/images.jpg';
import six from './4k_images2/wallpapersden.com_godzilla-king-of-the-monsters-4k-movie_3840x1766.jpg';
import seven from './4k_images2/spider-man-into-the-spider-verse-4k-wallpaper-preview.jpg';
import eight from './4k_images2/wallpapersden.com_k-bullet-train-movie-poster_3840x2160.jpg';
import nine from './4k_images2/wallpapersden.com_spider-man-no-way-home-4k-movie-mcu_3840x2160.jpg';
import ten from './4k_images2/wallpapersden.com_strange-world-4k-movie_3937x2783.jpg';
import eleven from './4k_images2/37949.webp';
import twelve from './4k_images2/A-Shaun-The-Sheep-Movie-Farmageddon-Animation-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg';

import './sample.css';
// import MovieAdd from "./mov_add";

// import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  console.log("1 entery...>")
  console.log("2 entery...>")


  const location = useLocation();
  console.log('name--->', location)
  // if(location.state.name)
  // {
  //   alert('Sucess');
  //   const notify = () => toast.success("Hello "+location.state.name);
  const notify = () => toast.success(location.state.name);

  // }
  // const notify = () => {}
  // const notify;
  // const notify = () => toast.success("");

  //   if(location.state.name == 'suren')
  //   {
  //     // const notify = () => toast(true);

  //     const notify1 = () => toast.success("Hello "+location.state.name);
  // // alert('heelo');
  //     // const notify = () => toast.success("Movie Name Successfully Added ");
  //   }
  //   else
  //   {
  //     const notify = () => toast.success("Hello "+location.state.name);

  //   }



  console.log("3 entery...>")
  function loaded() {
    alert('Page is loaded');
  }
  useEffect(() => {
    console.log("4 entery...>")
    notify();

  }, []);



  return (
    <div>

      <Navbar />
      <div style={{ textAlign: 'center' }}>
      <ToastContainer />

        <h1 class="animate__animated  animate__infinite animate__jello"><center>Cini Mini</center></h1>

        <a class="btn btn-primary animate__animated  animate__infinite animate__tada" href="/mov_add" role="button">Add Movie</a>
      </div>
      <div class='row'>


        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeIn">

              <img src={`${first}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>

            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            <div class="square animate__animated animate__infinite animate__fadeInDown">
              <img src={`${second}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}

            <div class="square animate__animated animate__infinite animate__fadeInLeft">

              <img src={`${third}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeInRight">
              <img src={`${fourth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeInUp">
              <img src={`${fitth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeOut">
              <img src={`${sixth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}

        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeOutDown">
              <img src={`${seventh}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeOutLeft">

              <img src={`${eighth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />

            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeOutRight">
              <img src={`${nineth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__fadeOutUp">

              <img src={`${tenth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideInDown">

              <img src={`${eleventh}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideInLeft">

              <img src={`${twelveth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}

        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideInRight">
              <img src={`${thirteenth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideInUp">

              <img src={`${forteenth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideOutDown">

              <img src={`${fifteenth}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideOutLeft">

              <img src={`${two}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideOutRight">

              <img src={`${three}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideOutRight">

              <img src={`${four}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}

        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__slideOutDown">

              <img src={`${five}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__rubberBand">

              <img src={`${six}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__shakeX">

              <img src={`${seven}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__shakeY">

              <img src={`${eight}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__tada">

              <img src={`${nine}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__wobble">

              <img src={`${ten}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}

        {/* <!--Grid row--> */}
        <div class="row d-flex justify-content-center">
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__heartBeat">

              <img src={`${eleven}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
          {/* <!--Grid column--> */}
          <div class="col-sm-2">
            {/* <!-- Square --> */}
            <div class="square animate__animated animate__infinite animate__backInDown">

              <img src={`${twelve}`} alt="Avatar" class='rounded-corners' height={250} width={250} style={{ float: "left", verticalAlign: 'middle' }} />
            </div>
            {/* <!-- Square --> */}
          </div>
        </div>
        {/* <!--Grid row--> */}
      </div>
      <div id="parentDiv" class="myDiv">
        <div class="img" ></div>
        <div id="secondChild">Lorem Ipsum Colro dito pilo Lorem Ipsum Colro dito pilo Lorem Ipsum Colro dito pilo Lorem Ipsum Colro </div>
      </div>
    </div>
  )

}

// const location = useLocation();
// const notify = () => toast.success("Hello "+location.state.name);

//  class index extends React.Component
//  {
//   // constructor()
//   // {
//   //   super();
//   //   this.state=(name:)

//   // }
//   componentWillMount()
//   {
//     alert('heelo');

//   }
//   render()
//   {
//     return <div>
//   <body style={{background:'green'}}>
//      <h1>hello</h1>
//     <h1 > {location.state.name}</h1>
//     <button onClick={notify}>Notify!</button>
//       <ToastContainer />

//      </body>      </div>
//   }
//  }



// ReactDom.render(<RegisterForm />, document.getElementById('root'));


export default Index;