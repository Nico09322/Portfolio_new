<script setup>
    import pb from "@/assets/img/Nico_Pies_Bewerbungsfoto.jpg"

    const lenis = inject('lenis');
    const scrollHome = inject('scrollHome');
    const scrollAbout = inject('scrollAbout');
    const scrollProject = inject('scrollProject');
    const scrollKontakt = inject('scrollKontakt');

    



    const scrollToHome = () => {
        lenis.scrollTo(scrollHome.value, { offset: -400, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    };

    const scrollToAbout = () => {
        lenis.scrollTo(scrollAbout.value, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    };

    const scrollToProjects = () => {
        lenis.scrollTo(scrollProject.value, {offset: -100, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    };

    const scrollToContact = () => {
        lenis.scrollTo(scrollKontakt.value, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    };
    
</script>

<template>
    <div class="fixed w-full flex justify-center z-10 pointer-events-none font-custom invisible sm:visible">
        <div class="mt-6 w-2/3 h-16 bg-white/10 backdrop-blur rounded-lg pointer-events-auto border border-gray-500 flex justify-center items-center flex-row pl-4 pr-4">

            <div class="flex flex-row items-center space-x-0.5 group cursor-pointer">
                <div class="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center transition-transform duration-300 ease-out group-hover:translate-x-[4rem] group-hover:w-4 group-hover:h-4" ></div>
                <img :src="pb" class="rounded-full w-11 h-11 transition-transform duration-300 ease-out group-hover:rotate-6 absolute "/>
                <div class="absolute left-0 transition-all duration-100 group-hover:duration-300 ease-out text-white group-hover:left-[6.25rem] opacity-0 group-hover:opacity-100">verfügbar</div>
            </div>
            <div class="flex flex-row text-white ml-auto space-x-6 cursor-pointer select-none">
                <div class="hover:text-white" @click="scrollToHome" v-motion
                :initial="{
                    scale:1
                }"
                :hovered="{
                    scale:1.1
                }"
                >HOME</div>
                <div class="hover:text-white" @click="scrollToAbout" v-motion
                :initial="{
                    scale:1
                }"
                :hovered="{
                    scale:1.1
                }">ABOUT</div>
                <div class="hover:text-white" @click="scrollToProjects" v-motion
                :initial="{
                    scale:1
                }"
                :hovered="{
                    scale:1.1
                }">PROJECTS</div>
                <div class="hover:text-white" @click="scrollToContact" v-motion
                :initial="{
                    scale:1
                }"
                :hovered="{
                    scale:1.1
                }">CONTACT</div>
            </div>
        </div>
    </div>
</template>