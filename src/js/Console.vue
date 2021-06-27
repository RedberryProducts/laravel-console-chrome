<template>
	<div>
		<div class="flex h-6.5 bg-gray-100 border-b border-gray-300 items-center"> 
                    <img src="./../../public/images/laravel.png" class="h-4 ml-2.5 mr-2.75" />
                    <ClearIcon
                        classes="h-3.25 cursor-pointer" 
                        strokeClasses="bg-gray-300"
                        @click="forgetLogs()"
                    />
                    <span class="h-4 border-r border-gray-300 ml-3 mr-2" />
                    <input 
                        type="text" 
                        v-model="searchword" 
                        class="outline-none border border-gray-300 px-1" 
                        :placeholder="lang.search"
                    />
                </div>
                <Log 
                    v-for="item in presentableLogs" 
                    :key="item.id"
                    :data="item" 
                />
	</div>
</template>

<script>
import Log from './Logs/Log.vue';
import ClearIcon from './Icons/Clear.vue';
import { getLogs, forgetLogs } from './http';

export default {
    data() {
        return {
            logs: [],
            searchword: '',
            lang: window.lang,
        };
    },
    computed: {
        presentableLogs() {
            console.log({logs: this.logs});
            const trimmedSearchword = this.searchword.trim();
            if(trimmedSearchword === '') {
                return this.logs;
            }
            else {
                return this
                    .logs
                    .filter(function ({message}) {
                        return message && message.includes(trimmedSearchword)
                    });
            }
        }
    },
    components: { Log, ClearIcon },
    methods: {
        clearLogs() {
            this.logs = [];
        },
        async updateLogs() {
            const retrievedLogs = await getLogs();
            this.logs = retrievedLogs;
        },
        async forgetLogs() {
            await forgetLogs();
            this.clearLogs();
        }
    },
    async mounted() {
        this.updateLogs();

        const that = this;
        chrome.tabs.onUpdated.addListener(async function(_, {status}) {
                status === 'loading' && that.clearLogs();
                status === 'complete' && that.updateLogs();
        });
    }
}
</script>

