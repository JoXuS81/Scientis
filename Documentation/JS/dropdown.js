const screens1775 = window.matchMedia('(min-width:1775px)');


$(document).ready(function()
{
  if(screens1775.matches)
  {
    $(".dropdownLink").hover(function()
    {
      $(".dropdownMenu").show();
      $(".navbar").css("border-bottom-left-radius", "0px");
    });
    $(".dropdownArea").mouseleave(function()
    {
      $(".dropdownMenu").hide();
      $(".navbar").css("border-bottom-left-radius", "8px");
    });
  }
});