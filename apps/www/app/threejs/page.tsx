"use client"
"use client"

import * as React from "react"
import Image from "next/image"
import Script from "next/script"
import Link from "next/link"

export default function Threejs() {
  return (
    <>
		<div id="panel">

			<div id="header">
				<h1><a href="https://threejs.org">three.js</a></h1>

				<div id="sections">
					<a href="../docs/index.html#manual/introduction/Creating-a-scene">docs</a>
					<span className="selected">examples</span>
				</div>

				<div id="expandButton"></div>
			</div>

			<div id="panelScrim"></div>

			<div id="contentWrapper">

				<div id="inputWrapper">
					<input placeholder="" type="text" id="filterInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
					<div id="clearSearchButton"></div>
				</div>

				<div id="content">
					<img id="previewsToggler" src="./files/thumbnails.svg" width="20" height="20" />
				</div>
			</div>

		</div>

		<iframe id="viewer" name="viewer" allow="fullscreen; xr-spatial-tracking;"></iframe>

		<a id="button" target="_blank"><Image alt="hi" src="../files/ic_code_black_24dp.svg" width={500} height={500} /></a>



		<Script src="three.js/examples/threejs_examlples_scripts.js" />
		<template id="PlaceholderHTML">
l;kk;lk;'lk;lkl;k;l'
		</template>
    </>
  )
}
