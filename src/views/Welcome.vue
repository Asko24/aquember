<template>
    <div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row dark" style="padding:0px;margin:0px; flex:30">
                <div class="col-md-12" style="position:relative;">
                    <img src="../assets/icons/AppIcon.png"  class="align-middle vertical-center" style="height:80%;" alt="aaa">
                </div>
            </div>
            <div class="row no vertical-parent white" style="flex:25;">
                <div class="no vertical-center" >
                    <h2 class="no">Welcome to Hydration App</h2>
                    <p style="margin-top:16px;">Keep Calm and Stay Hydrated</p>
                    <p style="margin-top:16px;">3 users | 415 views</p>
                </div>
                
            </div>
            <div class="row no vertical-parent grey" style="flex:35;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <router-link to="/login">
                                <button class="align-middle buttons" style="width:95%; height:80%;" id="login-welcome">
                                    Login
                                </button>
                            </router-link>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-12 " >
                            <router-link to="/register">
                                <button class="align-middle buttons" style="width:95%; height:80%;" id="register-welcome">
                                    Register
                                </button>
                            </router-link>
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