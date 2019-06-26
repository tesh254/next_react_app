import React from "react";
import Link from "next/link";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./commons/Footer";
import Home from "./components/Home";
import SingleArticle from "./containers/SingleArticle";
import About from "./components/About";
import Privacy from "./components/Privacy";
import ContactForm from "./commons/Contact";
import NotFoundPage from "./commons/NotFoundPage";
import Search from "./commons/Search";
import "../static/css/index.css";
import "../static/css/home.css";
import "../static/css/bootstrap/css/bootstrap.min.css";
import "../static/css/posts.css";
import "../static/css/loader.css";
import "../static/css/footer.css";
import "../static/css/about.css";
import "../static/css/form.css";
import "../static/css/prism.css";
import "../static/css/comments.css";
import "../static/css/search.css";
import "../static/css/scroll.css";
import "../static/css/markdown.css";
import Head from "../components/head";
import Nav from "../components/nav";

const App = () => (
  <div>
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div className="App">
            <Head title="Home" />
            <Nav />
            <div className="App-content" id="results">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact={true}
                  path="/articles/:slug"
                  component={SingleArticle}
                />
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/privacy" component={Privacy} />
                <Route exact={true} path="/contact" component={ContactForm} />
                <Route exact={true} path="/search" component={Search} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </Provider>

    <style global jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Coiny|PT+Sans|Raleway");
      @import url("https://fonts.googleapis.com/css?family=Quicksand:300");
      @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Laila");

      /*
      
      font-family: 'PT Sans', sans-serif;
      font-family: 'Coiny', cursive;
      font-family: 'Raleway', sans-serif;
      
      */

      .s-link {
        color: #2aa198 !important;
      }

      body {
        background: #011c23 !important;
        color: antiquewhite !important;
        font-family: "Raleway", serif;
        padding: 0;
        margin: 0;
      }

      .App-content {
        min-height: 100%;
      }

      /* Add a black background color to the top navigation */
      .topnav {
        background-color: #011c23 !important;
        overflow: hidden;
        font-family: "Arial", cursive;
        z-index: 10 !important;
        position: fixed;
        width: 100%;
        height: auto;
      }
      /* 
      .topnav .search {
          float: right;
          padding-left: 68%;
          margin: 15px;
      }
      
      .topnav .search input {
          outline: none;
          background: #35383b;
          border: none;
          padding: 5px;
          width: 200px;
          border-radius: 15px;
          color: #dfa612;
      }
      
      .topnav .search i {
          margin: 5px;
          color: #dfa612;
      } */

      /* Style the links inside the navigation bar */
      .topnav #link,
      .topnav a {
        float: left;
        display: block;
        color: white;
        text-align: right;
        /* padding: 14px 16px; */
        text-decoration: none;
        font-size: 17px;
        transition: all 0.5s;
      }

      /* Change the color of links on hover */
      .topnav #link:hover,
      .topnav a:hover {
        background-color: #011c23;
        color: #faebd7;
      }

      /* Add an active class to highlight the current page */
      .active {
        background-color: #011c23;
        color: white;
      }

      .active:hover {
        color: #f3ddc0;
      }

      /* Hide the link that should open and close the topnav on small screens */
      .topnav .icon {
        display: none;
        transition: all 5s;
      }

      .logo {
        width: 75px;
      }

      .right-link {
        padding-left: 25px;
        padding-top: 25px;
      }

      /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
      @media screen and (max-width: 700px) {
        .topnav a:not(:first-child),
        .topnav #link:not(:first-child) {
          display: none;
        }

        .topnav a.icon,
        .topnav #link.icon {
          float: right;
          display: block;
          color: antiquewhite;
        }

        .topnav a.icon {
          padding-right: 15px;
          margin: auto;
        }
        /* 
          .topnav .search {
              float: left;
              margin: 15px;
          }
      
          .topnav .search input {
              outline: none;
              background: #35383b;
              border: none;
              padding: 5px;
              width: 92%;
              border-radius: 15px;
              color: #dfa612;
          } */
      }

      /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
      @media screen and (max-width: 700px) {
        .topnav.responsive {
          position: relative;
          z-index: 10 !important;
        }

        .topnav.responsive a.icon {
          position: absolute;
          right: 0;
          top: 0;
          color: antiquewhite;
          outline: none;
        }

        .topnav.responsive #link {
          float: none;
          display: block;
          text-align: left;
        }
      }
    `}</style>
  </div>
);

export default App;
