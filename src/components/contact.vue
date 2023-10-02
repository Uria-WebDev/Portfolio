<script setup>
import { onMounted } from 'vue'

onMounted(() => {

// Récuperation des éléments du DOM
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const object = document.getElementById('object');
const message = document.getElementById('message');
const errorMessage = document.getElementById('error-message');
const form = document.querySelector('form');

form.addEventListener("submit", (event) => {

// Si un ou plusieurs champs sont vides, afficher un message d'erreur
    if (firstName.value === '' || lastName.value === '' || message.value === '' || object.value === '') {
        showError();
    }

// Sinon, envoyer le mail et supprimer le contenu des champs
    else {
        deleteFields();
        cancelError();
        alert('Le mail à été envoyé avec succès');
    }

    event.preventDefault();
});

// Message d'erreur
function showError() {
    errorMessage.style.display = "block";
}

// Supprime le message d'erreur
function cancelError() {
    errorMessage.style.display = "none";
}

// Suppression du contenu des champs
function deleteFields() {
    firstName.value = '';
    lastName.value = '';
    object.value = '';
    message.value = '';
}});
</script>

<template>
        <section id="contact" class="section">
            <h2>Me contacter par mail</h2>
            <div  style="display: none;" id="error-message">
                <div id="flex-div">

                    <div id="error-div">
                        <svg x-description="Heroicon name: mini/x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"></path>
                        </svg>
                    </div>

                    <div>
                        <h3>Tous les champs doivent être remplis</h3>
                    </div>

                </div>
            </div>

            <form action="#" method="POST" id="form">
  
                <div id="flex">
                    <div>
                        <label for="first-name">Prénom</label>
                        <div>
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="input">
                        </div>
                    </div>
      
                    <div>
                        <label for="last-name">Nom</label>
                        <div>
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="input">
                        </div>
                    </div>
                </div>

                <div  id="div-object">
                    <label for="object">Objet</label>
                    <div>
                        <input type="text" name="object" id="object" class="input">
                    </div>
                </div>

                <div id="div-message">
                    <div>
                        <label for="message">Message</label>
                    </div>
                    <div>
                        <textarea id="message" name="message" maxlength="500" class="input"></textarea>
                    </div>
                </div>

                <div id="div-button">
                    <button type="submit" class="button">
                        Envoyer
                    </button>
                </div>

            </form>
        </section>
</template>