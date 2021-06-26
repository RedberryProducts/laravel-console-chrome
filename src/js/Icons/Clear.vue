<template>
    <svg 
        :class="classes" 
        viewBox="0 0 96 96" 
        fill="none"
        @mouseenter="strokeColor = hoveredStrokeColor"
        @mouseleave="strokeColor = unhoveredStrokeColor"
    >
        <circle cx="48" cy="48" r="41.5" :stroke="strokeColor" stroke-width="13"/>
        <line x1="16.9497" y1="17.0503" x2="73.9497" y2="74.0503" :stroke="strokeColor" stroke-width="14"/>
    </svg>
</template>

<script>

export default {
    props: {
        classes: '',
    },
    data() {
        return {
            strokeColor: '#6B7280',
            unhoveredStrokeColor: '#6B7280', 
            hoveredStrokeColor: '#1F2937', 
        };
    }
}

</script>
