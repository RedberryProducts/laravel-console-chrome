<template>
	<div class="border-b border-gray-200 flex px-2 py-1">
		<pre class="text-xs text-blue-900">
			{{ JSON.stringify(JSON.parse(data.message), null, 2) }}
		</pre>
	</div>
</template>

<script>
import {isJSON} from '../helpers';

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
		this.isJSON = isJSON(this.data.message);
	}
}

</script>
