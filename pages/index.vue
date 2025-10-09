<script setup>
    import LetterGlitch from '~/src/Backgrounds/LetterGlitch/LetterGlitch.vue';
    import TextType from '~/src/TextAnimations/TextType/TextType.vue';
    import foto from '@/assets/img/Nico_Pies_foto_groß.jpg';
    import emailjs from '@emailjs/browser';

    useSeoMeta({
        title: "Nico Pies"
    })

    const token = "80a438d093f1e7ca886c9b9b26487fc61f948b56066bbf2691468a41769e4546cbf66215e84388af15ae3232e8771ed518abd945c0965a0dd8c0bd00df549d1a8b0f290ab980890b1917fcf69562d2c040bcd5edc7518157a487395556a664b76750267e7b14874333454190a9f04d87eb0beeef0685d22831a975f73970f7f2"

    const {data: projects} = await useFetch("https://effortless-courage-3e867d4d9f.strapiapp.com/api/projects?populate=*", 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    console.log(projects.value);

    const scrollHome = inject('scrollHome');
    const scrollAbout = inject('scrollAbout');
    const scrollProject = inject('scrollProject');
    const scrollKontakt = inject('scrollKontakt');

    const form = ref();

    const submit = ref("senden");


    const sendEmail = (e) => {

        console.log(form.value)

        e.preventDefault();
        submit.value = "Lädt!";

        emailjs
            .sendForm('service_bj7mcsl', 'template_88im29c', form.value, {
                publicKey: '8AEXu_yr2_TMY1YKS',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.value.reset();
                    submit.value = "Senden erfolgreich!";
                    setTimeout(() => {submit.value = "senden"}, 2000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    submit.value = "Senden fehlgeschlagen";
                    setTimeout(() => {submit.value = "senden"}, 2000);
                },
            )


    };

    const childId = ref(null)
    const childMoreClicked = ref(null)

    const handleEmit = (val) => {
        childId.value = val.id;
        childMoreClicked.value = val.moreClicked;

    }


</script>

<template>
    <div id="main-container">     
        <div class="font-custom bg-neutral-950 flex flex-col h-screen">
            <LetterGlitch
                :glitch-colors="['#0F4C75', '#1B262C', '#3282B8']"
                :glitch-speed="50"
                :center-vignette="false"
                :outer-vignette="false"
                :smooth="true"
                class="w-full  bg-neutral-950"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 pointer-events-none"></div>
            <section ref="scrollHome" class="w-full h-full flex justify-center items-center mt-[20rem]">
                <div class="flex flex-col items-start w-3/5">
                    <TextType class="text-white text-[3.5rem] relative sm:text-[6rem]" 
                        :text="['Hi,', 'Hallo,', 'Hello,', 'Bonjour,', 'Ciao,', 'こんにちは,' ,'Γειά σου,' ,'Hej,']"
                        :typing-speed="100"
                        :pause-duration="1500"
                        :show-cursor="true"
                    />
                    <div class="flex flex-row">
                        <div class="text-[2rem] text-white sm:text-[3rem]" v-motion
                            :initial="{scale:1.1, opacity:0}"
                            :visible="{scale:1, opacity:1}"
                            :delay="200"
                        >ich bin</div>
                        <h1 class="text-[2rem] text-sky-600 font-bold ml-6 sm:text-[3rem]" v-motion
                            :initial="{scale:1.1, opacity:0}"
                            :visible="{scale:1, opacity:1}"
                            :delay="250"
                        >NICO</h1>
                    </div>
                    <div class="text-neutral-400 text-[0.85rem] sm:text-[1rem]" v-motion
                        :initial="{scale:1.1, opacity:0}"
                        :visible="{scale:1, opacity:1}"
                        :delay="300"
                    >21 Jahre alt und komme aus Hagen. Derzeit studiere ich Medieninformatik im 7. Semester an der Fachhochschule Südwestfalen. Besonders begeistere ich mich für moderne Webtechnologien und Frontend-Entwicklung – von intuitivem UX bis hin zu ansprechendem UI.</div>
                </div>

            </section>
            <div class="inset-0 flex justify-center items-center">
                <div class=" mt-[20rem] relative text-neutral-400/30 flex flex-col items-center -space-y-3 invisible sm:visible"><Icon class="absolute"  name="line-md:arrow-down" size="1.5rem" v-motion
                        :initial="{scale:0.8}"    
                        :enter="{scale:1.1, transition: {repeat: Infinity, repeatType: 'loop', repeatDelay: 1000, duration: 300}}"
                    />
                    <Icon name="fluent-circle-48-regular" class="absolute" size="3rem" v-motion
                        :initial="{scale:1.2}"    
                        :enter="{scale:1, transition: {repeat: Infinity, repeatType: 'loop', repeatDelay: 1000, duration: 300, delay: 100}}"
                    />
                </div>
            </div>
            <section ref="scrollAbout" class="h-screen flex justify-center items-center">
                <div class="flex flex-col items-center w-[90%] mt-[20rem] sm:w-2/3">
                    <h2 class="text-white text-[3rem] mb-[3rem]">Über <span class="text-sky-600">mich</span></h2>
                    <div class="bg-white/10 backdrop-blur rounded-lg border border-gray-500 mb-[10rem] p-[2rem]">
                        <div class="bg-white/30 w-full h-[1.5rem] absolute top-0 left-0 rounded-t-lg flex items-center pl-[0.5rem]">
                            <div class="grid grid-cols-3 grid-rows-1 gap-[0.5rem] group">
                                <div class="w-[1rem] h-[1rem] bg-red-500 rounded-full flex justify-center items-center"><Icon name="maki:cross" size=".5rem" class="text-red-950 opacity-0 group-hover:opacity-100"/></div>
                                <div class="w-[1rem] h-[1rem] bg-yellow-500 rounded-full flex justify-center items-center"><Icon name="typcn:minus" size=".75rem" class="text-yellow-900 opacity-0 group-hover:opacity-100"/></div>
                                <div class="w-[1rem] h-[1rem] bg-green-500 rounded-full flex justify-center items-center"><Icon name="mingcute:fullscreen-2-fill" size=".75rem" class="text-green-900 opacity-0 group-hover:opacity-100"/></div>                                                                
                            </div>
                        </div>
                        <div class="grid grid-cols-1 grid-rows-4 gap-[1rem] mt-[1rem] w-full h-full  grid-flow-col sm:grid-rows-2 sm:grid-cols-3">
                            <div class="bg-white/10 backdrop-blur rounded-lg border border-gray-500 grid grid-cols-2 col-span-2 grid-rows-2 p-[1rem] w-full h-full gap-[0.5rem] sm:col-span-1" v-motion
                                :initial="{opacity: 0,y: 50}"
                                :visible="{opacity: 1, y:0}"
                            >
                                <Socials name="LinkedIn"/>
                                <Socials name="Email"/>
                                <Socials name="Github" />
                            </div>
                            <div class="bg-white/10 backdrop-blur rounded-lg border border-gray-500 col-span-2 grid grid-cols-4 grid-rows-3 grid-flow-dense gap-[0.5rem] p-[.5rem]" v-motion
                                :initial="{opacity: 0,y: 50}"
                                :visible="{opacity: 1, y:0, transition:{delay: 300}}"
                            >
                                <Skill name="Vue" />
                                <Skill name="Nuxt" /> 
                                <Skill name="Strapi" />      
                                <Skill name="Supabase" />                                                            
                                <Skill name="Javascript" />
                                <Skill name="Tailwind" />      
                                <Skill name="HTML" />     
                                <Skill name="CSS" />         
                                <Skill name="Figma" />                                                                                     
                                <Skill name="Indesign" />             
                                <Skill name="Blender" />     
                                               
                            </div>
                            <div class="bg-white/10 backdrop-blur rounded-lg border border-gray-500 flex flex-row items-center justify-center p-[1rem] col-span-2 sm:col-span-1" v-motion
                                :initial="{opacity: 0,y: 50}"
                                :visible="{opacity: 1, y:0, transition:{delay: 100}}"
                            >
                                <div class="flex flex-col items-center justify-center">
                                    <div class="flex flex-col items-center -space-y-[4rem]" >
                                        <Icon name="fa7-solid:check" class="text-green-500 w-[2.75rem] h-[2.75rem]" v-motion
                                            :initial="{scale:0.3, opacity:0}"
                                            :visible="{scale:1, opacity:1, transition: {delay:550}}"
                                        />
                                        <Icon name="fluent-circle-48-regular" class=" text-green-500" size="5rem" v-motion
                                            :initial="{scale:0.8, opacity:0}"
                                            :visible="{scale:1, opacity:1, transition: {delay:400}}"
                                        />
                                    </div>
                                    <div class="text-white ml-[0.5rem] text-center" v-motion    
                                        :initial="{opacity:0, scale: 0.5}"
                                        :visible="{opacity:1,scale:1, transition:{delay:650}}"
                                    >suche nach Praxismöglichkeiten</div>
                                </div>

                            </div>
                            <div class="bg-white/10 backdrop-blur rounded-lg border border-gray-500  flex justify-center items-center p-[0.5rem] sm:p-[1rem] row-span-1 sm:row-span-2 col-span-2 sm:col-span-1" v-motion
                                :initial="{opacity: 0,y: 50}"
                                :visible="{opacity: 1, y:0, transition:{delay: 200}}"
                            >
                                <img :src="foto" class="rounded-lg sm:h-[22rem] h-[11rem] sm:w-[17rem] w-[8.5rem] border border-gray-500" densities="x1 x2" sizes="17rem"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref="scrollProject" class="w-full h-full flex flex-col justify-center items-center mt-[40rem] sm:mt-[10rem]">
                <div class="text-white text-[3rem] mb-[3rem]">Projekte</div>
                <div class="bg-white/10 backdrop-blur rounded-lg border border-gray-500 mb-[10rem] p-[2rem] w-[90%] sm:w-[60%] ">
                    <div class="bg-white/30 w-full h-[1.5rem] absolute top-0 left-0 rounded-t-lg flex items-center pl-[0.5rem]">
                        <div class="grid grid-cols-3 grid-rows-1 gap-[0.5rem] group">
                            <div class="w-[1rem] h-[1rem] bg-red-500 rounded-full flex justify-center items-center"><Icon name="maki:cross" size=".5rem" class="text-red-950 opacity-0 group-hover:opacity-100"/></div>
                            <div class="w-[1rem] h-[1rem] bg-yellow-500 rounded-full flex justify-center items-center"><Icon name="typcn:minus" size=".75rem" class="text-yellow-900 opacity-0 group-hover:opacity-100"/></div>
                            <div class="w-[1rem] h-[1rem] bg-green-500 rounded-full flex justify-center items-center"><Icon name="mingcute:fullscreen-2-fill" size=".75rem" class="text-green-900 opacity-0 group-hover:opacity-100"/></div>                                                                
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3  gap-[1rem] mt-[1rem] w-full h-full grid-flow-dense" v-auto-animate>
                        <LazyProjekt v-for="project in projects.data" :key="project.id" :project="project" @moreClicked="handleEmit" :class="(childMoreClicked && project.id === childId) ? 'sm:col-span-3 sm:row-span-2 col-span-1 row-span-3' : 'col-span-1 row-span-1' "/>
                                                                                                  
                    </div>
                </div>
            </section>
            <section ref="scrollKontakt" class="h-screen flex flex-col justify-center items-center w-full mt-[20rem] sm:mt-[10rem] mb-[10rem]">
                <div class="text-white text-[3rem] mb-[3rem]">Kontakt</div>
                <div class="flex flex-col w-1/2 mb-[3rem] justify-center items-center">
                    <form ref="form" @submit.prevent="sendEmail">
                        <div class="flex flex-row justify-center items-center">
                            <input name="name" type="text" placeholder="Name" required class="appearance-none outline-none focus:outline-none focus:ring-0 text-white caret-white w-[11rem] h-[3rem] sm:w-[20rem] sm:h-[4rem] bg-white/10 rounded-lg pl-[1rem] border border-gray-500 focus:border-sky-500 mr-[0.5rem]"  />
                            <input name="email" type="email" placeholder="Email" required class="appearance-none outline-none focus:outline-none focus:ring-0 text-white caret-white w-[11rem] h-[3rem] sm:w-[20rem] sm:h-[4rem] bg-white/10 rounded-lg pl-[1rem] border border-gray-500 focus:border-sky-500" />
                        </div>
                        <div class="flex justify-center items-center mt-[0.5rem] ml-[0.5rem]">
                            <textarea name="message" placeholder="Nachricht" class="appearance-none outline-none focus:outline-none focus:ring-0 text-white caret-white w-[22.5rem] sm:w-[40.5rem] sm:h-[10rem] bg-white/10 rounded-lg pl-[1rem] pt-[1rem] border border-gray-500 focus:border-sky-500 mr-[0.5rem]" required></textarea>
                        </div>
                        <div class="flex justify-center items-center mt-[0.5rem]">
                            <button type="submit" class=" w-[22.5rem] h-[3rem] sm:w-[40.5rem] sm:h-[4rem] text-center hover:bg-sky-500 rounded-lg hover:text-white text-white/30 bg-white/10 cursor-pointer duration-75 select-none">{{ submit }}</button>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    </div>    
</template>
