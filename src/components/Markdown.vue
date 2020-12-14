<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang='ts'>

export default {
  name: 'Markdown',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
