<script setup>
    import { ref } from 'vue'

    const open = ref(false)
</script>

<template>
    <section class="section">
        <h2>
            Première création,<br>
            Création d'un CV en HTML et CSS :
        </h2>
        <img @click="open = !open" src="../assets/img/presentation-CV.png" alt="Image de présentation du CV" class="présentation">
        <div v-if="open">
            <div class="more-div">
                <a href="../assets/img/CV-1.jpg" target="_self"><img src="../assets/img/CV-1.jpg" alt="image 1 du CV de Julien Sorel" class="more-img"></a>
            </div>
            <div class="link-div">
                <a href="https://github.com/Uria-WebDev/CV-CEF" class="link">Lien vers le repository Github <img src="../assets/img/github-logo.png" alt="Logo de Github" class="logo-link"></a>
            </div>
        </div>
    </section>
</template>