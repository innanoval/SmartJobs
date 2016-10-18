import Ember from 'ember';

/**
 * Toggle the chevron of the additional search button.
 * @param  {Object} buttonSpan The jQuery object containing the button span.
 */
function toggleChevron(buttonSpan) {
    if(buttonSpan.hasClass('glyphicon-chevron-down')) {
        Ember.$(".additional-options").hide();

       buttonSpan.removeClass("glyphicon-chevron-down")
                .addClass("glyphicon-chevron-right");
    } else {
        Ember.$(".additional-options").show();

        buttonSpan.removeClass("glyphicon-chevron-right")
                .addClass("glyphicon-chevron-down");
    }
}

export default Ember.Component.extend({
    actions: {
        toggleAdditionalOptions() {
            toggleChevron(Ember.$('button.toggle-additional span.additional'));
        }
    }
});
