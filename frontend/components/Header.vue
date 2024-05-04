<template>
    <div class="container bg-[#043c94] mx-auto max-w-screen-xl px-[88px]">
        <div class="w-full py-4 flex-col">
            <div class="flex justify-between items-center mb-3">
                <div class="text-white text-2xl font-bold">
                    Booking.com
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-center space-x-9">
                        <button class="text-white uppercase">
                            XOF
                        </button>
                        <button>
                            <Icon name="emojione:flag-for-france" class="w-auto h-7 rounded-full" />
                        </button>
                        <button>
                            <Icon name="octicon:question-24" color="white" class="w-auto h-7 rounded-full" />
                        </button>
                        <div class="flex items-center space-x-3">
                            <button class="border border-white rounded px-2 text-white py-2 text-sm">
                                Ajouter votre établissement
                            </button>
                            <button class="border border-white bg-white rounded px-3 text-blue-500 py-2 text-sm">
                                S'inscrire
                            </button>
                            <button class="border border-white bg-white rounded px-3 text-blue-500 py-2 text-sm">
                                Se connecter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center max-w-screen-md">
                <button @click="chargerOnglet(1)"
                    :class="isActive1 ? 'border border-white bg-[#94b1c8] bg-opacity-15 ' : ''"
                    class=" rounded-full hover:bg-[#94b1c8] hover:bg-opacity-15 p-2 text-white text-sm flex space-x-2 items-center">
                    <Icon name="icon-park-outline:single-bed" size="24" color="white" class="w-6 mx-1" />
                    <span class="mr-1">Hébergements</span>
                </button>
                <button @click="chargerOnglet(2)"
                    :class="isActive2 ? 'border border-white bg-[#94b1c8] bg-opacity-15 ' : ''"
                    class=" rounded-full hover:bg-[#94b1c8] hover:bg-opacity-15 p-2 text-white text-sm flex space-x-2 items-center">
                    <Icon name="majesticons:airplane-line" strokeWidth="0.75" size="24" color="white"
                        class="w-6 mx-1" />
                    <span class="mr-1">Vols</span>
                </button>
                <button @click="chargerOnglet(3)"
                    :class="isActive3 ? 'border border-white bg-[#94b1c8] bg-opacity-15 ' : ''"
                    class=" rounded-full hover:bg-[#94b1c8] hover:bg-opacity-15 p-2 text-white text-sm flex space-x-2 items-center">
                    <Icon name="lucide:car-front" size="24" color="white" class="w-6 mx-1" />
                    <span class="mr-1">Voitures de location</span>
                </button>
                <button @click="chargerOnglet(4)"
                    :class="isActive4 ? 'border border-white bg-[#94b1c8] bg-opacity-15 ' : ''"
                    class=" rounded-full hover:bg-[#94b1c8] hover:bg-opacity-15 p-2 text-white text-sm flex space-x-2 items-center">
                    <Icon name="material-symbols-light:attractions-outline-rounded" size="24" color="white"
                        class="w-6 mx-1" />
                    <span class="mr-1">Attractions</span>
                </button>
                <button @click="chargerOnglet(5)"
                    :class="isActive5 ? 'border border-white bg-[#94b1c8] bg-opacity-15 ' : ''"
                    class=" rounded-full hover:bg-[#94b1c8] hover:bg-opacity-15 p-2 text-white text-sm flex space-x-2 items-center">
                    <Icon name="cil:taxi" size="24" color="white" class="w-6 mx-1" />
                    <span class="mr-1">Taxis aéroport </span>
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>

const isActive1 = ref(false)
const isActive2 = ref(false)
const isActive3 = ref(false)
const isActive4 = ref(false)
const isActive5 = ref(false)


const chargerOnglet = (id) => {
    switch (id) {
        case 1:
            isActive1.value = true
            isActive2.value = false
            isActive3.value = false
            isActive4.value = false
            isActive5.value = false
            break;
        case 2:
            isActive1.value = false
            isActive2.value = true
            isActive3.value = false
            isActive4.value = false
            isActive5.value = false
            break;
        case 3:
            isActive1.value = false
            isActive2.value = false
            isActive3.value = true
            isActive4.value = false
            isActive5.value = false
            break;
        case 4:
            isActive1.value = false
            isActive2.value = false
            isActive3.value = false
            isActive4.value = true
            isActive5.value = false
            break;
        case 5:
            isActive1.value = false
            isActive2.value = false
            isActive3.value = false
            isActive4.value = false
            isActive5.value = true
            break;

        default:
            break;
    }

}


</script>
