<template>
  <div class="game">
    <div class="nav">
      <div>
        <router-link to="/" class="link-item">
            Play Battleship
        </router-link>
      </div>
      <div>
        <router-link to="/about" class="link-item">About</router-link>
      </div>
      <div>
        <router-link to="/settings" class="link-item" >Settings</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

.game {
  min-height: 100vh;
  color: #23272F;
  display: flex;
}
.nav {
  padding-top: 2rem ;
  width: 200px;
}

.nav a {
  font-weight: bold;
  color: #23272F;
  text-decoration: none;
}

.link-item {
  padding: .5rem;
  display: block;
  border-radius: .5rem;
}

.link-item.router-link-active {
  background: rgba(8,126,164, .15);
  color: #087EA4;
}
</style>
