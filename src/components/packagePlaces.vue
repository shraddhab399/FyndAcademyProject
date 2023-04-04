<template>
    <div>
        <section class="home-packages">

            <h1 class="heading-title">visit & Explore </h1>
         
            <div class="box-container">
         
               <div class="box">
                  <div class="image">
                     <img src="hariarfort.jpg" alt="">
                  </div>
                  <div class="content">
                     <h3>Historical Places</h3>
                     <p>Harihar fort / Harshagad is a fort located 40 km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district, of Maharashtra,India.</p>
                     <a href="https://www.thrillophilia.com/historical-places-in-nashik" class="btn">Explore</a>
                  </div>
               </div>
         
               <div class="box">
                  <div class="image">
                     <img src="barbequee.jpg" alt="">
                  </div>
                  <div class="content">
                     <h3>Food</h3>
                     <p>Nashik city in the state of Maharashtra is a famous destination for Misal Pav.It has been one of the most highly consumed breakfast dish in many Misal.</p>
                     <a href="https://nashikblogger.com/top-10-must-visit-misal-pav-places-in-nashik/" class="btn">Explore</a>
                  </div>
               </div>
               
               <div class="box">
                  <div class="image">
                     <img src="trimbak.jpg" alt="">
                  </div>
                  <div class="content">
                     <h3>pilgrimages</h3>
                     <p>Trimbakeshwar Shiva Temple (श्री त्र्यंबकेश्वर ज्योतिर्लिंग मंदिर) is an ancient Hindu temple in the town of Trimbak,in India, 28 km from the city of Nashik and 40 km from Nashik road.</p>
                     <a href="https://nashik.gov.in/tourism/places-of-interest/" class="btn">Explore</a>
                  </div>
               </div>
         
            </div>
         
            <div class="load-more"> <a href="packagePlaces.vue" class="btn">load more</a> </div>
         
         </section>
         <section class="footer">
            <div class="credit"></div>
         </section>
    </div>
</template>
<script>

// let loadMoreBtn = document.querySelector('.packages .load-more .btn');
// let currentItem = 3;

// loadMoreBtn.onclick = () =>{
//    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
//    for (var i = currentItem; i < currentItem + 3; i++){
//       boxes[i].style.display = 'inline-block';
//    }
//    currentItem += 3;
//    if(currentItem >= boxes.length){
//       loadMoreBtn.style.display = 'none';
//    }
// }
</script>
<style>
.packages .box-container{
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
   gap: 2rem;
}

.packages .box-container .box{
   border:var(--border);
   box-shadow: var(--box-shadow);
   background: var(--white);
   display: none;
}

.packages .box-container .box:nth-child(1),
.packages .box-container .box:nth-child(2),
.packages .box-container .box:nth-child(3),
.packages .box-container .box:nth-child(4),
.packages .box-container .box:nth-child(5),
.packages .box-container .box:nth-child(6){
   display: inline-block;
}

.packages .box-container .box:hover .image img{
   transform: scale(1.1);
}

.packages .box-container .box .image{
   height: 25rem;
   overflow: hidden;
}

.packages .box-container .box .image img{
   height: 100%;
   width: 100%;
   object-fit: cover;
   transition: .2s linear;
}

.packages .box-container .box .content{
   padding:2rem;
   text-align: center;
}

.packages .box-container .box .content h3{
   font-size: 2.5rem;
   color:var(--black);
}

.packages .box-container .box .content p{
   font-size: 1.5rem;
   color:var(--light-black);
   line-height: 2;
   padding:1rem 0;
}

.packages .load-more{
   text-align: center;
   margin-top: 2rem;
}</style>