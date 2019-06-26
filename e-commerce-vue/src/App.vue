<template>
  <div id="app">
    <router-view/>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/find">Find</router-link>
      </li>
      <li>
        <router-link to="/mall">Mall333</router-link>
      </li>
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
