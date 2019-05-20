import React from 'react';
import { Canvas, useThree } from 'react-three-fiber'
import uuid from "uuid/v4"
import * as THREE from 'three'

function randomColor() {
  const colors = {
    0: 'green',
    1: 'red',
    2: 'yellow',
    3: 'blue',
    4: 'purple'
  };
  const randomNumber = Math.floor(Math.random() * (+5 - +0)) + +0;
  return colors[ randomNumber ];
}

function initialKotiki() {
  const kotiki = [];
  const all = 100;

  for(let i = 1; i <= all; i++) {
    const kotik = {
      geometry: {
        width: 5,
        height: 5,
        depth: 5,
      },
      material: {
        color: randomColor()
      },
      counter: i,
      id: uuid(),
    }

    kotiki.push(kotik)
  }

  return kotiki;
}

class App extends React.Component {
  state = {
    kotiki: initialKotiki()
  }


  componentDidMount() {


  }


  render() {
    return (
      <group>
        {this.state.kotiki.map(kotik => {
          const {width, height, depth} = kotik.geometry

          return (
            <mesh key={kotik.id} visible>
              <boxGeometry attach="geometry" args={[width, height, depth]} />
              <meshLambertMaterial attach={'material'} color={kotik.material.color} side={THREE.DoubleSide}/>
            </mesh>
          )
        })}
      </group>
    );
  }
}

function AppHook() {

  const {camera} = useThree()
  camera.position.z = 40

  return <App />
}

function AppWrappedWithCanvas () {

  return (
    <Canvas>
      <AppHook/>
    </Canvas>
  )
}

export default AppWrappedWithCanvas;


// <script>
//   /***
//     INITIAL CONFIGURATIONS
//   ***/
//   // console.log('Поставить стар варс');
//   var scene = new THREE.Scene();
//   var camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth/window.innerHeight,
//   0.1,
//   5000,
//   );
//   const columnNumber = 10;
//   var light = new THREE.PointLight('#fff');
//   var renderer = new THREE.WebGLRenderer();
//
//   const interaction = new Interaction(renderer, scene, camera);
//   light.position.set(10, 0, 25);
//   scene.add(light);
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   document.body.appendChild( renderer.domElement );
//
//   controls = new THREE.OrbitControls (camera, renderer.domElement);
//
//
//
//
//   /***
//     VARIABLES
//   ***/
//   const all = 100
//   let row = 0
//   let x = 0
//   let cacheColor
//   let meshes = []
//   const rowHeight = 7
//   let selectedFriendsObj = {}
//   let selectedFriendsArr = []
//   let scores = 0;
//
//
//
//   /***
//     CLASS FOR EACH CUBE
//   ***/
//   class Kotik extends THREE.Mesh {
//   // class Kotik extends THREE.LineSegments {
//   constructor() {
//   super(...arguments);
// }
//
//   putDown(rows = 1) {
//   // debug warn
//   if(meshes[ this.counter + 9 ]) {
//   console.warn('Something is not ok, the place below is occupied by another mesh');
// } else {
//   this.position.y -= rowHeight * rows
//   delete meshes[this.counter - 1]
//   meshes[this.counter + 9] = this
//   this.setCounter(this.counter + 10)
// }
//
// }
//
//   setCounter(counter) {
//   this.counter = counter
// }
// }
//
//
//   function randomColor() {
//   const colors = {
//   0: 'green',
//   1: 'red',
//   2: 'yellow',
//   3: 'blue',
//   4: 'purple'
// };
//
//   const randomNumber = Math.floor(Math.random() * (+5 - +0)) + +0;
//   return colors[ randomNumber ];
// }
//
//   /***
//     CREATE ALL CUBES
//   ***/
//   for(let i = 1; i <= all; i++) {
//   // const geometry = new THREE.EdgesGeometry( new THREE.BoxGeometry( 5, 5, 5 ) )
//   const geometry = new THREE.BoxGeometry( 5, 5, 5 )
//   // const color = Date.now() % 2 === 0 ? 'red' : 'green'
//   const color = randomColor()
//   const material = new THREE.MeshLambertMaterial( {
//   // const material = new THREE.LineBasicMaterial( {
//   color,
//   // linewidth: 2,
//   side: THREE.DoubleSide
//   });
//
//   const mesh = new Kotik( geometry, material );
//   mesh.counter = i;
//   mesh.color = color
//         mesh.position.x = x * 7
//   mesh.position.y = row * -rowHeight
//
//         mesh.column = x
//         mesh.row = row
//
//         function increaseScores(addingScores) {
//   scores += 5 * addingScores * addingScores
//   }
//
//   function repositionFriends() {
//   for(let i = meshes.length - 1; i >= 0; i--) {
//   const mesh = meshes[i]
//
//   if(!mesh) {
//   continue;
// }
//
//   tryToMoveDown(mesh)
// }
//
//   function tryToMoveDown(mesh) {
//     while( isUnderPlaceFree() ) {
//     mesh.putDown()
//   }
//
//     function isUnderPlaceFree() {
//     const targetPlace = mesh.counter + 9
//     return targetPlace < 100 && !meshes[ targetPlace ]
//   }
//   }
//   }
//
//   function destroyFriends() {
//     selectedFriendsArr.forEach(friend => {
//       scene.remove(friend);
//       delete meshes[friend.counter - 1];
//     })
//
//     increaseScores(selectedFriendsArr.length);
//     console.log(`Scores after increasing: ${scores}`)
//     document.getElementById('scores').innerHTML = scores;
//
//     repositionFriends();
//   }
//
//
//
//
//
//   /***
//     MAIN CLICK HANDLER ON EVERY CUBE
//   ***/
//   mesh.on('click', meshClickHandler)
//   meshes.push(mesh)
//   function meshClickHandler(clickEvent) {
//
//     const position = clickEvent.target.counter
//     // if it is second click and can destroy
//     if( selectedFriendsObj[position] ) {
//     destroyFriends();
//     selectedFriendsArr = [];
//     selectedFriendsObj = {};
//     return;
//
//   } else {
//     selectedFriendsArr.forEach(friend => friend.material.color = {...friend.material.color, ...cacheColor})
//     cacheColor = null
//   }
//
//     selectedFriendsArr = [];
//     selectedFriendsObj = {};
//
//     // main function
//     const tryFindFriends = (function () {
//     const resFunc = function(counter) {
//     const cases = [counter - 1, counter+1, counter + 10, counter - 10]
//
//     function doNeedGo(i) {
//     return i < cases.length
//   }
//
//     for (let i = 0; doNeedGo(i); i++) {
//
//     /* code block below skips row portals */
//     const currentCase = cases[i]
//     if(i < 2) {
//     if(
//     (i === 0 && cases[i] % 10 === 0) ||
//     (i === 1 && (cases[i] - 1) % 10 === 0)
//     ) {
//     continue;
//   }
//   }
//
//
//     /**************/
//
//
//
//     try {
//     // try get
//     const friend = meshes[cases[i] - 1]
//
//     // skip if different colors
//     if(friend.color !== color) {
//     continue;
//   }
//
//     // console.log(friend.counter)
//
//     if(friend && !selectedFriendsObj[friend.counter]) {
//     selectedFriendsObj[friend.counter] = friend;
//     selectedFriendsArr.push(friend);
//   }
//   } catch (e) {
//     console.warn('Error is OK, ', e.message)
//   }
//   }
//   }
//
//     resFunc.currentGenerator = function () { return  count}
//     return resFunc
//   }())
//
//     tryFindFriends(position)
//
//     if(selectedFriendsArr.length === 0) {
//     return;
//   }
//
//     for(let i = 0; i < selectedFriendsArr.length; i++) {
//     tryFindFriends(selectedFriendsArr[i].counter)
//   }
//
//     // color all selected
//     cacheColor = {...selectedFriendsArr[0].material.color}
//     selectedFriendsArr.forEach(friend => {
//     friend.material.color.b = 0.5
//   })
//
//     console.log(`Scores: ${scores}`)
//   }
//
//   x++;
//
//   if(i % 10 === 0) {
//     row++;
//     x = 0;
//   }
//   }
//
//   meshes.forEach(mesh => scene.add(mesh))
//
//   camera.position.z = 100;
//   camera.position.x = 40;
//
//   const animate = function () {
//     requestAnimationFrame( animate );
//
//     // line.rotation.y += 0.01;
//     // line.rotation.x += 0.01;
//     renderer.render( scene, camera );
//   };
//
//   animate();
// </script>