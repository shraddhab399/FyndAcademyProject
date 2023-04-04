<template>
    <div>
        <section class="home-about">

            <div class="image">
               <img src="homeabout.jpg" alt="">
            </div>
         
            <div class="content">
               <h3>About Nashik</h3>
               <p>The District has great mythological background. Lord Rama lived in Panchvati during his vanvas. Agasti Rushi also stayed in Nashik for Tapasya. The Godavari river originates from Trimbakeshwar in Nashik. One of the 12 Jyotirlingas also at Trimbakeshwar. Nashik has to its credit many well known and towering personalities like Veer Sawarkar, Anant Kanhere , Rev. Tilak, Dadasaheb Potnis, Babubhai Rathi, V.V. Shirwadkar and Vasant Kanetkar just name few. Nashik is also known as Mini Maharashtra, because the climate and soil conditions of Surgana, Peth, Igatpuri resembles with Konkan. Niphad, Sinnar, Dindori, Baglan blocks are like Western Maharashtra and yeola, Nandgaon, Chandwad blocks are like Vidarbha Region. Nashik, Malegaon, Manmad, Igatpuri are some of the big cities situated in the Nashik District.</p>
               <a href="aboutPage.vue" class="btn">read more</a>
            </div>
            
         </section>
         <section class="footer">
            <div class="credit"></div>
         </section>
      
    
         
    </div>
</template>
<script>
</script>
<style>
.about{
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap:3rem;
}

.about .image{
   flex:1 1 41rem;
}

.about .image img{
   width: 100%;
}

.about .content{
   flex:1 1 41rem;
   text-align: center;
}

.about .content h3{
   font-size: 3rem;
   color:var(--black);
}

.about .content p{
   font-size: 1.5rem;
   color:var(--light-black);
   line-height: 2;
   padding:1rem 0;
}

.about .content .icons-container{
   margin-top: 2rem;
   display:flex;
   flex-wrap: wrap;
   gap:1.5rem;
   align-items: flex-end;
}

.about .content .icons-container .icons{
   background: var(--light-bg);
   padding:2rem;
   flex:1 1 16rem;
}

.about .content .icons-container .icons i{
   font-size: 4rem;
   margin-bottom: 2rem;
   color:var(--main-color);
}

.about .content .icons-container .icons span{
   font-size: 1.5rem;
   color:var(--light-black);
   display:block;
}
</style>