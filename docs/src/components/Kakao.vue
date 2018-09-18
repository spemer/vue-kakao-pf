<template lang="pug">
  div#kakao
</template>

<script>
export default {
  methods: {
    plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: '_jmtVj'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
