<template>
    <div class="comments">
        <h1>Comments {{ commentId }}</h1>
    </div>
</template>


<script>
export default {
    name: 'Comments',
    data(){
        return {
            commentId: this.$route.params.comment_id
        };
    },
    methods: {
        updateCommentId(){
            this.commentId = this.$route.params.commentId
        }
    },
    watch: {
        $route: 'updateCommentId'
    }
}
</script>

<style scoped>

</style>

