<template>
    <div v-if="host&&listing" class="row">
        <div class="row col-6">
            <section class="row">
                <img class="avatar" v-bind:src="host.hostImageURL" alt="host"/><h4>Hosted by {{host.name}}</h4>
            </section>
            <div class="row">
                <div><v-icon color=#FF5A5F small>mdi-star</v-icon> {{listing.reviews.length}} reviews</div>
                <div v-if="host.verified"><v-icon color=#FF5A5F small>mdi-shield-check</v-icon> Identity verified</div>
                <div v-if="host.superHost"><v-icon color=#FF5A5F small>mdi-medal</v-icon> Superhost</div>
            </div>
            <section>{{host.description}}</section>
            <section>
                <header>During your stay</header>
                {{host.duringYourStay}}
            </section>
            <section v-if="host.superHost">
                <header>{{host.name}} is a superhost</header>
                <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            </section>
        </div>
        <div class="col-6">
            <p>Languages: {{host.languages}}</p>
            <p>Response rate: {{host.responseRate}}%</p>
            <p>Response time: {{host.responseTime}}</p>
        </div>
    </div>
</template>

<style scoped src="./HostedBy.css"></style>

<script>
    export default {
        name: 'HostedBy',
        props: {
            listing: Object,
            host: Object

        }
    }
</script>