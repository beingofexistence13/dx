  
/* @keyframes plan-text-animation {
  0% {
  -webkit-text-fill-color: transparent;
  }
33.3%{
  -webkit-text-fill-color: transparent;

}
66.6%{
  -webkit-text-fill-color: unset;

}
99.9%{
  -webkit-text-fill-color: unset;

}
} */
/* @keyframes develop-text-animation {
  0% {
  -webkit-text-fill-color: unset;
  }
33.3%{
  -webkit-text-fill-color: transparent;

}
66.6%{
  -webkit-text-fill-color: transparent;

}
99.9%{
  -webkit-text-fill-color: unset;

}
} */
/* @keyframes online-text-animation {
  0% {
  -webkit-text-fill-color: unset;
  }
33.3%{
  -webkit-text-fill-color: unset;

}
66.6%{
  -webkit-text-fill-color: transparent;

}
99.9%{
  -webkit-text-fill-color: transparent;

}
} */

/* @keyframes planTextAnimation {
  0% { -webkit-text-fill-color: transparent; }
  33.33% { -webkit-text-fill-color: unset; }
  66.67% { -webkit-text-fill-color: transparent; }
  100% { -webkit-text-fill-color: transparent; }
}

@keyframes developTextAnimation {
  0% { -webkit-text-fill-color: unset; }
  33.33% { -webkit-text-fill-color: transparent; }
  66.67% { -webkit-text-fill-color: unset; }
  100% { -webkit-text-fill-color: transparent; }
}

@keyframes onlineTextAnimation {
  from {-webkit-text-fill-color: unset;}
  to {-webkit-text-fill-color: transparent;}
}

.plan_text {
  animation: planTextAnimation 15s infinite;
}

.develop_text {
  animation: developTextAnimation 15s infinite;
}

.online_text {

  animation: onlineTextAnimation 15s infinite;

} */
  
  /* animation-name: onlineTextAnimation;
  animation-duration: 5s;
  animation-delay: 10s;
  animation-iteration-count: infinite; */
.plan_text {
  -webkit-text-fill-color: transparent;
  animation: textAnimation 5s infinite;
}

.develop_text {
  -webkit-text-fill-color: unset;
  animation: textAnimation 5s infinite;
  animation-delay: 5s;
}

.online_text {
  -webkit-text-fill-color: unset;
  animation: textAnimation 5s infinite;
  animation-delay: 10s;
}

@keyframes textAnimation {
  0%, 100% { -webkit-text-fill-color: transparent; }
  50% { -webkit-text-fill-color: unset; }
}


.titleHeader{
  font-family: 'Old Standard TT', serif;
  font-size: 3rem;
  
}
.developText{
  background: hsla(217, 100%, 50%, 1);

  background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
  
  background: -moz-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
  
  background: -webkit-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.previewText{
  background: hsla(175, 79%, 63%, 1);

  background: linear-gradient(90deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
  
  background: -moz-linear-gradient(90deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
  
  background: -webkit-linear-gradient(90deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#57EBDE", endColorstr="#AEFB2A", GradientType=1 );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.OnlineText{
  background: hsla(335, 91%, 70%, 1);

  background: linear-gradient(90deg, hsla(335, 91%, 70%, 1) 0%, hsla(49, 89%, 61%, 1) 100%);
  
  background: -moz-linear-gradient(90deg, hsla(335, 91%, 70%, 1) 0%, hsla(49, 89%, 61%, 1) 100%);
  
  background: -webkit-linear-gradient(90deg, hsla(335, 91%, 70%, 1) 0%, hsla(49, 89%, 61%, 1) 100%);
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F86CA7", endColorstr="#F4D444", GradientType=1 );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* html{
  min-height: 100vh;
  width: 100%;
} */

@layer base {
  :root {
    --body-background: rgb(255, 255, 255);
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --ring: 240 5% 64.9%;

    --radius: 0.5rem;

    /* --chatgpt: rgb(0, 0, 0) (255, 0, 0); */
    --code: rgb(0, 0, 0) (255, 0, 0);
    --code-foreground: #f4f4f5;
    --code--highlighted: rgb(240, 240, 240);
    --copy-button-background: rgb(255, 255, 255);

    --scrollbar-track: rgb(248, 248, 248);
    --scrollbar-track-border: rgb(242, 242, 242);
    --scrollbar-track-hover: rgb(240, 240, 240);
    --scrollbar-track-active: rgb(244, 244, 244);
    --scrollbar-thumb: rgb(225, 225, 225);
    --scrollbar-thumb-hover: rgb(220, 220, 220);
    --scrollbar-thumb-active: rgb(229, 229, 229);

    --rainbow-background: rgba(0, 0, 0, 0.16);
  }

  .dark {
    --body-background: rgb(0, 0, 0);

    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;

    --ring: 240 3.7% 15.9%;

    --code: rgb(255, 255, 255);
    --code-foreground: #18181b;
    --code-highlighted: rgb(17, 17, 17);
    --copy-button-background: rgb(17, 17, 17);

    --scrollbar-track: #09090b;
    --scrollbar-track-border: #1b1b1f;
    --scrollbar-track-hover: #0b0b0c;
    --scrollbar-track-active: #050507;
    --scrollbar-thumb: rgb(62, 62, 62);
    --scrollbar-thumb-hover: rgb(68, 68, 68);
    --scrollbar-thumb-active: rgb(66, 66, 66);

    --rainbow-background: rgb(255, 0, 0);
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings:
      "rlig" 1,
      "calt" 1;
  }
}

@layer utilities {
  .step {
    counter-increment: step;
  }

  .step:before {
    @apply inline-flex absolute justify-center items-center w-9 h-9 font-mono text-base font-medium text-center rounded-full border-4 bg-muted -indent-px border-background;
    @apply ml-[-50px] mt-[-4px];
    content: counter(step);
  }
}

@media (max-width: 640px) {
  .container {
    @apply px-4;
  }
}

span.line span {
  color: var(--code) !important;
}

pre {
  background-color: var(--code-foreground) !important;
}

span.line--highlighted {
  background-color: var(--code-foreground) !important;
}
div[data-rehype-pretty-code-fragment] button:hover {
  background-color: var(--copy-button-background) !important;
}

html.dark div[data-rehype-pretty-code-fragment] button svg {
  color: rgb(255, 255, 255) !important;
}

html.light div[data-rehype-pretty-code-fragment] button svg {
  color: rgb(0, 0, 0) !important;
}

.hello-tool{
  background-color: var(--code-foreground) !important;
}

.hello-tool button {
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: 0 !important;
}

.hello-tool .collab {
  margin-left: 8px !important;
  margin-right: 8px !important;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) !important;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 7px;
  width: 7px;
  height: 7px;
  height: 7px;
}

*::-webkit-scrollbar-corner {
  background-color: var(--scrollbar-track) !important;
  border: 1px solid var(--scrollbar-track) !important;
}

*::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track) !important;
}

*::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track-hover) !important;
  border-left: 1.5px solid var(--scrollbar-track-border) !important;
  border-right: 1px solid var(--scrollbar-track-border) !important;
}

*::-webkit-scrollbar-track:active {
  background-color: var(--scrollbar-track-active) !important;
  border-left: 1.5px solid var(--scrollbar-track-border) !important;
  border-right: 1px solid var(--scrollbar-track-border) !important;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb) !important;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb-hover) !important;
  border-radius: 14px;
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-thumb-active) !important;
  border-radius: 14px;
}

.navbar {
  /* animation: ranbow-glow 10s linear infinite; */
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  /* border-bottom: 2px solid yellow; */
  min-width: 100%;
  max-height: 55px !important;
  border-bottom: 1px solid var(--code-foreground) !important;
}
.nav-toggles {
  height: 35px !important;
}
.rainbow-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-toggles,
.navbar .docs,
.navbar .social-media,
.navbar ul:hover,
.navbar ul li,
.navbar ul,
.navbar ul a {
  background: transparent !important;
}
.nav-toggles:hover,
.navbar .social-media:hover,
.navbar .docs:hover,
.navbar ul li:hover {
  animation: ranbow-glow 10s linear infinite;
  box-shadow:
    var(--rainbow-background) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
}

.navbar a.docs {
  height: 50px;
  width: 50px;
}

@keyframes ranbow-glow {
  0%,
  100% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(360deg);
  }
}
.navbar-logo-icon {
  animation: ranbow-glow 10s linear infinite;
}
.devMode {
  animation: ranbow-glow 10s linear infinite;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 red;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  padding: 0 !important;
  margin: 0 !important;
  height: 50px !important;
  width: 50px !important;
  border-radius: 50% !important;
}
.devMode-container {
  row-gap: 0 !important;
  column-gap: 0 !important;
  padding: 0 !important;
  width: 350px !important;

  /* z-index: 100000000000; */
}

/* .devMode-content * {
  margin-top: 0 !important;
} */

.horizantalDivider {
  margin-top: 10px !important;

  width: 100%;
  height: 2px;
  background: var(--code-foreground);
}

.social_media_container {
  /* padding: 0 !important; */
  padding-top: 50px !important;
}

.scrollbar_thumnb {
  min-height: 100px !important;
  height: 100px !important;
}
.mobile-scroll .scrollbar_thumnb {
  display: none;
  min-height: 100px !important;
  height: 100px !important;
}
.scrollbar_thumnb::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  min-width: 44px;
  min-height: 100px;
}

/* .hello-tool,
.devMode,
.devMode-container,
.devMode-content {
} */
/* .hack {
    width: 380px !important;
  } */
/* .hack svg {
    display: none !important;
  } */
/* .backdrop-blur-sm {
    display: none !important;
  } */
.sheetLeft {
  width: 100% !important;
}
/* Web Fluid Simulatoin */

canvas {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  min-width: 100% !important;
  min-height: 100vh !important;
  /* z-index: 10000000000000000 !important; */
}

.glassmorphisum {
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

/* svg {
  
    max-width: 35px !important;
    max-height: 35px !important;
  } */
.hack-container svg {
  color: var(--code) !important;
  max-width: 16px !important;
  max-height: 16px !important;
}

.chatgpt svg {
  fill: var(--code) !important;
  color: var(--code) !important;
  max-width: 16px !important;
  max-height: 16px !important;
}

/* .hack-container *,.hackIn-connect-container,.hackIn-connect-container *{
    animation: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
    color: transparent !important;
  } */
.hack-container span img {
  /* display: none; */
  animation: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
  color: transparent !important;
}
* {
  user-select: none !important;
}
.hackTabTriggers[data-state="active"] {
  animation: ranbow-glow 10s linear infinite;
  box-shadow:
    var(--rainbow-background) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid var(--code--highlighted);
}
.hoverGlassmorphisum:hover {
  animation: ranbow-glow 10s linear infinite;
  box-shadow:
    var(--rainbow-background) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid var(--code--highlighted);
}
/* .hackTabList{

  height: 50px !important;

} */
/* .hackTabTriggers :focus {
  position: relative;
  box-shadow: 0 0 0 2px black;
} */

.react-tel-input {
  margin-top: 10px !important;
  background-color: transparent;
  width: 100%;
}
.react-tel-input input {
  width: 100% !important;
  background: rgba(255, 255, 255, 0) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  color: hsl(var(--muted-foreground)) !important;
}
.flag-dropdown,
.flag-dropdown.opne,
.flag-dropdown .selected-flag {
  background: var(--code-foreground) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}
.react-tel-input .country-list,
.react-tel-input .country-list:hover {
  background-color: var(--code-foreground) !important;
}
/* .react-tel-input .form-control::placeholder{
  color: hsl(var(--muted)) !important;
} */
/* input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: red !important;
} */
/* .hackTabs > * {

} */

html,
body {
  min-height: 100vh !important;
  min-width: 100% !important;
}
/* .hack {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 0 !important;
}
 */

* {
  user-select: none;
}

html,
body {
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #000;
}

body {
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100%;
}

canvas {
  width: 100%;
  height: 100%;
}

.dg {
  opacity: 0.9;
}

.dg .property-name {
  overflow: visible;
}

.bigFont {
  font-size: 150%;
  color: #8c8c8c;
}

.cr.function.appBigFont {
  font-size: 150%;
  line-height: 27px;
  color: #a5f8d3;
  background-color: #023c40;
}

.cr.function.appBigFont .property-name {
  float: none;
}

.cr.function.appBigFont .icon {
  position: sticky;
  bottom: 27px;
}

.icon {
  font-family: "iconfont";
  font-size: 130%;
  float: right;
}

.twitter:before {
  content: "a";
}

.github:before {
  content: "b";
}

.app:before {
  content: "c";
}

.discord:before {
  content: "d";
}

.promo {
  display: none;
  /* display: table; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: auto;
  color: lightblue;
  background-color: rgba(0, 0, 0, 0.4);
  animation: promo-appear-animation 0.35s ease-out;
}

.promo-middle {
  display: table-cell;
  vertical-align: middle;
}

.promo-content {
  width: 80vw;
  height: 80vh;
  max-width: 80vh;
  max-height: 80vw;
  margin: auto;
  padding: 0;
  font-size: 2.8vmax;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  text-align: center;
  /* background-image: url("promo_back.png"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.promo-header {
  height: 10%;
  padding: 2px 16px;
}

.promo-close {
  width: 10%;
  height: 100%;
  text-align: left;
  float: left;
  font-size: 1.3em;
  /* transition: 0.2s; */
}

.promo-close:hover {
  /* transform: scale(1.25); */
  cursor: pointer;
}

.promo-body {
  padding: 8px 16px 16px 16px;
  margin: auto;
}

.promo-body p {
  margin-top: 0;
  mix-blend-mode: color-dodge;
}

.link {
  width: 100%;
  display: inline-block;
}

.link img {
  width: 100%;
}

@keyframes promo-appear-animation {
  0% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* .hack > button {
  border: 1px solid  hsl(var(--muted));
  position: absolute;
  transform: translate(-50%,-50%);
  top: 28.8%;
  right: 34.5%;
  height: 37.5px;
  width: 37.5px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--code);
} */

#scroll-container {
  /* border: 3px solid black; */
  border-radius: 5px;
  overflow: hidden;
}

#scroll-text {
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  -moz-animation: my-animation 15s linear infinite;
  -webkit-animation: my-animation 15s linear infinite;
  animation: my-animation 15s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
  }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

/* * {
  color: var(--code) !important;
} */
svg,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  color: var(--code) !important;
}
input {
  border: none !important;
  outline: none !important;
}

.separator,.textMuted {
  /* background-color: hsl(var(--muted)); */
  color: hsl(var(--muted-foreground)) !important;
}

@keyframes hue_rotate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.wallet_status:hover {
  background-color: red;
  animation: ranbow-glow 50s linear infinite;
  box-shadow:
    var(--rainbow-background) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.wallet_status:hover::before,
.wallet_status:hover::after {
  animation: hue_rotate 50s linear infinite;
  content: "";
  position: absolute;
  top: -2.5px;
  left: -2.5px;
  background: linear-gradient(
    45deg,
    #ff0000,
    #fffc00,
    #aaff00,
    #00ff2e,
    #00fcff,
    #0054ff,
    #8700ff,
    #ff00c4,
    #ff0026
  );
  background-size: 400%;
  border-radius: 15px;

  width: calc(100% + 5px);
  height: calc(100% + 5px);
  z-index: -1;
}
.node_status:hover {
  background-color: red;
  animation: ranbow-glow 50s linear infinite;
  box-shadow:
    var(--rainbow-background) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.node_status:hover::before,
.node_status:hover::after {
  animation: hue_rotate 50s linear infinite;
  content: "";
  position: absolute;
  top: -2.5px;
  left: -2.5px;
  background: linear-gradient(
    45deg,
    #ff0000,
    #fffc00,
    #aaff00,
    #00ff2e,
    #00fcff,
    #0054ff,
    #8700ff,
    #ff00c4,
    #ff0026
  );
  background-size: 400%;
  border-radius: 15px;

  width: calc(100% + 5px);
  height: calc(100% + 5px);
  z-index: -1;
}

.jello-vertical:hover {
  background-color: var(--code-foreground);
  -webkit-animation: jello-vertical 1s linear both;
  animation: jello-vertical 1s linear both;
}
/* ----------------------------------------------
 * Generated by Animista on 2023-9-30 17:24:36
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation jello-vertical
 * ----------------------------------------
 */
@-webkit-keyframes jello-vertical {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    -webkit-transform: scale3d(0.85, 1.15, 1);
    transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-vertical {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    -webkit-transform: scale3d(0.85, 1.15, 1);
    transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

input,
input:hover,
input:focus {
  outline: none !important;
  outline-offset: 0px !important;
  border: none !important;
  box-shadow: none !important;
}

.NDPCGDCL:hover,
.NDPCGDBL:hover {
  background: var(--code-foreground);
}

.heartbeat:hover {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-10-4 18:42:40
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.pulsate-fwd:hover {
  -webkit-animation: pulsate-fwd 0.5s ease-in-out infinite both;
  animation: pulsate-fwd 0.5s ease-in-out infinite both;
}
/* ----------------------------------------------
 * Generated by Animista on 2023-10-4 18:48:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation pulsate-fwd
 * ----------------------------------------
 */
@-webkit-keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.collab {
  margin: 0 !important;
}
/* .status-action{
  position:relative;
  background: linear-gradient(0deg,black,rgb(39, 39, 39));

}
.status-action::before,
.status-action::after {
  content: "";
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg,red,yellow,green,pink,blue,purple,rgb(219, 75, 255));

  background-size: 400%;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  z-index: -1;
} */


/* Langing Page
.navbar{
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.6px);
  -webkit-backdrop-filter: blur(14.6px);

  height: 60px;
  width: 100%;
  
  position: fixed;
  top: 0;
  left: 0;
} */







.card {
  font-size: 164px;
  width: 300px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
}

.card-container {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: -120px;
}

.splash {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  clip-path: path(
    "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
  );
}
.popupOne .popupLeft{
  background: hsla(152, 100%, 50%, 1);

background: linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00FF87", endColorstr="#60EFFF", GradientType=1 );

}
.popupTwo .popupLeft{
  background: hsla(333, 100%, 53%, 1);

  background: linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);
  
  background: -moz-linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);
  
  background: -webkit-linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF0F7B", endColorstr="#F89B29", GradientType=1 );
}
.popupThree .popupLeft{
  background: hsla(307, 93%, 84%, 1);

  background: linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%);
  
  background: -moz-linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%);
  
  background: -webkit-linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%);
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FCB0F3", endColorstr="#3D05DD", GradientType=1 );
}