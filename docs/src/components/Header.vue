<template lang="pug">
import { globalVar } from '../globalVar';
  div#header
    div.container
      div.header__logo(
        v-scroll-to="{el: 'body', duration: 0}"
      )
        a.header__logo--link
          img.header__logo--img(
            :src="baseURI"
          )
          span.header__logo--text vue-kakao-pf
</template>

<script>
export default {
  data () {
    return {
      baseURI: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTZweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTYgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5rYWthbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJrYWthbyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9ImJhc2UiIGZpbGw9IiNGRkNEMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iMjgiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iLWctaWMtLy1pYy1rYWthbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCAxMi4wMDAwMDApIiBmaWxsPSIjNDAzNjMxIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMi42NjY2NjY2NywxNC4xNzQ1MTAxIEMyLjY2NjY2NjY3LDE3LjY5OTU0NzggNS4xNjY2NjY2NywyMS4wODkyNjQ4IDguOTE2LDIyLjk4NjQzNDQgQzguNjM4NjY2NjcsMjMuNjY0Mzc3OCA3LjUyNjY2NjY3LDI3LjQ2MDA1NjkgNy41MjY2NjY2NywyNy43MzIwMzgyIEM3LjUyNjYwODU1LDI3LjgwNTAwMjggNy41NTYxNjMxOCwyNy44NzQ4MzYgNy42MDg1MDQyNiwyNy45MjU0MDg0IEM3LjY2MDg0NTM0LDI3Ljk3NTk4MDggOC4wODEzMzMzMywyOCA4LjA4MTMzMzMzLDI4IEM4LjM1ODY2NjY3LDI4IDEyLjk0MjY2NjcsMjQuODgyMjY0MyAxMy42MzczMzMzLDI0LjQ3NDk2MjMgQzE0LjQwMzc0ODcsMjQuNjk3NTgxNiAxNS4yMDIxNDU5LDI0Ljc4ODE4MjkgMTUuOTk4NjY2NywyNC43NDI5MjQxIEMyMy40OTg2NjY3LDI0Ljc0MjkyNDEgMjkuMzMyLDIwLjEzMzk4MDkgMjkuMzMyLDE0LjU3NTExMyBDMjkuMzMyLDguNjEwMjgzMDMgMjMuNDk4NjY2Nyw0IDE1Ljk5ODY2NjcsNCBDOC41LDQuMDA2Njk5MDUgMi42NjY2NjY2Nyw4LjYxNTY0MjI3IDIuNjY2NjY2NjcsMTQuMTc0NTEwMSBaIiBpZD0iaWMta2FrYW8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
    }
  }
}
</script>

<style lang="scss">

#header {
  top: 0;
  z-index: 1;
  width: 100%;
  position: fixed;
  height: $grid14x;
  align-items: center;
  background-color: #fff;
  @include box-shadow($grid2x, $grid3x);

  .header__logo {
    cursor: pointer;
    height: $grid14x;
    display: inline-block;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;

    .header__logo--img {
      width: $grid10x;
      height: $grid10x;
      padding: $grid2x 0;
    }

    .header__logo--text {
      color: $text333;
      font-weight: 500;
      padding-left: $grid4x;
      display: inline-block;
      transform: translateY(-68%);
      @include font-size($grid5x);
    }
  }
}
</style>
