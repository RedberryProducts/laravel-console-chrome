<template>
    <div class="border-b border-gray-200 flex px-2 py-1">
        <node :data="this.data.message" :type="type" :global="true" />
    </div>
</template>

<script>
    import Node from './Node.vue';
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

            if(Array.isArray(passedData)) {
                this.type = 'array';
            }
        }
    }
</script>
