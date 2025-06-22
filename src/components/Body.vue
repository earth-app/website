<template>
	<main class="h-screen text-white">
		<div class="flex flex-col items-center justify-center w-full">
			<a ref="containerRef" href="https://app.earth-app.com" class="relative h-80 w-80 mb-32 mt-44">
				<img 
					src="/favicon.png"
					alt="Earth App Logo" 
					class="absolute h-full w-full rounded-full"
				/>

				<Icon
					v-for="(icon, idx) in icons"
					:key="idx"
					:name="icon.name"
					:title="`Satellite ${idx + 1}`"
					size="calc(12px + 1.5vw)"
					class="absolute"
					:style="iconStyle(idx, icon.offset, icon.radius)"
				/>
            </a>

			<h1 class="font-title text-6xl font-bold mb-2">Meet Real People.</h1>
            <h3 class="hover:text-primary transition"><a href="https://app.earth-app.com">Click to Get Started.</a></h3>
		</div>

        <InfoCard
            title="Proactive"
            icon="lucide:handshake"
            description="Prioritize real-world connections with people around you."
            class="relative bg-orange-500 shadow-lg shadow-orange-500/50 left-1/16 bottom-3/5 min-w-50 w-1/6 motion-delay-600 hover:opacity-90 transform"
        />
        <InfoCard
            title="Personal"
            icon="material-symbols:person-add-rounded"
            description="Connect with individuals, not just profiles. You control your experience, not us."
            class="relative bg-blue-500 shadow-lg shadow-blue-500/50 left-4/5 bottom-5/8 min-w-50 w-1/6 motion-delay-1100 hover:opacity-90 transform"
        />
        <InfoCard
            title="Private"
            icon="charm:shield-tick"
            description="Standard end-to-end encryption ensures you prioritize going outside. When was the last time you did that?"
            class="relative bg-green-500 shadow-lg shadow-green-500/50 left-1/12 bottom-1/2 min-w-50 w-1/6 motion-delay-1600 hover:opacity-90 transform"
        />
        <InfoCard
            title="Powerful"
            icon="mdi:gear"
            description="AI-powered features enchance your experience, keeping you engaged, informed, and connected."
            class="relative bg-purple-500 shadow-lg shadow-purple-500/50 left-7/10 bottom-1/2 min-w-50 w-1/6 motion-delay-2100 hover:opacity-90 transform"
        />
	</main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import InfoCard from './InfoCard.vue'

const icons = [
	{ name: 'carbon:satellite', speed: 6, radius: 60 },
	{ name: 'solar:satellite-linear', speed: 8, radius: 80 },
	{ name: 'circum:satellite-1', speed: 6 },
    { name: 'material-symbols-light:satellite-alt-outline', speed: 7 },
    { name: 'solar:rocket-bold-duotone', speed: 4, offset: 60, radius: 75 },
    { name: 'mdi:space-station', speed: 5, offset: 120 }
]

const containerRef = ref(null)

const angles = icons.map(() => ref(0))
let rafId = null
let lastTimestamp = 0

function animateFrame(timestamp) {
	if (!lastTimestamp) lastTimestamp = timestamp
	const deltaMs = timestamp - lastTimestamp
	lastTimestamp = timestamp

	icons.forEach((icon, idx) => {
		const degreesPerMs = 360 / (icon.speed * 1000)
		angles[idx].value = (angles[idx].value + degreesPerMs * deltaMs) % 360
	})

	rafId = requestAnimationFrame(animateFrame)
}


function iconStyle(idx, offset, radius) {
	const baseAngle = offset ?? (360 / icons.length) * idx
	const total = angles[idx].value + baseAngle
	const rad = (total * Math.PI) / 180
    const radiusPercent = radius ?? 65
	const x = 50 + Math.cos(rad) * radiusPercent
	const y = 50 + Math.sin(rad) * radiusPercent
	return {
		top: `${y}%`,
		left: `${x}%`,
		transform: 'translate(-50%, -50%)',
	}
}

onMounted(() => {
	rafId = requestAnimationFrame(animateFrame)
})

onUnmounted(() => {
	if (rafId) cancelAnimationFrame(rafId)
})
</script>