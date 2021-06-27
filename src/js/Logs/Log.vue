<template>
    <NumberLog v-if="data.type === 'number'" :data="data" />
    <StringLog v-if="data.type === 'string'" :data="data" />
    <JSONLog v-if="data.type === 'object'" :data="data" />
    <NullLog v-if="data.type === 'null'" :data="data" />
</template>

<script>
    import NumberLog from './NumberLog.vue';
    import StringLog from './StringLog.vue';
    import JSONLog from './JSONLog.vue';
    import NullLog from './NullLog.vue';

    export default {
        props: {
            data: null,
        },
        components: { NumberLog, StringLog, JSONLog, NullLog },
    }

</script>
