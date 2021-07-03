<template>
    <div class="border-b border-gray-200 flex px-2 py-1">
        <p class="text-xxs text-number">{{ data.message }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            data: null,
        },
    }
</script>
