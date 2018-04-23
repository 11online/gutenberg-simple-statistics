jQuery( document ).ready(function() {

  var countups = document.getElementsByClassName("simple-statistic-countup");

  jQuery.each(countups, function( index, el ) {
    var randomKey = jQuery(el).data("key")
    var newId = 'countup-'+randomKey+index
    //dynamically reset ids of all .gutenberg_statistic-countups
    jQuery(el).attr('id', newId)
    jQuery(el).html('0')

  })

  jQuery(function() {

    jQuery('.simple-statistic-countup').appear();
    jQuery(document).ready(function() {
      jQuery.force_appear()
    })

    jQuery(document.body).on('appear', '.simple-statistic-countup', function(e, $affected) {
      // this code is executed for each appeared element
      var value =  parseInt(jQuery(this).data("value"));
      var id = jQuery(this).attr('id')
      renderCountUp(value, id)
      jQuery(this).attr('class', 'simple-statistic-countup-counted')
    })
  });

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