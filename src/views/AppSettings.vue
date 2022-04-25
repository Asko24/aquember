<template>
    <div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">

            <div class="row no vertical-parent dark" style="flex:8;">
                <div class="no vertical-center" >
                    <h2 class="no">Settings</h2>
                </div>
            </div>

            <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <h2>General Settings</h2>
                    <!-- <div class="no row">
                        <div class="no col-4 ">
                            <input type="checkbox" id="notifications" class="align-middle" style="width:95%; height:100%; border-radius:8px"/>
                        </div>
                        <div class="no col-4 ">
                            <label for="notifications" class="toggle-switchy">Notificatios</label>
                        </div>  
                    </div> -->
                    <div class="no row">
                        <div class="no col-4 ">
                            <label for="notifications" class="toggle-switchy" data-style="rounded">
                                <input checked type="checkbox" id="notifications">
                                <span class="toggle">
                                    <span class="switch"></span>
                                </span>
                            </label>
                        </div>

                        <div class="no col-4 ">
                            <p>Notifications</p>
                        </div>

                    </div> 

                    <div class="no row">
                        <div class="no col-4 ">
                            <label for="wibrations" class="toggle-switchy" data-style="rounded">
                                <input checked type="checkbox" id="wibrations">
                                <span class="toggle">
                                    <span class="switch"></span>
                                </span>
                            </label>
                        </div>

                        <div class="no col-4 ">
                            <p>Wibrations</p>
                        </div>
                          
                    </div> 

                    <div class="no row">
                        <div class="no col-4 ">
                            <label for="sound" class="toggle-switchy" data-style="rounded">
                                <input checked type="checkbox" id="sound">
                                <span class="toggle">
                                    <span class="switch"></span>
                                </span>
                            </label>
                        </div>

                        <div class="no col-4 ">
                            <p>Sound</p>
                        </div>
                          
                    </div> 

                </div>
            </div>

            <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <p>Notification hours</p>
                        <div class="no col-6 " style="margin-left: 3%">
                            <div id="slider">
                            </div>
                        </div>
                    </div>
                    <div class="no row">
                        <div class="no col-6 " style="margin-left: 5%; margin-top: 2%">
                            <div>
                                <div id="slider-range-value">test</div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <p>Custom Daily Amount</p>
                        <div class="no col-12 ">
                            <input type="text" class="inputs" value="2000 ml" style="margin-top:0px;margin-bottom:16px">
                        </div>  
                    </div>

                    <div class="no row">
                        <p>Custom Portion Amount</p>
                        <div class="no col-12" >
                            <div class="no col-12 ">
                                <input type="text"  class="inputs" value="250 ml" style="margin-top:0px;">
                            </div>  
                        </div>   
                    </div>
                </div>
            </div>

        <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button class="align-middle buttons" style="width:95%; height:70%;">
                                Reset to Default Data
                            </button>
                        </div>  
                    </div>
                    <div class="no row">
                        <div class="no col-12 ">
                            <button class="align-middle buttons" style="width:95%; height:70%">
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
export default {
    name: "top-header",
    mounted() {
        var slider = document.getElementById('slider');
        slider.innerHTML = ""

noUiSlider.create(slider, {
    start: [8, 20],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 24
    }
});

var rangeSliderValueElement = document.getElementById('slider-range-value');

slider.noUiSlider.on('update', function (values) {

    values[0] = parseInt(values[0])
    if (values[0] <= 12) {
        values[0] = values[0] + ' AM'
    }
    else {
        values[0] = values[0] - 12
        values[0] = values[0] + ' PM'
    }

    values[1] = parseInt(values[1])
        if (values[1] <= 12) {
        values[1] = values[1] + ' AM'
    }
    else {
        values[1] = values[1] - 12
        values[1] = values[1] + ' PM'
    }

    rangeSliderValueElement.innerHTML = values.join(' - ');
});



    },
    methods: {
        random() {
           console.log("coons2")
        }
    }
}
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
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