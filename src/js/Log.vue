<template>
	<div class="border-b border-gray-200 flex px-2 py-1">
		<p v-if="!isJSON" class="text-xs text-blue-900">{{ data }}</p>
		<pre v-else class="text-xs text-blue-900">
			{{ JSON.stringify(JSON.parse(data), null, 2) }}
		</pre>
	</div>
</template>

<script>
import {isJSON} from './helpers';

export default {
	props: {
		data: '',
	},
	data() {
		return {
			isJSON: false,
		}
	},
	mounted() {
		this.isJSON = isJSON(this.data);
	}
}

</script>
