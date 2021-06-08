{/* <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>



<script>
MathJax = {
  tex: {
    tags: 'ams',inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
</script>  */}


MathJax = {
  tex: {
    tags: 'ams',inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
