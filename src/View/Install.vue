<template>
  <article class="markdown-body" v-html="markdown"></article>
</template>

<script lang='ts'>
import markdown from '../markdown/install.md';

export default {
  name: 'Install',
  data() {
    return {markdown};
  },
};
</script>

<style lang="scss" scoped>

</style>
