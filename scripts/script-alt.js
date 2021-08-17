const options = {
    
    threshold: [0,1]
  }
  
  
  function callback (entries, observer) {

    
    
    
    entries.forEach(entry => {
        const section = entry.target.querySelector('.section');
        const line = entry.target.querySelector('hr');
        const content = entry.target.querySelector('.content-wrapper')
        let ratio = entry.intersectionRatio;


    
        if (ratio >= 1) {
          
          section.classList.add('section-animated');
          line.classList.add('hr-animated');
          content.classList.add('content-animated')
          return;
        } else if (ratio == 0) {
            section.classList.remove('section-animated');
            line.classList.remove('hr-animated');
            content.classList.remove('content-animated')

        }
    
        
    });
  }
  

  let observer = new IntersectionObserver(callback, options);


  document.querySelectorAll('.section-wrapper').forEach((i) => {
    if (i) {
      observer.observe(i);
    }
  
  });


  