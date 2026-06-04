<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Laborum sed soluta nemo dolorum consequatur deserunt fugit veniam, 
        </p>
        <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Laborum sed soluta nemo dolorum consequatur deserunt fugit veniam, 
        </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const {data, error} = await useFetch('/api/ninja')
    
</script>

<style  scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>