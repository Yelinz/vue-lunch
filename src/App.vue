<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/date">Date</router-link>
      </nav>
    </header>
    <transition
      name="roll"
      mode="out-in"
      enter-active-class="animated rollIn"
      leave-active-class="animated rollOut"
    >
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style>
body {
  background-color: #41b883;
  overflow: hidden;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 2em;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  margin: 10px;
}

.router-link-active {
  color: #ffffff;
}

.view {
  margin-top: 30vh;
}

#app {
  text-align: center;
}
</style>
