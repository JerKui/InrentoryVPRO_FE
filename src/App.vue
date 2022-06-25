<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 300;
    src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
    src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
      url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
      url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}


* { 
  margin: 0 !important;
  font-family: 'Poppins', sans-serif;
}

body { 
  margin: 0 !important; 
  padding: 0 !important;
  overflow: hidden;
}

/* Chrome Autofill style */
input:-webkit-autofill {
  color: green;
  transition: background-color 5000s ease-in-out 0s;
}

textarea, input { 
  outline: none;
}

/* Background Settings Global */
.container {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: #19173D;
}

input, select{
    height: 40px;
    border: 1px solid #E8E8E8;
    font-size: 16px;
    line-height: 24px;
    padding-left: 12px;
    color: #585757;
    overflow: hidden;
}

button {
    color: white;
    height: 40px;
    background: #000000;
}

hr {
  border: none;
  height: 2px;
  background-color: #F3F3F4;
}

h2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.3px;

  color: rgba(255, 255, 255, 0.87);
}

label {
  color: #7B78AA;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.px;
}

input {
  background: #19173D;
  border: 1px solid rgba(255, 255, 255, 0.164);
  border-radius: 12px;
  color: #7B78AA;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.px;
}

input::placeholder {
  color: #7b78aa5e;
}

button {
    height: 44px;
    background: linear-gradient(114.15deg, #0DA6C2 20.67%, #0E39C6 89.64%);
    border: 1px solid rgba(255, 255, 255, 0.199);
    border-radius: 12px;
}

button p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: rgba(255, 255, 255, 0.87);
}

a {
    font-family: 'Poppins';
    font-size: 11px;
    color: #7B78AA;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.3px;
    text-decoration: none;
}

.circle {
    position: absolute;
    width: 293px;
    height: 275px;
    left: 52%;
    top: 50%;
    background: rgba(13, 166, 194, 0.3);
    filter: blur(100px);
}

img {
  width: 40px;
  height: 40px;
}

</style>