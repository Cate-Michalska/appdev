<template>
  <div>
      <Chat 
       :participants="participants"
       :myself="myself"
       :messages="messages"
       :onType="onType"
       :onMessageSubmit="onMessageSubmit"
       :chatTitle="chatTitle"
       :placeholder="placeholder"
       :colors="colors"
       :borderStyle="borderStyle"
       :hideCloseButton="hideCloseButton"
       :closeButtonIconSize="closeButtonIconSize"
       :submitIconSize="submitIconSize"/>
   </div>
</template>

<script>
import { Chat } from 'vue-quick-chat'
export default {
  components: {
    Chat
  },
}
</script>

<style>

</style>