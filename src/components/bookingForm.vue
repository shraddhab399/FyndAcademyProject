<template>
    <div>
            <div class="container">
                <form id="form" action="/">
                    <h1>BOOKING</h1>
                    <div class="input-control">
                        <label for="Name">Name</label>
                        <input id="Name" name="Name" type="text">
                        <div class="error"></div>
                    </div>
                    <div class="input-control">
                        <label for="email">Email</label>
                        <input id="email" name="email" type="text">
                        <div class="error"></div>
                    </div>
                    <div class="input-control">
                        <label for="Phone">Phone</label>
                        <input id="Phone" name="Phone" type="number">
                        <div class="error"></div>
                    </div>
                    <div class="input-control">
                        <label for="Address">Address</label>
                        <input id="Address" name="Address" type="text">
                        <div class="error"></div>
                    </div>
                    <div class="input-control">
                        <label for="where to">where to</label>
                        <input id="where to" name="location" type="text">
                        <div class="error"></div>
                    </div>
                    <div class="input-control">
                        <label for="How many">How many</label>
                        <input id="How many" name="guest" type="number">
                        <div class="error"></div>
                    </div>
                    <div class="input-control">
                        <label for="arrivals">Arrivals</label>
                        <input id="arrivals" name="arrivals" type="date">
                        <div class="error"></div>
                    </div>
                    <div class="input-control">
                        <label for="leaving">leaving</label>
                        <input id="leaving" name="leaving" type="date">
                        <div class="error"></div>
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
             
             
             <!-- <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
             <script src="js/script.js"></script>
         -->
             
     
        
    </div>
</template>
<script>


</script>
<style>

   #form {
    background: linear-gradient(to right, #8a8d8e, #324c55, #2c5364);
    font-family: 'Poppins', sans-serif;
    width: 500px;
    margin: 20vh auto 0 auto;
    padding: 20px 50px;
    background-color: whitesmoke;
    border-radius: 4px;
    font-size: 12px;
   }
   
   #form h1 {
    color: white;
    text-align: center;
   }
   
   #form button {
    padding: 10px;
    margin-top: 10px;
    width:30%;
    color: white;
    background-color: rgb(41, 57, 194);
    border: none;
    border-radius: 4px;
     
    
   }
   
   .input-control {
    display: flex;
    flex-direction: column;
   }
   
   .input-control input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    font-size: 12px;
    padding: 10px;
    width: 100%;
    /* box-sizing:border-box; */
   }
   
   .input-control input:focus {
    outline: 0;
   }
   
   .input-control.success input {
    border-color: #09c372;
   
   }
   
   .input-control.error input {
    border-color: #ff3860;
   }
   
   .input-control .error {
    color: #ff3860;
    font-size: 9px;
    height: 13px;
   }
</style>