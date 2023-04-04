<template>
    <div>
      <img style="width: 100%; height:650px" src="homeslide-1.jpg" alt="">
      <div>
        <center>
         <div class="content" style="margin-top: -600px; padding-top:100px; color:aliceblue; ">
            <span style="font-size: 20px">explore, discover, travel</span>
            <h3 style="font-size: 60px;">travel arround the world</h3>
            <a href="package.html" class="btn">Discover more</a>
         </div>
        </center>
      </div>
        
         <section class="footer" style="margin-top: 300px;">
            <div class="credit"></div>
         </section>
         
    </div>
</template>

<script>

</script>
<style>

.home{
   padding:0;
}


.home-about{
   display: flex;
   align-items: center;
   flex-wrap: wrap;

   
   
} 

.home-about .image{
   flex:1 1 41rem;
}

.home-about .image img{
   width: 100%;
} 

.home-about .content{
   flex:1 1 41rem;
   padding:3rem;
   background: var(--light-bg);
} 

 .home-about .content h3{
   font-size: 3rem;
   color:var(--black);
} 

 .home-about .content p{
   font-size: 1.5rem;
   padding:1rem 0;
   line-height: 2;
   color:var(--black);
} 

.home-packages{
   background: var(--light-bg);
}

.home-packages .box-container{
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
   gap: 2rem;
}

.home-packages .box-container .box{
   border:var(--border);
   box-shadow: var(--box-shadow);
   background: var(--white);
}

.home-packages .box-container .box:hover .image img{
   transform: scale(1.1);
}

.home-packages .box-container .box .image{
   height: 25rem;
   overflow: hidden;
}

.home-packages .box-container .box .image img{
   height: 100%;
   width: 100%;
   object-fit: cover;
   transition: .2s linear;
}

.home-packages .box-container .box .content{
   padding:2rem;
   text-align: center;
}

.home-packages .box-container .box .content h3{
   font-size: 2.5rem;
   color:var(--black);
}

.home-packages .box-container .box .content p{
   font-size: 1.5rem;
   color:var(--light-black);
   line-height: 2;
   padding:1rem 0;
}

.home-packages .load-more{
   text-align: center;
   margin-top: 2rem;
}

.home-offer{
   text-align: center;
}

.home-offer .content{
   max-width:70rem;
   margin:0 auto;
}

.home-offer .content h3{
   font-size: 3.5rem;
   text-transform: uppercase;
   color:var(--black);
}

.home-offer .content p{
   font-size: 1.5rem;
   color:var(--light-black);
   line-height: 2;
   padding:1rem 0;
}
</style>