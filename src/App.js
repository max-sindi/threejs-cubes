import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { init as three} from './three'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>

            {/*// ]\*/}
            {(function () {

              return <Box></Box>

              function Box (){
                let [state, setTop] = useState({ top: 10, timer: null});
                const canvasRoot = React.createRef();

                // const [counter,  setCountcer]
                useEffect(() => {
                  const timer = setInterval(() => {

                    setTop(state => {
                      const documentHeight = getComputedStyle(document.body).height.split('.')[0]
                      // Number( getComputedStyle(document.body).height)//.//replace(/\D/g, '') )
                      console.log(documentHeight);
                      if(state.top > documentHeight- 400 ){
                        // debugge//r
                        clearInterval(state.timer)
                        return state
                      }
                      window.scrollTo(0, state.top);
                      return {...state, top: state.top + 7, timer}
                    })
                  }, 4)
                  // setInterval(() => setTop(300), 3000)
                }, [])

                return (
                  <div
                    ref={canvasRoot}
                    id="canvasRoot"
                    style={{
                      width: 300,
                      height: 400,
                      // backgroundColor: 'red',
                      position: 'absolute',
                      top: state.top,
                      transform: 'translate(50%, 200px)', //no work
                    }}
                  >
                      <script>{three(canvasRoot)}</script>
                  </div>
                )
              }


            }())}
      </div>
    );
  }
}

export default App;
