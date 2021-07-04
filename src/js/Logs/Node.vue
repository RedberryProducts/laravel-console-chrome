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
    <div v-if="type === 'object'">
        <div v-if="objectClosed">
           <span v-if="!global" class="text-key mr-1 text-xxs w-5">{{ idx }}: </span>
           <span class="text-gray-400 text-xxs mr-1">{</span>
           <span class="text-gray-500 text-xxs cursor-pointer" @click="openObject">items: {{ objectKeys.length }}</span>
           <span class="text-gray-400 text-xxs ml-1">}</span>
           <span v-if="!global" class="text-xxs">,</span>
        </div>
        <div v-else>
           <span v-if="!global" class="text-key mr-1 text-xxs w-5">{{ idx }}: </span>
           <span class="text-gray-400 text-xxs cursor-pointer" @click="closeObject" >{</span>
               <span v-for="objectKey in objectKeys" class="flex pl-5">
                   <node :data="data[objectKey]" :type="getType(data[objectKey])" :idx="objectKey" />
               </span>
           <span class="text-gray-400 text-xxs cursor-pointer -mt-5" @click="closeObject" >}</span>
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
    <div v-else-if="type === 'null'">
        <span class="text-key mr-1 text-xxs w-5">{{ idx }}: </span>
        <span class="text-xxs text-null">
            null
        </span>
        <span class="text-xxs">,</span>
    </div>
</template>

<script>
    import { getType } from '../helpers.js';

    export default {
        props: {
            data: null,
            type: null,
            idx: null,
            global: false,
        },
        methods: {
            getType (el) {
                return getType(el);
            },
            openArray() {
                this.arrayClosed = false;
            },
            closeArray() {
                this.arrayClosed = true;
            },
            openObject() {
                this.objectClosed = false;
            },
            closeObject() {
                this.objectClosed = true;
            },
        },
        data() {
            return {
                arrayClosed: true,
                objectClosed: true,
                objectKeys: [],
            };
        },
        beforeMount() {
            if(this.type === 'object') {
                this.objectKeys = Object.keys(this.data);
            }
        },
    }
</script>
