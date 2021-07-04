<template>
    <div class="border-b border-gray-200 flex px-2 py-1">
        <node :data="this.data.message" :type="type" :global="true" />
    </div>
</template>

<script>
    import Node from './Node.vue';
    import { getType } from '../helpers.js';

    export default {
        props: {
            data: '',
        },
        data() {
            return {
                nodeData: null,
                type: null,
           };
        },
        components: { Node, },
        beforeMount() {
            const passedData = this.data.message;
            this.type = getType(passedData);
        }
    }
</script>
