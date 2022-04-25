<template>
    <div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row no vertical-parent dark" style="flex:2;">
                <div class="no vertical-center" >
                    <h2 class="no">Account Settings</h2>
                </div>
            </div>

            <div class="no row vertical-parent white" style="padding:0px;margin:0px; flex:8;">
                <div class="no vertical-center "> 
                <div class="col-md-12" style=" position:relative;">
                    <h2 class="no">Change Password</h2>
                    <div class="password">
                        <input type="password" class="inputs" v-model="new_password" placeholder="new password">
                    </div>
                </div>
                </div>
            </div>

            <div class="row no vertical-parent" style="flex:4;">
                <div class="no vertical-center" >
                    <h2 class="no">Change Gender</h2>
                    
                </div>
                
            </div>
            <div class="row no" style="flex:8;">
                <div class="no" >
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" name="gender" value="Male" id="Male">
                        </div>
                        <div class="no col-1">
                            <label for="Male">Male</label>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" name="gender" value="Female" id="Female">
                        </div>
                        <div class="no col-1">
                            <label for="Female">Female</label>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" name="gender" value="Other" id="Other">
                        </div>
                        <div class="no col-1">
                            <label for="Other">Other</label>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" name="gender" value="Unspecified" id="Unspecified">
                        </div>
                        <div class="no col-1">
                            <label for="Unspecified">Unspecified</label>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div class="row no vertical-parent" style="flex:8;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button class="align-middle buttons" style="width:95%; height:70%;">
                                Apply Changes
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
            
        </div>
            
            
    </div>
    
  
</template>

<script>

   
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