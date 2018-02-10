$("document").ready( function() {
  $("#form-search-bar").on("submit", function() {
    $("#form-search-bar").attr("action", $("#search-engine-choice option:selected").attr("value"));
    $("#input-search-bar").attr("name", $("#search-engine-choice option:selected").attr("name"));
  });
});

/* Lessons in Crafting searchbar.js
 *
 * 1) Remember that event handlers should be bound within the $("document").ready() handler - this ensures that DOM is properly initialized
 *
 */
