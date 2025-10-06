<script setup>

    const props = defineProps({
        name: String,
    });

    const linkTo = () => {
        if(props.name === "LinkedIn") {
            window.open("https://www.linkedin.com/in/nico-pies-688228275/", "_blank")
        }

    }

</script>

<template>
    <div class=" rounded-lg border bg-white/10 border-gray-500 text-white flex justify-center items-center cursor-pointer hover:bg-white/20" @click="linkTo" v-motion
        :initial="{scale:1}"
        :hovered="{scale:1.05}"
    >
        <Icon v-if="name === 'LinkedIn'" name="mdi:linkedin" class="w-[2.5rem] h-[2.5rem]" />
        <Icon v-else-if="name === 'Email'" name="material-symbols:mail-rounded" class="w-[2.5rem] h-[2.5rem] mr-[0.5rem]"/>        
        <div>{{ name }}</div>
    </div>

</template>