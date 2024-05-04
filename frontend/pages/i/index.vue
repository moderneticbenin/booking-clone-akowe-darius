<template>
    <div class="w-full">
        <Header />
        <div class="container mx-auto max-w-screen-xl bg-[#f3f3f3] max-h-fit py-7 px-[88px]">
            <div class="w-full my-5">
                <h1 class="text-4xl font-bold">Trouvez l'hôtel idéal sur Booking.com</h1>
                <h3 class="font-semibold">Des hôtels pas chers aux chambres de luxe, et bien plus encore</h3>
            </div>
            <div class="w-full flex items-center bg-amber-400 shadow-lg rounded-md p-1">
                <div class="bg-white relative rounded h-full basis-5/12 mr-1">
                    <Icon name="icon-park-outline:single-bed" size="24"
                        class="w-6 text-gray-400 absolute top-[28%] left-2" />
                    <input ref="input1" type="text"
                        class="border-none rounded text-black ring:border-none h-full font-normal py-[18px] pl-10 text-sm w-full"
                        @focusout="initialiserValue" @focusin="initialiserValue"
                        :value="!inputActive ? 'Où allez-vous ?' : ''" placeholder="Où allez-vous ?">
                </div>
                <div class="bg-white relative rounded h-full basis-2/12 mr-1">
                    <Icon name="tdesign:calendar-1" size="24" class="w-6 text-gray-400 absolute top-[28%] left-2" />
                    <button
                        class="border-none rounded text-black ring:border-none h-full font-normal py-4  text-sm w-full">
                        Arrivée - Départ
                    </button>
                </div>
                <div class="bg-white relative rounded h-full basis-3/12 mr-1">
                    <Icon name="mdi:person" size="24" class="w-6 text-gray-400 absolute top-[28%] left-2" />
                    <div class="flex items-center w-full pl-1">
                        <button
                            class="border-none rounded text-black ring:border-none h-full font-normal py-4  text-sm w-full">
                            2 adultes · 0 enfant · 1 chambre
                        </button>
                        <div class="flex-col items-center absolute top-[28%] right-2">
                            <Icon name="ph:caret-up-down" size="18" class="w-6 text-[#006ce4]" />
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded h-full basis-2/12 mr-1">
                    <button
                        class="border-none text-xl rounded text-white bg-[#006ce4] ring:border-none h-full font-normal py-3 w-full">
                        Rechercher
                    </button>
                </div>
            </div>
            <div class="text-slate-700 flex items-center cursor-pointer my-4 border-none">
                <input type="checkbox" class="bg-white w-5 h-5 mr-2">
                <span class="text-sm">Je voyage pour le travail</span>
            </div>
        </div>
        <div class="container mx-auto max-w-screen-xl bg-white max-h-fit py-5 px-[88px]">
            <div class="text-sm flex justify-between items-center max-w-fit mb-10">
                <span class="text-[#006ce4] text-xs mr-2">Accueil</span>
                <span class="text-xs">></span>
                <span class="text-[#006ce4] text-xs mx-2">Hôtels</span>
                <span class="text-xs">></span>
                <span class="text-xs mx-2">Tous les hôtels</span>
            </div>
            <div class="flex items-center w-full justify-between">
                <div>
                    <h4 class="font-extrabold text-2xl">
                        Des hôtels à proximité pour une réservation de dernière minute
                    </h4>
                    <h5 class="text-md my-1.5 text-gray-500">Trouvez une super offre d'hôtel pour ce soir ou pour un
                        prochain
                        séjour</h5>
                </div>
                <div class="flex items-center border-[#006ce4] border rounded-md">
                    <button @click="isHotelCeSoirWeek = !isHotelCeSoirWeek"
                        :class="isHotelCeSoirWeek ? 'text-white bg-[#006ce4] cursor-pointer text-sm p-2 px-3 rounded-l' : 'bg-white text-[#006ce4] cursor-pointer text-sm p-2 px-3 rounded-l '">
                        Hôtels pour ce soir
                    </button>
                    <button @click="isHotelCeSoirWeek = !isHotelCeSoirWeek"
                        :class="!isHotelCeSoirWeek ? 'text-white bg-[#006ce4] cursor-pointer text-sm p-2 px-3 rounded-r' : 'bg-white text-[#006ce4] cursor-pointer text-sm p-2 px-3 rounded-l '">
                        Hôtels pour ce week-end
                    </button>
                </div>
            </div>
        </div>
        <div class="container mx-auto max-w-screen-xl bg-white max-h-fit py-5 px-[88px]">
            <div v-if="isHotelCeSoirWeek" class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <div v-for="h in listeHotelsCeSoir" class="rounded-md border-b h-44 flex items-start  pb-2 ">
                    <img src="https://placehold.co/100x100" alt="" class="h-40 w-auto rounded-md">
                    <div class="w-full mx-2 flex items-start align-top justify-between">
                        <a class="text-md hover:underline" href="#">
                            {{ h.nom }}
                        </a>
                        <div class=" text-right float-right flex-col">
                            <div
                                class="bg-[#043c94] p-1 text-sm w-7 h-7 ml-24 text-white rounded-tr-md rounded-tl-md rounded-br-md">
                                {{ h.note }}
                            </div>
                            <small class="text-gray-600">
                                À partir de
                            </small>
                            <div class="text-xl uppercase font-extrabold">
                                {{ h.prix }}
                            </div>
                            <small class="text-gray-600">
                                pour ce soir
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <div v-for="h in listeHotelsCeWeekend" class="rounded-md border-b h-44 flex items-start  pb-2 ">
                    <img src="https://placehold.co/100x100" alt="" class="h-40 w-auto rounded-md">
                    <div class="w-full mx-2 flex items-start align-top justify-between">
                        <a class="text-md hover:underline" href="#">
                            {{ h.nom }}
                        </a>
                        <div class=" text-right float-right flex-col">
                            <div
                                class="bg-[#043c94] p-1 text-sm w-7 h-7 ml-24 text-white rounded-tr-md rounded-tl-md rounded-br-md">
                                {{ h.note }}
                            </div>
                            <small class="text-gray-600">
                                À partir de
                            </small>
                            <div class="text-xl uppercase font-extrabold">
                                {{ h.prix }}
                            </div>
                            <small class="text-gray-600">
                                pour vendredi soir
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto max-w-screen-xl bg-white max-h-fit mt-4 py-5 px-[88px]">
            <div>
                <h4 class="font-extrabold text-2xl">
                    Destinations en vogue pour les hôtels
                </h4>
                <h5 class="text-sm">
                    Découvrez des destinations populaires auprès d'autres voyageurs
                </h5>
            </div>
            <div class=" flex items-center justify-between gap-3 w-full overflow-x-auto ">
                <div v-for="t in listeSlide1" class="rounded-md w-84 h-auto">
                    <img src="https://placehold.co/400x400" alt="" class="h-96 w-84 rounded-md">
                    <div class="my-5">
                        <h4 class="text-md hover:underline">{{ t.nom }}</h4>
                        <h5 class="text-sm text-gray-500">
                            Tarif moyen par nuit pour un hôtel 3 étoîles : XOF {{ t.prix }}
                        </h5>
                    </div>
                    <div class="flex items-center">
                        <Icon name="ph:trend-up-light" class="w-7 h-auto mr-2 rounded-full" />
                        <h5 class="text-sm text-green-700 align-top ">
                            Populaire auprès d'autres voyageurs
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto max-w-screen-xl bg-white max-h-fit mt-4 py-5 px-[88px]">
            <div>
                <h4 class="font-extrabold text-2xl">
                    Vous recherchez un type d'hôtel en particulier ?
                </h4>
                <h5 class="text-sm">
                    Trouvez l'hôtel idéal pour chaque occasion, quel que soit votre budget.
                </h5>
            </div>
            <div class="w-full border-b my-3">
                <button class="text-[#006ce4] border-[#006ce4] border-b-2 p-4 text-sm text-center">
                    Acceptant les animaux domestiques
                </button>
            </div>
            <div class="grid sm:grid-cols-4 grid-cols-1 gap-3 w-full">
                <button class="h-[430px] rounded-xl relative hover:underline text-left">
                    <img src="https://placehold.co/400x650" alt="" class="w-full rounded-xl h-full">
                    <div class="text-white float-end font-bold absolute z-20 bottom-3 hover:underline left-3">
                        Voir plus d'hôtel accepatant les animaux domestiques
                    </div>
                </button>
                <button
                    v-for="si in listeCard1" 
                    class="h-[430px] rounded-xl text-left border shadow-sm">
                    <img src="https://placehold.co/400x400" alt="" class="w-full rounded-t-xl">
                    <div class="p-3">
                        <div class="">
                            <h4 class="font-bold hover:underline">{{ si.nom }}</h4>
                        </div>
                        <div class="flex items-center">
                            <Icon v-for="s in si.star" name="mdi:star"
                                class="w-3 h-3 text-yellow-400 rounded-full" />
                        </div>
                        <h5 class="text-sm text-gray-500">
                            Hôtel accepatant les animaux domestiques à {{ si.ville }}
                        </h5>
                        <div class="text-sm text-gray-500 my-3">
                            <p>
                                <span class="text-[#043c94] text-sm mx-1">
                                    {{ si.note }}
                                </span>
                                <span class="text-gray-700">{{ si.avis }}</span> . {{ si.vecu }} expériences vécues
                            </p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import logo from '@/public/booking.svg'
import Header from '@/components/Header.vue'

const inputActive = ref(false)
const isHotelCeSoirWeek = ref(true)

const initialiserValue = () => {
    inputActive.value = !inputActive.value
}

const listeHotelsCeSoir = reactive([
    {
        nom: 'Ibis Cotonou',
        note: 7.1,
        prix: 'XOF 107 577'
    },
    {
        nom: 'Tahiti Hotel',
        note: 8.1,
        prix: 'XOF 60 348'
    },
    {
        nom: 'Hotel Safari Cotonou',
        note: 5.5,
        prix: 'XOF 9 839'
    },
    {
        nom: 'Hotel Les Orchidées',
        note: 6.2,
        prix: 'XOF 76 203'
    },
    {
        nom: 'Hotel FR Palace Tourbillon',
        note: 8.3,
        prix: 'XOF 14 693'
    },
    {
        nom: 'Beautifulgate Hotel',
        note: 6.7,
        prix: 'XOF 16 825'
    },
])
const listeHotelsCeWeekend = reactive([
    {
        nom: 'Ibis Cotonou',
        note: 7.1,
        prix: 'XOF 107 577'
    },
    {
        nom: 'Tahiti Hotel',
        note: 8.1,
        prix: 'XOF 60 348'
    },
    {
        nom: 'Hotel Safari Cotonou',
        note: 5.5,
        prix: 'XOF 9 839'
    },
    {
        nom: 'Hotel Les Orchidées',
        note: 6.2,
        prix: 'XOF 76 203'
    },
    {
        nom: 'Hotel FR Palace Tourbillon',
        note: 8.3,
        prix: 'XOF 14 693'
    },
    {
        nom: 'Beautifulgate Hotel',
        note: 6.7,
        prix: 'XOF 16 825'
    },
])
const listeSlide1 = reactive([
    {
        nom: 'Baku, Azerbaïdjan',
        prix: '2 471'
    },
    {
        nom: 'Tachkent, Ouzbékistan',
        prix: '4 691'
    },
    {
        nom: 'Mumbai, Inde',
        prix: '2 634'
    },
    {
        nom: 'Vienne, Autriche',
        prix: '65 964'
    },
    {
        nom: 'Paris, France',
        prix: '101 215'
    },
    {
        nom: 'Dubaï, Emirats arabes unis',
        prix: '4 797'
    },
    {
        nom: 'Charjah, Emirats arabes unis',
        prix: '1 989'
    },
    {
        nom: 'Istanbul, Turquie',
        prix: '40 918'
    },
    {
        nom: 'Pérouse, Italie',
        prix: '59 070'
    },
    {
        nom: 'Milan, Italie',
        prix: '89 015'
    }
])
const listeCard1 = reactive([
    {
        nom: 'TRYP by Wyndham Dubai',
        ville: 'Dubaï',
        star: [1,2,3,4],
        note: '8,5',
        avis: 'Très bien',
        vecu: '17 411'
    },
    {
        nom: 'Comwell Copenhagen Portside Dolce by Whydham',
        ville: 'Copenhague',
        star: [1,2,3,4],
        note: '8,6',
        avis: 'Superbe',
        vecu: '14 989'
    },
    {
        nom: 'Hamptom by Hilton Krakow Airport',
        ville: 'Balice',
        star: [1,2,3],
        note: '9,3',
        avis: 'Fabuleux',
        vecu: '14 337'
    }
])

</script>
