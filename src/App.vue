<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
}

body { 
  margin: 0 !important; 
  padding: 0 !important;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

/* Chrome Autofill style */
input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
}

/* Background Settings Global */
.container {
    padding: 0;
    margin: 0;
    width: 100vw;
    background-color: white;
}

div {
}

</style>