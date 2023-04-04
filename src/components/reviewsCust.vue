<template>
    <div>
        <section class="reviews">

            <h1 class="heading-title"> clients reviews </h1>
         
            <div class="swiper reviews-slider">
         
               <div class="swiper-wrapper">
         
                  <div class="swiper-slide slide">
                     <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                     </div>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus facilis laudantium magnam saepe magni ullam possimus laborum voluptas, veniam ipsum officiis quae doloribus minima ut quis. Molestiae qui distinctio possimus?</p>
                     <h3>john Reo</h3>
                     <span>traveler</span>
                     <img src="r1.jpg" alt="">
                  </div>
         
                  <div class="swiper-slide slide">
                     <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                     </div>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus et suscipit optio similique totam aut laborum ullam sequi! In!</p>
                     <h3>Alex Adom</h3>
                     <span>traveler</span>
                     <img src="r2.jpg" alt="">
                  </div>
         
                  <div class="swiper-slide slide">
                     <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                     </div>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim deserunt, ab at ea iste odio placeat doloribus eum dolores tempore obcaecati, dolore esse aperiam. Excepturi ad quo distinctio, dignissimos voluptate, dolores, saepe animi eum atque sint esse ab exercitationem!</p>
                     <h3>Danny Devito</h3>
                     <span>traveler</span>
                     <img src="r3.jpg" alt="">
                  </div>
                  
                  
         
               </div>
         
            </div>
         
         </section>
         <section class="footer">
            <div class="credit"></div>
         </section>
    </div>
</template>
<script>

// var swiper = new swiper(".reviews-slider", {
//    grabCursor:true,
//    loop:true,
//    autoHeight:true,
//    spaceBetween: 20,
//    breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       700: {
//         slidesPerView: 2,
//       },
//       1000: {
//         slidesPerView: 3,
//       },
//    },
// });
</script>
<style>
.reviews{
   background: var(--light-bg);
}
.reviews .slide{
   padding:2rem;
   border:var(--border);
   background: var(--white);
   text-align: center;
   box-shadow: var(--box-shadow);
   user-select: none;
}

.reviews .slide .stars{
   padding-bottom: .5rem;
}

.reviews .slide .stars i{
   font-size: 1.7rem;
   color:var(--main-color);
}

.reviews .slide p{
   font-size: 1.5rem;
   color:var(--light-black);
   line-height: 2;
   padding:1rem 0;
}

.reviews .slide h3{
   font-size: 2rem;
   color:var(--black);
}

.reviews .slide span{
   font-size: 1.5rem;
   color:var(--main-color);
   display: block;
}

.reviews .slide img{
   height: 7rem;
   width: 7rem;
   border-radius: 50%;
   margin-top: 1rem;
}
</style>