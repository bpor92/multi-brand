
<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + Vite" />
    Brand1
    <router-link to="/test">Test</router-link>
    <a href="/panel/">panel</a>

  </div>
</template>

<script>
import {HelloWorld} from '@ui'

export default {
  components: {
    HelloWorld
  }
};
</script>

