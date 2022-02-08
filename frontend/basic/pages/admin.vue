<template>
  <div>
    <h2>From User</h2>
    <form>
      <input type="text" />
      <input type="submit" value="insert" />
    </form>
    <nuxt-child></nuxt-child>
  
  </div>
</template>

<script>
export default {
  layout: "coreLayout"
}
</script>
