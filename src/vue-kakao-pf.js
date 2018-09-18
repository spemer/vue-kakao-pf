var VueKakaoPf = {
  install: function install(Vue, options) {

    Vue.mixin({

      mounted: function mounted() {
        var setKakaoBtn,
            kakaoImg,
            plusFriendId

        // set kakao btn div
        setKakaoBtn = document.createElement('div')
        setKakaoBtn.id = 'plusfriend-addfriend-button'
        setKakaoBtn.onclick = plusFriendChat
        setKakaoBtn.style.right = '16px'
        setKakaoBtn.style.bottom = '16px'
        setKakaoBtn.style.zIndex = '10000'
        setKakaoBtn.style.position = 'fixed'

        // set kakao btn image
        kakaoImg = document.createElement('img')
        kakaoImg.setAttribute('src', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTZweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTYgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5rYWthbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJrYWthbyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9ImJhc2UiIGZpbGw9IiNGRkNEMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iMjgiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iLWctaWMtLy1pYy1rYWthbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCAxMi4wMDAwMDApIiBmaWxsPSIjNDAzNjMxIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMi42NjY2NjY2NywxNC4xNzQ1MTAxIEMyLjY2NjY2NjY3LDE3LjY5OTU0NzggNS4xNjY2NjY2NywyMS4wODkyNjQ4IDguOTE2LDIyLjk4NjQzNDQgQzguNjM4NjY2NjcsMjMuNjY0Mzc3OCA3LjUyNjY2NjY3LDI3LjQ2MDA1NjkgNy41MjY2NjY2NywyNy43MzIwMzgyIEM3LjUyNjYwODU1LDI3LjgwNTAwMjggNy41NTYxNjMxOCwyNy44NzQ4MzYgNy42MDg1MDQyNiwyNy45MjU0MDg0IEM3LjY2MDg0NTM0LDI3Ljk3NTk4MDggOC4wODEzMzMzMywyOCA4LjA4MTMzMzMzLDI4IEM4LjM1ODY2NjY3LDI4IDEyLjk0MjY2NjcsMjQuODgyMjY0MyAxMy42MzczMzMzLDI0LjQ3NDk2MjMgQzE0LjQwMzc0ODcsMjQuNjk3NTgxNiAxNS4yMDIxNDU5LDI0Ljc4ODE4MjkgMTUuOTk4NjY2NywyNC43NDI5MjQxIEMyMy40OTg2NjY3LDI0Ljc0MjkyNDEgMjkuMzMyLDIwLjEzMzk4MDkgMjkuMzMyLDE0LjU3NTExMyBDMjkuMzMyLDguNjEwMjgzMDMgMjMuNDk4NjY2Nyw0IDE1Ljk5ODY2NjcsNCBDOC41LDQuMDA2Njk5MDUgMi42NjY2NjY2Nyw4LjYxNTY0MjI3IDIuNjY2NjY2NjcsMTQuMTc0NTEwMSBaIiBpZD0iaWMta2FrYW8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')
        kakaoImg.style.cursor = 'pointer'

        document.querySelector('body').appendChild(setKakaoBtn)
        setKakaoBtn.appendChild(kakaoImg)

        // your plus friend id
        plusFriendId = VueKakaoPf.plusFriendId || null

        function plusFriendChat() {
          Kakao.PlusFriend.chat({
            plusFriendId: plusFriendId
          })
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue)
  window.VueKakaoPf = VueKakaoPf

export default VueKakaoPf
