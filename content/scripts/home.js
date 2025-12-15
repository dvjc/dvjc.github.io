// on ready stuff
$(document).ready(function () {
    home.AddHeaderNav();

    // TODO - fix footer detection
    //        right now it adds a footer no matter what
    //        should detect the footer and, if it does not exist, add it
    home.AddFooter();
});
var home = {
  AddHeaderNav : function(){
    // target the body element
    // todo - populate this with things i want publically available/visible
    var body = $("body")

    // sanity check
    if( !body ){

      // insert, as first child, a nav element
      $("body").prepend("<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">");

      var nav = $("nav");
      
      // sanity check
      if( nav ) {

        // add an anchor tag to the nav element
        $("nav").append("<a class=\"navbar-brand\" href=\"index.html\">Home</a>");

        // second nav element child: div
        $("nav").append("<div class=\"collapse navbar-collapse\" id=\"navbarMine\">");

        var navbar = $("#navbarMine");

        // sanity check
        if( navbar ){

          // first child of div: ul
          $("#navbarMine").append("<ul id=\"navbarList\" class=\"navbar-nav mr-auto\">");

          var navbarlist = $("#navbarList");

          // sanity check
          if( navbarlist ){

            // first child of ul: li
            $("#navbarList").append("<li id=\"navbarlistItem\" class=\"nav-item dropdown\">");

            var navbarlistItem = $("#navbarlistItem");

            // sanity check
            if( navbarlistItem ){

              // first child of li: a
              $("#navbarlistItem").append("<a class=\"nav-link dropdown-toggle\" id=\"dropdownProject\" aria-expanded=\"false\" aria-haspopup=\"true\" data-toggle=\"dropdown\" href=\"#\">Projects</a>");

              // second child of li: div-2
              $("#navbarlistItem").append("<div id=\"navbarlistitemSelectors\" class=\"dropdown-menu\" aria-labelledby=\"dropdownProject\">");

              var navbarlistitemSelectors = $("#navbarlistitemSelectors");

              // sanity check
              if( navbarlistitemSelectors ){

                // 1st child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"fhol.html\">FHOL</a>");

                // 2nd child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"fars2.html\">FARS2</a>");

                // 3nd child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"shipshape.html\">ShipShape</a>");

                // 3nd child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"cnrf.html\">CNRF</a>");

                // 4th child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"#\">IA</a>");

                // 5th child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"#\">Cert</a>");

                // 6th child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"hobbies.html\">Hobbies</a>");

                // 7th child of div-2
                $("#navbarlistitemSelectors").append("<a class=\"dropdown-item\" href=\"git.html\">Git</a>");
              }
            }
          }
        }        
      }
    }
  }

  , AddFooter : function(){
    // target the body element
    // todo - either remove or put it in a cleaner location
    var body = $("body")

    // sanity check
    if( !body ){

      // ensure there is a footer
      if( document.getElementsByName( "footer" ).length == 0 ){
        $("body").append("<footer class=\"container\">");
      }

      // ensure the footer has the container class
      if( $("footer") && !$("footer").hasClass("container") ){
        $("footer").addClass("container");
      }

      // ensure footer has desired content
      if( $("footer").children().length==0 ){
        $("footer").append("<p>footer -> Words <- retoof</p>");
      }
    }
  }
};