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
        kakaoImg.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZCRTE5IiBkPSJNMCAwaDU2djU2SDB6Ii8+PHBhdGggZD0iTTE0LjY2NyAyNi4xNzVjMCAzLjUyNSAyLjUgNi45MTQgNi4yNDkgOC44MTEtLjI3Ny42NzgtMS4zOSA0LjQ3NC0xLjM5IDQuNzQ2IDAgLjA3My4wMy4xNDMuMDgzLjE5My4wNTIuMDUxLjQ3Mi4wNzUuNDcyLjA3NS4yNzggMCA0Ljg2Mi0zLjExOCA1LjU1Ni0zLjUyNWE3LjAzNCA3LjAzNCAwIDAgMCAyLjM2Mi4yNjhjNy41IDAgMTMuMzMzLTQuNjA5IDEzLjMzMy0xMC4xNjhDNDEuMzMyIDIwLjYxIDM1LjQ5OSAxNiAyNy45OTkgMTZjLTcuNDk5LjAwNy0xMy4zMzIgNC42MTYtMTMuMzMyIDEwLjE3NXoiIGZpbGw9IiM0MDM2MzEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')
        kakaoImg.style.webkitBorderRadius = '100%'
        kakaoImg.style.borderRadius = '100%'
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
};

if (typeof window !== 'undefined' && window.Vue)
  window.VueKakaoPf = VueKakaoPf;

export default VueKakaoPf;
