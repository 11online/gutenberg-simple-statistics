jQuery( document ).ready(function() {
  // set up our appear listeners
  jQuery('.simple-statistic-countup').appear();
  // if the element is already in the view, trigger the appear event
  jQuery(document).ready(function() {
    jQuery.force_appear();
  });

  jQuery(document.body).on('appear', '.simple-statistic-countup', function() {
    // this code is executed for each appeared element
    var value =  parseInt(jQuery(this).data("value"));
    var id = jQuery(this).attr('id');
    renderCountUp(value, id);
    // change the class so the animation only happens once
    jQuery(this).attr('class', 'simple-statistic-countup-counted')
  })


  function renderCountUp(value, id) {
    var countUpOptions = {
        useEasing: true,
        useGrouping: true,
    }

    var countUp = new CountUp( id, 0, value, 0, 2.5, countUpOptions);

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
})