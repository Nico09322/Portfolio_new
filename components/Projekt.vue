<script setup>

    import { useMouseInElement } from '@vueuse/core';

    const props = defineProps({
        project: {
            type: Object,
            required: true
        }
    })

    const sendMoreClicked = defineEmits(['moreClicked']);

    const target = ref(null)

    const {elementX, elementY, isOutside, elementHeight, elementWidth} = useMouseInElement(target)

    const cardTrasnform = computed(() => {
        const MAX_ROTATION = 6
        const rX = (MAX_ROTATION /2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
        const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

        return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
    })

    const moreClicked = ref(false)


    const sendOpen = () => {
        moreClicked.value = true;
        sendMoreClicked('moreClicked', { id: props.project.id, moreClicked: moreClicked.value });
    }

    const sendClose = () => {
        moreClicked.value = false;
        sendMoreClicked('moreClicked', { id: props.project.id, moreClicked: moreClicked.value })
    }



    console.log(props.value)

    const skillString =props.project.Skills;

    const skillArray = skillString.split(",").map(skill => skill.trim());




</script>

<template>

    <div class="font-custom group"v-motion
        :initial="{opacity: 0, y: 50, scale:1}"
        :visible="{opacity: 1, y:0, transition:{delay: project.id*50}}"
    >
        <div v-if="moreClicked === false" ref="target" class="bg-white/15  rounded-lg border border-gray-500 flex flex-col items-start justify-center p-[1rem]"

            :style="{
                transform: cardTrasnform,
                transition: 'transform 0.25s ease-out'
            }"
        >
            <div class="text-white mb-[0.5rem]">{{ project.Title }}</div>
            <div class="w-full rounded-lg overflow-hidden"> 
                <NuxtImg :src="project.Hero.url" class="w-full h-full object-cover" sizes="300px" densities="x1 x2" />
            </div>
            <div class="w-full h-[2rem] flex items-center justify-center group-hover:bg-sky-500 rounded-lg group-hover:text-white text-white/30 bg-white/10 mt-[0.5rem] cursor-pointer duration-75 select-none" @click="sendOpen" v-motion
                :initial="{scale:1}"
                :hovered="{scale:1.05}"
                :tapped="{scale:0.8}"
            >mehr Infos</div>
        </div>

        <div v-if="moreClicked" class="">
            <div class=" bg-white/10 backdrop-blur rounded-lg border border-gray-500 flex flex-col items-start justify-center p-[1rem] shadow-[0px_4px_12px_0px_rgba(0,_0,_0,_0.3)] z-50" >
                <div class="bg-white/30 w-full h-[1.5rem] absolute top-0 left-0 rounded-t-lg flex items-center pl-[0.5rem]">
                    <div class="grid grid-cols-3 grid-rows-1 gap-[0.5rem] group">
                        <div class="w-[1rem] h-[1rem] bg-red-500 rounded-full flex justify-center items-center" @click="sendClose"><Icon name="maki:cross" size=".5rem" class="text-red-950 opacity-0 group-hover:opacity-100"/></div>
                        <div class="w-[1rem] h-[1rem] bg-yellow-500 rounded-full flex justify-center items-center" @click="sendClose"><Icon name="typcn:minus" size=".75rem" class="text-yellow-900 opacity-0 group-hover:opacity-100"/></div>
                        <div class="w-[1rem] h-[1rem] bg-green-500 rounded-full flex justify-center items-center"><Icon name="mingcute:fullscreen-2-fill" size=".75rem" class="text-green-900 opacity-0 group-hover:opacity-100"/></div>                                                                
                    </div>
                </div>
                <div class="w-full h-full flex flex-col mt-[1rem] font-custom p-[0.5rem] max-h-[60vh] overflow-auto">
                    <div class="text-white text-[2rem]">{{ project.Title }}</div>
                    <div class="bg-white/20 w-2/5 text-center rounded-lg text-white mb-[0.5rem] cursor-pointer select-none"><a :href="project.Link" target="_blank">{{ project.Link }}</a></div>
                    <div class="flex flex-row"><Skill v-for="skill in skillArray" :name="skill" class="p-[0.5rem] mr-[0.5rem] mb-[0.5rem]" /></div>
                    <div class="grid grid-cols-3  w-full h-full gap-[0.5rem]"><NuxtImg v-for="(pic, index) in project.Pictures" :key="index" :src="pic.url" class="rounded-lg" sizes="200px" densities="x1 x2"/></div>
                    <div class="text-white mt-[0.5rem]">{{ project.Description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>