<template>
	<div
		class="rounded-lg text-white font-roboto p-3 border-accent border-3 motion-opacity-in-0 motion-translate-y-in-25 motion-duration-900"
	>
		<div class="flex items-center text-center place-items-center mb-2">
			<Icon
				v-if="icon"
				:name="icon"
				size="48px"
			/>
			<h2 class="font-semibold ml-4">{{ title }}</h2>
		</div>
		<p>{{ description }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	icon?: string;
	description?: string;
}>();
</script>
