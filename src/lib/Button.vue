<template>
  <button class="abc-button"
          :class="classes"
          :disabled="disabled">
    <span v-if="loading" class="abc-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang='ts'>
import { computed } from 'vue';

export default {
  name: 'Button.vue',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`abc-theme-${theme}`]: theme,
        [`abc-size-${size}`]: size,
        [`abc-level-${level}`]: level,
      };
    });
    return {classes};
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.abc-button {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  white-space: nowrap;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(#000, .95);
  transition: background 250ms;
  background: white;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.abc-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.abc-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.abc-size-big {
    height: 48px;
    padding: 0 16px;
    font-size: 24px;
  }

  &.abc-size-small {
    height: 20px;
    padding: 0 4px;
    font-size: 12px;
  }

  &.abc-theme-button {
    &.abc-level-main {
      color: white;
      border-color: $blue;
      background: $blue;
      &:hover, &:focus {
        border-color: darken($blue, 10%);
        background: darken($blue, 10%);
      }
    }

    &.abc-level-danger {
      color: white;
      border-color: $red;
      background: $red;
      &:hover, &:focus {
        border-color: darken($red, 10%);
        background: darken($red, 10%);
      }
    }
  }

  &.abc-theme-link {
    &.abc-level-danger {
      color: $red;
      &:hover, &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.abc-theme-text {
    &.abc-level-main {
      color: $blue;
      &:hover, &:focus {
        color: darken($blue, 10%);
      }
    }

    &.abc-level-danger {
      color: $red;
      &:hover, &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.abc-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover { border-color: $grey; }
    }
  }
  &.abc-theme-link, &.abc-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .abc-loadingIndicator {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: abc-spin 1s infinite linear;
  }
}

@keyframes abc-spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
</style>
