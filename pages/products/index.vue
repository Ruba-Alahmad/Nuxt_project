<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
               <product-card :product="p"></product-card>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout:'products'
    })

    const {data: products} = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt project | products',
        meta:[
            {name: 'description', content: "Nuxt project"}
        ]
    })
</script>

<style lang="scss" scoped>

</style>