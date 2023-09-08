<script setup>
    import { ref } from 'vue'

const crea1 = ref(true)
const crea2 = ref(true)
const crea3 = ref(true)
</script>

<template>
    <div id="div-background">
    <img src="../assets/img/header-background.jpg" alt="Image de lignes de code" id="header-background">
    </div>

    <header>

        <nav>

            <a href="#" id="main-button"><img src="../assets/img/main-page.png" alt="Logo de la page d'accueil" title="Accueil" class="logo"></a>
          
            <button @click="crea1 = !crea1" class="button">Création 1</button>
            <button @click="crea2 = !crea2" class="button">Création 2</button>
            <button @click="crea3 = !crea3" class="button">Création 3</button>

        </nav>
      
    </header>
    
</template>