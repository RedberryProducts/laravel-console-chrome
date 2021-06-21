<template>
	<div>
		<log 
			v-for="logMessage in logs" 
			:key="logMessage.datetime"
			:data="logMessage.formatted" 
		/>
	</div>
</template>

<script>
import Log from './Log.vue';
import { getLogs } from './http';

export default {
	data() {
		return {
			logs: []
		};
	},
  components: { Log },
	async mounted() {
		const logs = await getLogs();
		this.logs = logs;
	}
}
</script>
