<template>
    <div class="rounded-borders bo q-pa-md">

            <q-expansion-item expand-separator icon="perm_identity" :label="name" caption="Player">
                <q-card>
                    <q-card-section>
                        addtional info
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </div>
</template>

<script setup>

defineProps({
    name: String,
})

</script>