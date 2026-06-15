
// To install react-router-dom for routing, run:
// npm install react-router-dom
// or
// yarn add react-router-dom
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FirstComponent from './firstComponent';
import CourseComponent from './courseComponent';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import React, { useEffect } from 'react';
import AllCourses from './allCourses';
//import { Jumbotron } from 'reactstrap';


function App() {
  const notify = () => toast('Wow so easy !');

  useEffect(() => {
    toast.success('🦄 Wow so easy!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // Make sure Bounce is imported or replace with a valid transition
      transition: Bounce,
    });
  }, []);

  return (

    // jumbotron is deprecated 
   <BrowserRouter> 
    <>
    {/* <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron> */}


      <Button onClick={notify}>Notify !</Button>
      
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <FirstComponent id="this is 1" colour="#ffebee" />
    <FirstComponent id="this is 2" colour="#e8f5e9" />

            

    <div className="btn-group">
  <button type="button" className="btn btn-primary">DropDown</button>
  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
    <Button color="danger">danger</Button>

    {/* //dropdown from reactstrap library */}

    {/* <UncontrolledDropdown>
      <DropdownToggle caret color="dark">
        Primary
      </DropdownToggle>
      <DropdownMenu dark>
        <DropdownItem header>
          Header
        </DropdownItem>
        <DropdownItem>
          Some Action
        </DropdownItem>
        <DropdownItem text>
          Dropdown Item Text
        </DropdownItem>
        <DropdownItem disabled>
          Action (disabled)
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Foo Action
        </DropdownItem>
        <DropdownItem>
          Bar Action
        </DropdownItem>
        <DropdownItem>
          Quo Action
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown> */}

    {/* // card example from reactstrap library */}


    {/* <Card
  color="dark"
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card> */}

    <Link to="/courses"><Button color="primary">All Courses</Button></Link>
    <Link to="/info"><Button color="info">Info</Button></Link>
    <Routes>
    <Route path = "/courses" element={<AllCourses />} exact />
    <Route path = "/info" element = {<h1>Info Page</h1>} exact />
    </Routes>
    {/* <h1>Welcome to my React App</h1> */}
    
    
    
    </>
    </BrowserRouter>
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
