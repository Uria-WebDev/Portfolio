<script setup>
    import { ref } from 'vue'

    const open = ref(false)
</script>

<template>
    <section class="section">
            <h2>
                Troisième création,<br>
                Dynamiser un espace commentaire :
            </h2>
            <img @click="open = !open" src="../assets/img/presentation-commentaire.jpg" alt="Image de présentation de l'espace commentaire" class="présentation">
            <div v-if="open">
            <div class="more-div">
                <a href="../assets/img/comment_1.jpg" target="_self"><img src="../assets/img/comment_1.jpg" alt="image 1 de la dynamisation des commentaires" class="more-img"></a>
                <a href="../assets/img/comment_2.jpg" target="_self"><img src="../assets/img/comment_2.jpg" alt="image 2 de la dynamisation des commentaires" class="more-img"></a>
                <a href="../assets/img/comment_3.jpg" target="_self"><img src="../assets/img/comment_3.jpg" alt="image 3 de la dynamisation des commentaires" class="more-img"></a>
            </div>
            <div class="link-div">
                <a href="https://github.com/Uria-WebDev/Dynamiser-un-espace-commentaire" class="link">Lien vers le repository Github <img src="../assets/img/github-logo.png" alt="Logo de Github" class="logo-link"></a>
            </div>
        </div>
        </section>
</template>