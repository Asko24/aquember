<template>
	<div class="navbar top" style="flex:2">
	    <img src="../assets/icons/ShotGlass0.png" class="img-fluid rounded float-left" width="33%"  alt="aaa">
	    <img src="../assets/icons/ShotGlass1.png" class="img-fluid rounded float-left" width="33%"  alt="aaa">
        <img src="../assets/icons/ShotGlass.png" class="img-fluid rounded float-left" width="33%"  alt="aaa">
	</div>
    <div class="navbar top" style="flex:2">
        <p>125ml</p>
        <p>250ml</p>
        <p>500ml</p>
	</div>

	<div class=" row align-items-center justify-content-center" style="flex:5">
		<div class="row">
            <input type="text">
		</div>
	</div>

    <div class="input-group">
    <div class="form-outline">
        <input type="search" id="form1" class="form-control" />
        <label class="form-label" for="form1">Search</label>
    </div>
    <button type="button" class="btn btn-primary">
        <i class="fas fa-search"></i>
    </button>
    
    </div>

    <!-- <select name="beverages" id="beverages">
      <option value="water">Water</option>
      <option value="juice">Juice</option>
      <option value="soda">Soda</option>
      <option value="beer">Beer</option>
    </select>  -->
<div id="moj">
        <input list="ice-cream-flavors" id="xd" name="whatever-list" />
        <datalist id="ice-cream-flavors" class="dropdown-menu" >
            <option  v-for='b in beverages' :key="b" :value="b.DisplayName"> {{b.DisplayName}} </option>
        </datalist>
        
    </div>
	<div class="navbar bottom" style="flex:2">
        <div class="row">
            <input type="text">
		</div>
	</div>  
</template>

<script>

let beverages = [
        {"Name":"water","DisplayName":"Water","multiplier":1},
        {"Name":"appleJuice","DisplayName":"Apple Juice","multiplier":0.81},
        {"Name":"orangeJuice","DisplayName":"Orange Juice","multiplier":0.9},
        {"Name":"beer","DisplayName":"Beer","multiplier":0.49},
        
    ]
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });


console.log("dupa")
// function inputs() {
//   this.$nextTick(function () {
    
//   })
// }
export default {
    name: "top-header",
    mounted() {
        this.random();
    },
    methods: {
        random() {
           console.log("coons")
           console.log(this.beverages)

        }
    },
    data() {
        return {    
            beverages : [
                {"Name":"water","DisplayName":"Water","multiplier":1},
                {"Name":"appleJuice","DisplayName":"Apple Juice","multiplier":0.81},
                {"Name":"orangeJuice","DisplayName":"Orange Juice","multiplier":0.9},
                {"Name":"beer","DisplayName":"Beer","multiplier":0.49},
                {"Name":"water","DisplayName":"Water","multiplier":1},
                {"Name":"appleJuice","DisplayName":"Apple Juice","multiplier":0.81},
                {"Name":"orangeJuice","DisplayName":"Orange Juice","multiplier":0.9},
                {"Name":"beer","DisplayName":"Beer","multiplier":0.49},
                {"Name":"water","DisplayName":"Water","multiplier":1},
                {"Name":"appleJuice","DisplayName":"Apple Juice","multiplier":0.81},
                {"Name":"orangeJuice","DisplayName":"Orange Juice","multiplier":0.9},
                {"Name":"beer","DisplayName":"Beer","multiplier":0.49}
            ]
        }
    }

}
</script>

<style>

</style>