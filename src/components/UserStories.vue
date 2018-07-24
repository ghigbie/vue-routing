<template>
    <div class="user-stories">
        <h1>User Stories {{ id }}</h1>
    </div>
</template>

<script>
export default {
    name: 'UserStories',
    data(){
        return{
            storyId: ['1', '2', '3', '5']
        };
    }
}
</script>

<style scoped>

</style>

