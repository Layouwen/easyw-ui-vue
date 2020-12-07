<template>
  <article class="markdown-body" v-html="markdown"></article>
</template>

<script lang='ts'>
import markdown from '../markdown/get-started.md';

export default {
  name: 'GetStarted',
  data() {
    return {markdown};
  },
};
</script>

<style lang="scss" scoped>

</style>
