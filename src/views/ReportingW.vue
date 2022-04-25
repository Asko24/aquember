<template>
	<div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row no vertical-parent dark" style="flex:3; ">
                <div class="no row vertical-center" >
                    <div class="no col-3">
                        Today
                    </div>
                    <div class="no col-6">
                    </div>
                    <div class="no col-3">
                        13:00
                    </div>
                </div>
                
            </div>
            <div class="no row" style="padding:0px;margin:0px; flex:8;">
                    <div class="no col-4">
                        <img src="../assets/icons/ShotGlass0.png" class="img-fluid rounded float-left"  height=50% alt="aaa">
                        125ml
                    </div>
                    <div class="no col-4">
                        <img src="../assets/icons/ShotGlass1.png" class="img-fluid rounded float-left"   alt="aaa">
                    </div>
                    <div class="no col-4">
                        <img src="../assets/icons/ShotGlass.png" class="img-fluid rounded float-left"   alt="aaa">
                     </div>
                    <h2 class="no">Custom amount</h2>
                    <div class="no row">
                        
                        <div class="no col-12">
                            <input type="text" class="inputs" name="Custom" id="Custom" style="margin-bottom:16px;margin-top:0px;">
                        </div>
                        
                    </div>
                    
            </div>
            <div class="row no vertical-parent" style="flex:4;">
                <div class="no vertical-center">
                    <h2 class="no">Choose a beverage</h2>
                    <div class = "no col-12">
<input list="ice-cream-flavors" class="inputs" style="width:90%" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors" style="width:100%">
    <option value="Chocolate"> </option>
    <option value="Coconut"></option>
    <option value="Mint"></option>
    <option value="Strawberry"></option>
    <option value="Vanilla"></option>
</datalist>

                    </div>


                </div>
                
            </div>
            <div class="row no" style="flex:8;">

  <!-- <div id="div1" style="height: 500px;position:relative;">
    <div id="div2" style="max-height:100%;overflow:auto;border:1px solid red;">
      <div id="div3" style="height:1500px;border:5px solid yellow;">hello</div>
    </div>
  </div> -->

                <!-- <div class="no" >
                    <input type="search" list="mylist">
                    <datalist id="mylist">
                        <option value="Option 1"></option>
                        <option value="Option 2"></option>
                        <option value="Option 3"></option>
                    </datalist>
                </div> -->
                
            </div>
            <div class="row no vertical-parent" style="flex:4;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button class="align-middle buttons" style="width:100%; height:70%">
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