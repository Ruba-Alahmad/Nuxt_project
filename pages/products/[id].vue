<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Laborum sed soluta nemo dolorum consequatur deserunt fugit veniam, 
        </p>
    </div>
</template>

<script setup>
const { id} = useRoute().params

definePageMeta({
        layout:'products'
    })
</script>

<style scoped>

</style>