# 开始使用

如果你第一次使用此框架，请先安装本组件库。 接着在你的代码中引入对应的组件

```
import { Button, Tabs, Switch, Dialog } from "wuming-ui"
```

引用后即可在项目中使用该组件库。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮组件</Button>
  </div>
</template>
<script>
import { Button } from 'wuming-ui';

export default {
  components: { Button };
}
</script>
```

下一节内容：[Button组件](#/doc/button)
