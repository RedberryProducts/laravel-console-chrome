<template>
    <div class="border-b border-gray-200 flex px-2 py-1">
        <p class="text-xs text-number">{{ data.message }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            data: null,
        },
    }
</script>
