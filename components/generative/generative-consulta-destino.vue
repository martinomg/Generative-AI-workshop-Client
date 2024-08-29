<script setup>
    const consulta = ref('')
</script>
<template>
    <div class="flex gap-5 py-5">
        <input-text type="text" v-model="consulta" size="small"></input-text>
        <Button label="Generar" severity="contrast" size="small" />
    </div>
</template>