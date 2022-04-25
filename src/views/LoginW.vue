<template>
    <div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row no vertical-parent dark" style="flex:8;">
                <div class="no vertical-center" >
                    <h2 class="no">Login to your app</h2>
                    
                </div>
                
            </div>
            <div class="no row vertical-parent white" style="padding:0px;margin:0px; flex:16; ">
                <div class="no vertical-center " > 
                <div class="col-md-12" style=" position:relative;">
                    <div class="email">
                        <input type="email" class="inputs" v-model="email" placeholder="login">
                    </div>
                    <div class="password" >
                        <input type="password" class="inputs" v-model="password" placeholder="password">
                    </div>
                </div>
                </div>
            </div>
            
            <div class="row no vertical-parent" style="flex:24;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button class="align-middle buttons" style="width:95%; height:70%;">
                                Login
                            </button>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-12 " >
                            <button class="align-middle buttons " style="width:95%; height:70%;">
                                Register
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row no vertical-parent" style="flex:4;">
                <div class="no vertical-center" >
                    <p class="no">OR</p>
                    
                </div>
                
            </div>
            <div class="row no vertical-parent" style="flex:28;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button class="align-middle buttons" style="width:95%; height:70%; margin-top:8px; margin-bottom:8px;">
                                LOGIN WITH FACEBOOK
                            </button>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-12 " >
                            <button class="align-middle buttons" style="width:95%; height:70%; margin-top:8px; margin-bottom:8px;">
                                LOGIN WITH TWITTER
                            </button>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-12 " >
                            <button class="align-middle buttons" style="width:95%; height:70%; margin-top:8px; margin-bottom:8px;">
                                LOGIN WITH GOOGLE
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