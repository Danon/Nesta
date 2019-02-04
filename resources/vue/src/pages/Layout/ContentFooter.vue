<template>
   <footer class="footer">
      <div class="container">
         <nav>
            <ul>
               <li>
                  <router-link :to="{ path: '/dashboard' }">Dashboard</router-link>
               </li>
               <li>
                  <a href="http://nesta.pl/" target="_blank">
                     <translate>Company</translate>
                  </a>
               </li>
               <li>
                  <a href="http://nesta.pl/galeria/" target="_blank">
                     <translate>Gallery</translate>
                  </a>
               </li>
               <li>
                  <a href="http://nesta.pl/ofirmie/" target="_blank">
                     <translate>About</translate>
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   </footer>
</template>
