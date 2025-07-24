document.addEventListener("DOMContentLoaded", () => {

  "use strict";


  /**

   * Category Filter

   */


  const filterButtons = document.querySelectorAll('.buttons .filter-button');

  const articleCards = document.querySelectorAll('.archive-item');

  filterButtons.forEach(button => {

    button.addEventListener('click', () => {

      const selectedCategory = button.getAttribute('data-filter');

      articleCards.forEach(item => {

        const cardCategory = item.getAttribute('data-category');

selectedCategory === 'filter-all' || selectedCategory === cardCategory ? item.style.display = 'block' : item.style.display = 'none'


      });


    });


  });


});