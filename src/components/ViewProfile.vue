<template>
    <div class="view-profile">
        <h1>View Profile</h1>
        <h2>{{ userId }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ViewProfile',
    data() {
        return{
            userId: this.$route
        };
    }
}
</script>

<style scoped>

</style>


