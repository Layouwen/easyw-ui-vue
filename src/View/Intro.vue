<template>
  <article class="markdown-body" v-html="markdown"></article>
</template>

<script lang='ts'>
import markdown from '../markdown/intro.md';

export default {
  name: 'Intro',
  data() {
    return {markdown};
  },
};
</script>

<style lang="scss" scoped>

</style>
