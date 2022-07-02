<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


* { 
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

body { 
  margin: 0;
  padding: 0;
}

/* Chrome Autofill style */
input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
  font-family: 'Poppins', sans-serif;
  -webkit-text-fill-color: black;
}

textarea, input { 
  outline: none;
}

input, select{
    height: 40px;
    border: 1px solid #E8E8E8;
    font-size: 16px;
    line-height: 24px;
    padding-left: 12px;
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
  line-height: 24px;
  letter-spacing: -0.3px;
}

h3 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.0231818px;
}

h4 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.0231818px;
}

h5 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.0231818px;
}

label {
  color: black;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.px;
}

input, select {
  border: 1px solid rgba(255, 255, 255, 0.164);
  font-weight: 400;
  font-size: 15px;
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 0px;
  background-color: white;
  border-bottom: 1px solid #a5a8ab5e;
  color: black;
}


a {
    font-family: 'Poppins';
    font-size: 11px;

    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.3px;
    text-decoration: none;
}
::-webkit-scrollbar {
  width: 0px;
}

</style>