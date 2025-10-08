<script setup>

    const props = defineProps({
        name: String,
    })

</script>

<template>

    <div class="rounded-lg border bg-white/10 border-gray-500 text-white flex justify-center items-center cursor-pointer hover:bg-white/20" v-motion
       :initial="{scale:1}"
       :hovered="{scale:1.05}" 
    >
        <Icon v-if="name === 'Vue'" name="logos:vue" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />
        <Icon v-else-if="name === 'Nuxt'" name="logos:nuxt-icon" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />
        <Icon v-else-if="name === 'Javascript'" name="logos:javascript" class="w-[1.5rem] h-[1.5rem] mr-[0.4rem] rounded-sm" />
        <Icon v-else-if="name === 'Tailwind'" name="logos:tailwindcss-icon" class="w-[1.5rem] h-[1.5rem] mr-[0.4rem]" />
        <Icon v-else-if="name === 'HTML'" name="skill-icons:html" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />                
        <Icon v-else-if="name === 'CSS'" name="skill-icons:css" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" /> 
        <Icon v-else-if="name === 'Figma'" name="logos:figma" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />          
        <Icon v-else-if="name === 'Indesign'" name="logos:adobe-indesign" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />   
        <Icon v-else-if="name === 'Blender'" name="logos:blender" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />    
        <Icon v-else-if="name === 'Strapi'" name="logos:strapi-icon" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />    
        <Icon v-else-if="name === 'Supabase'" name="devicon:supabase" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />                         
        <div class="hidden sm:block">{{ name }}</div>
    </div>

</template>