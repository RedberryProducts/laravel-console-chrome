<template>
    <div v-if="type === 'array'">
        <div v-if="arrayClosed">
           <span v-if="!global" class="text-key mr-1 text-xxs w-5">{{ idx }}: </span>
           <span class="text-gray-400 text-xxs mr-1">[</span>
           <span class="text-gray-500 text-xxs cursor-pointer" @click="openArray">items: {{ data.length }}</span>
           <span class="text-gray-400 text-xxs ml-1">]</span>
           <span v-if="!global" class="text-xxs">,</span>
        </div>
        <div v-else>
           <span v-if="!global" class="text-key mr-1 text-xxs w-5">{{ idx }}: </span>
           <span class="text-gray-400 text-xxs cursor-pointer" @click="closeArray" >[</span>
               <span v-for="(el, idx) in data" class="flex pl-5">
                   <node :data="el" :type="getType(el)" :idx="idx" />
               </span>
           <span class="text-gray-400 text-xxs cursor-pointer -mt-5" @click="closeArray" >]</span>
           <span v-if="!global" class="text-xxs">,</span>
        </div>
    </div>
    <div v-else-if="type === 'number'">
        <span class="text-key mr-1 text-xxs w-5">{{ idx }}: </span>
        <span class="text-xxs text-number">
            {{ data }}
        </span>
        <span class="text-xxs">,</span>
    </div>
    <div v-else-if="type === 'string'">
        <span class="text-key mr-1 text-xxs w-5">{{ idx }}: </span>
        <span class="text-xxs text-string">
            "{{ data }}"
        </span>
        <span class="text-xxs">,</span>
    </div>
</template>

<script>
    export default {
        props: {
            data: null,
            type: null,
            idx: null,
            global: false,
        },
        methods: {
            getType(val) {
                if(Array.isArray(val)) {
                    return 'array';
                }

                return typeof(val);
            },
            openArray() {
                this.arrayClosed = false;
            },
            closeArray() {
                this.arrayClosed = true;
            },
        },
        data() {
            return {
                arrayClosed: true,
            };
        }
    }
</script>
