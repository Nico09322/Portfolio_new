<script setup>

    const props = defineProps({
        name: String,
    });

    let socialName = props.name;

    const copyMail = ref(false);

    const linkTo = () => {
        if(props.name === "LinkedIn") {
            window.open("https://www.linkedin.com/in/nico-pies-688228275/", "_blank")
        } else if (props.name === "Github") {
            window.open("https://github.com/Nico09322", "_blank")
        } else if (props.name === "Email") {
            navigator.clipboard.writeText("mail@nicopies.de");
            copyMail.value = true;
            socialName = "kopiert";
            setTimeout(() => {
                copyMail.value = false;
                socialName = props.name;
            }, 2000);
            
        }

    }

</script>

<template>
    <div class=" rounded-lg border bg-white/10  text-white flex justify-center items-center cursor-pointer hover:bg-white/20" :class="copyMail === true ? 'border-green-500 border-[2px]' : 'border-gray-500'" @click="linkTo" v-motion
        :initial="{scale:1}"
        :hovered="{scale:1.05}"
    >
        <Icon v-if="name === 'LinkedIn'" name="mdi:linkedin" class="w-[2.5rem] h-[2.5rem]" />
        <Icon v-else-if="name === 'Email'" name="material-symbols:mail-rounded" class="w-[2.5rem] h-[2.5rem]" :class="copyMail === true ? 'mr-0' : 'mr-[0.5rem]'"/>
        <Icon v-else-if="name === 'Github'" name="jam:github" class="w-[2.5rem] h-[2.5rem] mr-[0.5rem]"/>          
        <div>{{socialName}}</div>
    </div>

</template>