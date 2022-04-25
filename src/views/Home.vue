<template>
<div id="Dashboard" class="container-fluid w-100 vh-100">
<div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
    <div class="no navbar top" style="flex:2">
    <img src="../assets/icons/exit.png" width="25%"  alt="aaa">
    <img src="../assets/icons/Personal2.png" width="25%" alt="aaa">
    </div>

    <div class="no row align-items-center justify-content-center" style="flex:5">
        <div class="no row">
            <img src="../assets/icons/ShotGlass.png" class="mx-auto d-block" style="width: 55%;" alt="aaa">
        </div>
    </div>

    <div class="no row align-items-center justify-content-center" style="flex:5">
        <div class="no row" style="position: relative">
            <img src="../assets/icons/WaterDropEmpty.png" class="mx-auto d-block" alt="aaa">
            <div style="position: absolute; bottom:15%; left:33%">200 ml</div>
            <!-- to będzie sie zmieniać od 15% - 70% co nam da 100/60=0.6% -->
            <div style="position: absolute; bottom:75%; left:33%">2000 ml</div>
        </div>
    </div>

    <div class="no navbar bottom" style="flex:2">
        <img src="../assets/icons/Cog4.png" width="33%" alt="aaa">
        <img src="../assets/icons/home.png" width="33%" alt="aaa">
        <img src="../assets/icons/Calendar.png" width="33%" alt="aaa">
    </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
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