import * as THREE from 'three'

let calledAlready = false
function main(html) {
  //
  //
  // var scene = new THREE.Scene();
  // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //
  // var renderer = new THREE.WebGLRenderer();
  // renderer.setSize( 400, 400 );
  // html.appendChild( renderer.domElement );
  //
  // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // var cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );
  //
  // camera.position.x = 5;

			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, 2, 0.01, 1000 );

			var renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize( 400, 400 );
			html.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
//      debugger
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
}

      //  animate()
}

export const init = ({ current }) => {
  if(calledAlready) return
  const html = document.getElementById('canvasRoot')
 // || document.body
  if(!html) return

  calledAlready = true
  main(html)
}
