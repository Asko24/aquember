    <template>
        <div class="main">
            <div class="row">
              <div class="col-sm-4">
                Please
              </div>
              <div class="col-sm-4">
                Drink
              </div>
              <div class="col-sm-4">
                Watur
              </div>
            </div>
          </div>
        <!-- <div class="hello">
          <p>{{ message }}</p>
        </div> -->
      </template>
      
      <script>
        export default {
          props: ['message']
        }
      </script>
      
      <style scoped>
        .main{
            max-width: 1000px;
            background-color: aquamarine;
            border-style: dotted;
            border-radius: 2px;
        }
        
        .col-sm-4{
            text-align: center;
        }
      </style>