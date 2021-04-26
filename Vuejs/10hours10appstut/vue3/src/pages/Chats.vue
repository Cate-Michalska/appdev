<template>
    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-center text-2xl">Real Time Chat</h1>
            <div class="border rounded-lg">
                <div class="h-64 p-2">
                    <div v-for="chat in state.chats" :key="chat.message">{{ chat.message }}</div>
                </div>
                <div class="h-8 p-2">
                    <input 
                        v-model="state.message" 
                        placeholder="Start Typing..."
                        class="p-1 border rounded shadow"
                        @keydown.enter="addMessage"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, reactive } from "vue"; 
import { chatsRef } from "../utilities/firebase"; 

export default {
    setup(){
        const state = reactive({
            chats: [], 
            message:"", 
        }); 
        onMounted(async () => {
            chatsRef.on('child_added', (snapshot) => {
                state.chats.push({ key: snapshot.key, ... snapshot.val() }); 
            }); 
        }); 

        function addMessage(){
            const newChat = chatsRef.push()
            newChat.set({ message: state.message }); 
            state.message = ""; 
        }

        return { state, addMessage }; 
    }, 
}
</script>

<style>

</style>