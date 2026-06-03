<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Show products</NuxtLink>
            </nav>
        </header>
        <div>
            <slot></slot>
        </div>
        <footer>
            <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
        </footer>
    </div>
</template>







<style scoped>

    .router-link-exact-active{

        color: #12b388;

    }

</style>