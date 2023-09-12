/* eslint-disable tailwindcss/classnames-order */
import "@/styles/globals.css"
// import "@/public/three.js/files/main.css"
import { Metadata } from "next"
import Script from "next/script"

import { fontSans } from "@/config/fonts"
import { siteConfig } from "@/config/website"
import { cn } from "@/lib/utils"


export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: {
    default: "Threejs",
    template: `%s - Threejs`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server SiteLayout",
    "Radix UI",
  ],
  authors: [
    {
      name: "beingofexistence",
      url: "https://beingofexistence.com",
    },
  ],
  creator: "beingofexistence",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@beingofexistence",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background min-h-screen overflow-hidden font-sans antialiased",
          fontSans.variable
        )}
      >


        {children}
        <Script src="https://unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js" />
      <Script id="importmap" type="importmap">
        {`
          {
            "imports": {
              "three": "threejs/build/three.module.js",
              "three/addons/": "threejs/examples/jsm/"
            }
          }
        `}
      </Script>
			<Script id="show-banner" type="module">{`

			import * as THREE from 'three';

			import Stats from 'three/addons/libs/stats.module.js';

			let container, stats, clock;

			let camera, scene, renderer;

			let line;

			const segments = 10000;
			const r = 800;
			let t = 0;

			init();
			animate();

			function init() {

				container = document.getElementById( 'container' );

				//

				camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 4000 );
				camera.position.z = 2750;

				scene = new THREE.Scene();

				clock = new THREE.Clock();

				const geometry = new THREE.BufferGeometry();
				const material = new THREE.LineBasicMaterial( { vertexColors: true } );

				const positions = [];
				const colors = [];

				for ( let i = 0; i < segments; i ++ ) {

					const x = Math.random() * r - r / 2;
					const y = Math.random() * r - r / 2;
					const z = Math.random() * r - r / 2;

					// positions

					positions.push( x, y, z );

					// colors

					colors.push( ( x / r ) + 0.5 );
					colors.push( ( y / r ) + 0.5 );
					colors.push( ( z / r ) + 0.5 );

				}

				geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
				geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
				generateMorphTargets( geometry );

				geometry.computeBoundingSphere();

				line = new THREE.Line( geometry, material );
				scene.add( line );

				//

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );

				container.appendChild( renderer.domElement );

				//

				stats = new Stats();
				container.appendChild( stats.dom );

				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
				stats.update();

			}

			function render() {

				const delta = clock.getDelta();
				const time = clock.getElapsedTime();

				line.rotation.x = time * 0.25;
				line.rotation.y = time * 0.5;

				t += delta * 0.5;
				line.morphTargetInfluences[ 0 ] = Math.abs( Math.sin( t ) );

				renderer.render( scene, camera );

			}

			function generateMorphTargets( geometry ) {

				const data = [];

				for ( let i = 0; i < segments; i ++ ) {

					const x = Math.random() * r - r / 2;
					const y = Math.random() * r - r / 2;
					const z = Math.random() * r - r / 2;

					data.push( x, y, z );

				}

				const morphTarget = new THREE.Float32BufferAttribute( data, 3 );
				morphTarget.name = 'target1';

				geometry.morphAttributes.position = [ morphTarget ];

			}

		`}</Script>
      </body>
    </html>
  )
}
