



const observer = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    


    const section = entry.target.querySelector('.section');
    const line = entry.target.querySelector('hr');
    const content = entry.target.querySelector('.content-wrapper')


    
    if (entry.isIntersecting) {
      
      section.classList.add('section-animated');
      line.classList.add('hr-animated');
      content.classList.add('content-animated')
      return;
    }

    section.classList.remove('section-animated');
    line.classList.remove('hr-animated');
    content.classList.add('content-animated')

  });
});






document.querySelectorAll('.section-wrapper').forEach((i) => {
  if (i) {
    observer.observe(i);
  }

});


