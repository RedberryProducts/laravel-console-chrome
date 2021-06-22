<template>
	<div>
		<div class="flex h-7 bg-gray-200 items-center">
			<button 
				@click="forgetLogs()" 
				class="bg-gray-100 ml-2 px-1 rounded border border-white"
				style="outline: none"
			>
				clear
			</button>
		</div>
		<log 
			v-for="logMessage in logs" 
			:key="logMessage.datetime"
			:data="logMessage.message" 
		/>
	</div>
</template>

<script>
import Log from './Log.vue';
import { getLogs, forgetLogs } from './http';

export default {
	data() {
		return {
			logs: []
		};
	},
  components: { Log },
	methods: {
		clearLogs() {
			this.logs = [];
		},
		async updateLogs() {
			this.logs = await getLogs();
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
