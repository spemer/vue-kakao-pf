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
        kakaoImg.setAttribute('src', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTZweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTYgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sYXVuY2hlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJsYXVuY2hlciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHJlY3QgaWQ9ImJhc2UiIGZpbGw9IiNGRkNEMDAiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcng9IjI4Ij48L3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSItZy1pYy0vLWljLWtha2FvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC4wMDAwMDAsIDE2LjAwMDAwMCkiIGZpbGw9IiM0MDM2MzEiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNjY2NjY2NjY3LDEwLjE3NDUxMDEgQzAuNjY2NjY2NjY3LDEzLjY5OTU0NzggMy4xNjY2NjY2NywxNy4wODkyNjQ4IDYuOTE2LDE4Ljk4NjQzNDQgQzYuNjM4NjY2NjcsMTkuNjY0Mzc3OCA1LjUyNjY2NjY3LDIzLjQ2MDA1NjkgNS41MjY2NjY2NywyMy43MzIwMzgyIEM1LjUyNjYwODU1LDIzLjgwNTAwMjggNS41NTYxNjMxOCwyMy44NzQ4MzYgNS42MDg1MDQyNiwyMy45MjU0MDg0IEM1LjY2MDg0NTM0LDIzLjk3NTk4MDggNi4wODEzMzMzMywyNCA2LjA4MTMzMzMzLDI0IEM2LjM1ODY2NjY3LDI0IDEwLjk0MjY2NjcsMjAuODgyMjY0MyAxMS42MzczMzMzLDIwLjQ3NDk2MjMgQzEyLjQwMzc0ODcsMjAuNjk3NTgxNiAxMy4yMDIxNDU5LDIwLjc4ODE4MjkgMTMuOTk4NjY2NywyMC43NDI5MjQxIEMyMS40OTg2NjY3LDIwLjc0MjkyNDEgMjcuMzMyLDE2LjEzMzk4MDkgMjcuMzMyLDEwLjU3NTExMyBDMjcuMzMyLDQuNjEwMjgzMDMgMjEuNDk4NjY2NywwIDEzLjk5ODY2NjcsMCBDNi41LDAuMDA2Njk5MDQ1MzkgMC42NjY2NjY2NjcsNC42MTU2NDIyNyAwLjY2NjY2NjY2NywxMC4xNzQ1MTAxIFoiIGlkPSJpYy1rYWthbyI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')
        kakaoImg.style.cursor = 'pointer'
        kakaoImg.style.webkitBorderRadius = '100%'
        kakaoImg.style.borderRadius = '100%'

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
