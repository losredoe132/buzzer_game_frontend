<template>
    <div class="rounded-borders bo q-pa-md">
        <q-expansion-item expand-separator icon="perm_identity" :label="name" :caption="id">
            <q-card>
                <q-card-section>
                    @ team {{ teamId }}
                </q-card-section>
            </q-card>
        </q-expansion-item>
    </div>
</template>

<script setup>

defineProps({
    name: String,
    id: Number,
    teamId: Number
})

</script>