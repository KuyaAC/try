document.addEventListener('DOMContentLoaded', function() {
    var showMoreButton = document.getElementById('show-more-button');
    var showLessButton = document.getElementById('show-less-button');
    var hiddenProducts = document.getElementById('hidden-products');
  
    showMoreButton.addEventListener('click', function() {
      hiddenProducts.style.display = 'flex';
      showMoreButton.style.display = 'none';
      showLessButton.style.display = 'block';
    });
  
    showLessButton.addEventListener('click', function() {
      hiddenProducts.style.display = 'none';
      showLessButton.style.display = 'none';
      showMoreButton.style.display = 'block';
    });
  
    showMoreButton.style.display = 'block';
    showLessButton.style.display = 'none';
    hiddenProducts.style.display = 'none';
  });

  document.addEventListener('DOMContentLoaded', function() {
    var showMoreReviewsButton = document.getElementById('more-rev-button');
    var showLessReviewsButton = document.getElementById('less-rev-button');
    var additionalReviews = document.getElementById('additional-reviews');
  
    showMoreReviewsButton.addEventListener('click', function() {
      additionalReviews.style.display = 'block';
      showMoreReviewsButton.style.display = 'none';
      showLessReviewsButton.style.display = 'block';
    });
  
    showLessReviewsButton.addEventListener('click', function() {
      additionalReviews.style.display = 'none';
      showLessReviewsButton.style.display = 'none';
      showMoreReviewsButton.style.display = 'block';
    });
  });
  