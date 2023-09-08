<script setup>
    import { ref } from 'vue'

    const open = ref(false)
</script>

<template>
    <section class="section">
        <h2>
            Deuxième création,<br>
            Rédaction d'un cahier des charges :
        </h2>
        <img @click="open = !open" src="../assets/img/presentation-cahier.jpg" alt="Image de présentation du cahier des charges" class="présentation">
        <div v-if="open">
            <div class="more-div">
                <a href="../assets/img/cahier_1.jpg" target="_self"><img src="../assets/img/cahier_1.jpg" alt="image 1 du cahier des charges" class="more-img"></a>
                <a href="../assets/img/cahier_2.jpg" target="_self"><img src="../assets/img/cahier_2.jpg" alt="image 2 du cahier des charges" class="more-img"></a>
                <a href="../assets/img/cahier_3.jpg" target="_self"><img src="../assets/img/cahier_3.jpg" alt="image 3 du cahier des charges" class="more-img"></a>
            </div>
        </div>
    </section>
</template>