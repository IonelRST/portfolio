const handleClickScroll = () => {
    const element = document.getElementById('footer-form');

    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  export default handleClickScroll;