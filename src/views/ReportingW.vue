<template>
	<div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row no vertical-parent" style="flex:3; background-color:#dddddd;">
                <div class="no row vertical-center" >
                    <div class="no col-3">
a   
                    </div>
                    <div class="no col-6">
a
                    </div>
                    <div class="no col-3">
a
                    </div>
                </div>
                
            </div>
            <div class="no row" style="padding:0px;margin:0px; flex:8; background-color:grey;">
                    <div class="no col-4">
                        <img src="../assets/icons/ShotGlass0.png" class="img-fluid rounded float-left"  height=50% alt="aaa">
                    </div>
                    <div class="no col-4">
                        <img src="../assets/icons/ShotGlass1.png" class="img-fluid rounded float-left"   alt="aaa">
                    </div>
                    <div class="no col-4">
                        <img src="../assets/icons/ShotGlass.png" class="img-fluid rounded float-left"   alt="aaa">
                     </div>
                    <h2 class="no">Custom amount</h2>
                    <div class="no row">
                        
                        <div class="no col-6">
                            <input type="text" name="Custom" id="Custom">
                        </div>
                        
                    </div>
                    
            </div>
            <div class="row no vertical-parent" style="flex:4; background-color:#dddddd;">
                <div class="no vertical-center">
                    <h2 class="no">Gender</h2>
                    
                </div>
                
            </div>
            <div class="row no" style="flex:8; background-color:#dddddd;">
                <input type="text" id="myInput" placeholder="Search for names..">
<div style="relative">
<div style="overflow:auto;">
<table id="myTable" style="overflow:scroll">
  <tr class="header">
    <th style="width:60%;">Name</th>
    <th style="width:40%;">Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbkop</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Koniglich Essen</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Koniglich Essen</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Koniglich Essen</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Koniglich Essen</td>
    <td>Germany</td>
  </tr>
  
</table>
</div>
</div>

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
            <div class="row no vertical-parent" style="flex:4; background-color:#99dddd;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button class="align-middle" style="width:95%; height:100%; border-radius:8px">
                                test
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
        if(this.been == false){
            document.getElementById("myInput").addEventListener("keyup", function myFunction(){
                console.log("lol")
                // Declare variables
                var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");

                // Loop through all table rows, and hide those who don't match the search query
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[0];
                    if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                    }
                }
            })
        this.been = true
        }
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
            ],
            been : false
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