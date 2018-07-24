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
            storyId: this.$route.params.story_id
        };
    },
    methods: {
        updateStoryId(){
            this.storyId = this.$route.params.story_id
        }
    },
    watch: {
        $route: 'updateStoryId'
    }
}
</script>

<style scoped>

</style>

