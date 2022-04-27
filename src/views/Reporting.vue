<template>
	<div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row no vertical-parent dark" style="flex:3; ">
                <div class="no row vertical-center" >
                    <div class="no col-3">
                        {{ date }}
                    </div>
                    <div class="no col-6">
                    </div>
                    <div class="no col-3">
                        {{ time }}
                    </div>
                </div>
                
            </div>
            <div class="no row" style="padding:0px;margin:0px; flex:8;">
                    <div @click="addSmall()" class="no col-4" id = "small-drink">
                        <img src="../assets/icons/ShotGlass0.png" class="img-fluid rounded float-left"  height=50% alt="aaa">
                        125 ml
                    </div>
                    <div @click="addMedium()" class="no col-4" id = "medium-drink">
                        <img src="../assets/icons/ShotGlass1.png" class="img-fluid rounded float-left"   alt="aaa">
                        250 ml
                    </div>
                    <div @click="addBig()" class="no col-4" id = "big-drink">
                        <img src="../assets/icons/ShotGlass.png" class="img-fluid rounded float-left"   alt="aaa">
                        375 ml
                     </div>
                    <h2 class="no">Custom amount</h2>
                    <div class="no row">
                        
                        <div class="no col-12">
                            <input @change="addCustom($event)" type="text" class="inputs" id="Custom" style="margin-bottom:16px;margin-top:0px;">
                        </div>
                        
                    </div>
                    
            </div>


            <div class="row no vertical-parent" style="flex:4;">
                <div class="no vertical-center">
                    <h2 class="no">Choose a beverage</h2>
                    <div class = "no col-12">
<input list="ice-cream-flavors" class="inputs" style="width:90%" id="ice-cream-choice" name="ice-cream-choice" />

        <select v-model="beverage" @change="onSelectedChange($event)" id="ice-cream-flavors" style="width:100%">
            <option v-for="item in beverages" v-bind:key="item.Name" :value="item.Name">
                {{ item.DisplayName}}
            </option>
        </select>

                    </div>


                </div>
                
            </div>
            <div class="row no" style="flex:8;">
                
            </div>
            <div class="row no vertical-parent" style="flex:4;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button @click="addDrink()" class="align-middle buttons" style="width:100%; height:70%" id="custom-drink">
                                APPLY
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
            
        </div>
            
            
    </div>
</template>

<script>
import { query, collection, writeBatch, doc, getDocs, where } from "firebase/firestore";
import db from '../main.js'

// let beverages = [
//         {"Name":"water","DisplayName":"Water","multiplier":1},
//         {"Name":"appleJuice","DisplayName":"Apple Juice","multiplier":0.81},
//         {"Name":"orangeJuice","DisplayName":"Orange Juice","multiplier":0.9},
//         {"Name":"beer","DisplayName":"Beer","multiplier":0.49},
        
//     ]

export default {
    name: "top-header",
    methods: {  
        addSmall() {
            this.water_amount = 125
            console.log("water_amount", this.water_amount)
        },
        addMedium() {
            this.water_amount = 250
            console.log("water_amount", this.water_amount)

        },
        addBig() {
            this.water_amount = 375
            console.log("water_amount", this.water_amount)

        },
        addCustom(event) {
            if(event.target.value>0){
                this.water_amount = event.target.value
            }else{
                this.water_amount = 0
            }
            console.log("water_amount", this.water_amount)
        },
        onSelectedChange(event) {
            this.baverage = event.target.value
            // this.water_multiplier = event.target.value.multiplier
            console.log("baverage:",this.baverage)
        },
        async addDrink() {
            if(!(this.water_amount > 0)){
                alert("Wybierz lub podaj ilość wypitego napoju.")
            }else{
                console.log(this.baverage)
                var data = {}
                data[this.baverage] = this.water_amount

                const userEmail = this.$store.state.user.data.email
                const q = query(collection(db, "users"), where("email","==", userEmail));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    this.doc_id = doc.id
                })
                console.log("baverage:", "data:", data)
                const batch = writeBatch(db);
                console.log("działa")
                const docRef = doc(db, "users/"+this.doc_id+"/water_base/"+this.date+"/drinks/"+this.time)
                batch.set(docRef, data)
                await batch.commit();
                alert("Świetnie!")
                this.$router.replace({name: "home"});
            }
        }
    

    },
    data() {
        return {    
            beverages : [
                {"Name":"water","DisplayName":"Water","multiplier":1},
                {"Name":"appleJuice","DisplayName":"Apple Juice","multiplier":0.81},
                {"Name":"orangeJuice","DisplayName":"Orange Juice","multiplier":0.9},
                {"Name":"beer","DisplayName":"Beer","multiplier":0.49},
                {"Name":"coffee","DisplayName":"Coffee","multiplier":0.5},
                {"Name":"tee","DisplayName":"Tee","multiplier":0.6}
            ],
            date: '27.04.2022',
            time: '13:00',
            water_amount: 0,
            beverage:'',
            doc_id:'',
        }
    }

}
</script>

<style scoped>
html,body{
    width:100%;
    height:100%;
    margin:0;
}
.no{
    padding: 0px;
    margin: 0px;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.vertical-parent{
    position:relative
}

</style>