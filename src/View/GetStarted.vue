<template>
  <article class="markdown-body">
    <h1>开始使用</h1>
    <p>如果你第一次使用此框架，请先安装本组件库。</p>
    <p>接着在你的代码中引入对应的组件</p>
    <pre><code>import {Button, Tabs, Switch, Dialog} from "wuming-ui"</code></pre>
    <p>引用后即可在项目中使用该组件库。</p>

    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Button&gt;按钮组件&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button} from "wuming-ui";
  export default {
    components: {Button}
  }
&lt;/script&gt;</code></pre>
  </article>
</template>

<script lang='ts'>
export default {
  name: 'GetStarted',
};
</script>

<style lang="scss" scoped>

</style>
