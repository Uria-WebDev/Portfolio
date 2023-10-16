<script setup>
    import { ref } from 'vue'

    const open1 = ref(false)
    const open2 = ref(false)
    const open3 = ref(false)
</script>

<template>

    <main>

        <div id="div-h1">
            <h1>Mon Portfolio</h1>
        </div>

        <section>
            <h2>Julien Sorel</h2>
            <p>
                Bonjour et bienvenue à vous qui lisez ceci.<br>
                Je suis un jeune développeur web et web mobile de 23 ans.<br>
                Et voici quelque-unes de mes créations :
            </p>
        </section>

        <section id="crea1" class="section">
            <h2>
                Première création,<br>
                Création d'un CV en HTML et CSS :
            </h2>
            <img src="../assets/img/presentation-CV.png" alt="Image de présentation du CV" id="présentation1" class="présentation">
            <div class="develop">
                <button  @click="open1 = !open1" class="button">Développer</button>
            </div>

            <div v-if="open1" class="position-fix">
                <p class="create">
                    Créé le <time datetime="2023-06-16">16 Juin 2023</time> en utilisant HTML et CSS
                </p>
                <div class="more-div">
                    <a href="../assets/img/CV-1.jpg" target="_self"><img src="../assets/img/CV-1.jpg" alt="image 1 du CV de Julien Sorel" class="more-img"></a>
                </div>
                <div class="link-div">
                    <a href="https://github.com/Uria-WebDev/CV-CEF" target="_blank" class="link">Lien vers le repository Github <img src="../assets/img/github-logo.png" alt="Logo de Github" class="logo-link"></a>
                </div>
            </div>
        </section>

        <section id="crea2" class="section">
            <h2>
                Deuxième création,<br>
                Rédaction d'un cahier des charges :
            </h2>
            <img src="../assets/img/presentation-cahier.jpg" alt="Image de présentation du cahier des charges" id="présentation2" class="présentation">
            <div class="develop">
                <button  @click="open2 = !open2" class="button">Développer</button>
            </div>

            <div v-if="open2" class="position-fix">
                <p class="create">
                    Créé le <time datetime="2023-07-12">12 Juillet 2023</time>
                </p>
                <div class="more-div">
                    <a href="../assets/img/cahier_1.jpg" target="_self"><img src="../assets/img/cahier_1.jpg" alt="image 1 du cahier des charges" class="more-img"></a>
                    <a href="../assets/img/cahier_2.jpg" target="_self"><img src="../assets/img/cahier_2.jpg" alt="image 2 du cahier des charges" class="more-img"></a>
                    <a href="../assets/img/cahier_3.jpg" target="_self"><img src="../assets/img/cahier_3.jpg" alt="image 3 du cahier des charges" class="more-img"></a>
                </div>
                <div class="link-div2">
                    <a href="../assets/pdf/Cahier-des-charges.pdf" target="_blank" class="link">Lien vers le fichier PDF</a>
                </div>
            </div>
        </section>

        <section id="crea3" class="section">
            <h2>
                Troisième création,<br>
                Dynamiser un espace commentaire :
            </h2>
            <img src="../assets/img/presentation-commentaire.jpg" alt="Image de présentation de l'espace commentaire" id="présentation3" class="présentation">
            <div class="develop">
                <button  @click="open3 = !open3" class="button">Développer</button>
            </div>

            <div v-if="open3" class="position-fix">
                <p class="create">
                    Créé le <time datetime="2023-08-02">2 Août 2023</time> en utilisant Javascript
                </p>
                <div class="more-div">
                    <a href="../assets/img/comment_1.jpg" target="_self"><img src="../assets/img/comment_1.jpg" alt="image 1 de la dynamisation des commentaires" class="more-img"></a>
                    <a href="../assets/img/comment_2.jpg" target="_self"><img src="../assets/img/comment_2.jpg" alt="image 2 de la dynamisation des commentaires" class="more-img"></a>
                    <a href="../assets/img/comment_3.jpg" target="_self"><img src="../assets/img/comment_3.jpg" alt="image 3 de la dynamisation des commentaires" class="more-img"></a>
                </div>
                <div class="link-div">
                    <a href="https://github.com/Uria-WebDev/Dynamiser-un-espace-commentaire" target="_blank" class="link">Lien vers le repository Github <img src="../assets/img/github-logo.png" alt="Logo de Github" class="logo-link"></a>
                </div>
            </div>
        </section>

    </main>

</template>