<template>
  <div id="app">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand" />
    <search-comic></search-comic>
    <router-view />
  </div>
</template>
<script>
import SearchComic from "@/components/SearchComic.vue";
export default {
  name: "App",
  components: {
    SearchComic
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  font-family: Quicksand;
  font-size: 23px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}
h3 {
  font-family: Quicksand;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}
p {
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
blockquote {
  font-family: Quicksand;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
pre {
  font-family: Quicksand;
  font-size: 11px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
</style>
