<template>
    <footer>
        <FooterText :users="numberOfUsers" />
    </footer>
</template>

<script>
import FooterText from './FooterText'
export default {
    props: ['numberOfUsers'],
    components: {
        FooterText
    }
}
</script>

<style scoped>
    footer {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 3%;
        background: #ccc;
        position: fixed;
        bottom: 0;
        width: 100vw;
    }
</style>