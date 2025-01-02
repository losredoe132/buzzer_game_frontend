<template>
    <q-list bordered class="rounded-borders">

        <q-expansion-item expand-separator icon="perm_identity" :label="name" caption="Player">
            <q-card>
                <q-card-section>
                    addtional info
                </q-card-section>
            </q-card>
        </q-expansion-item>
    </q-list>
</template>

<script setup>

defineProps({
    name: String,
})

</script>