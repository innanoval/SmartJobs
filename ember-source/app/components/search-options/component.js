import Ember from 'ember';

/**
 * Toggle the chevron of the additional search button.
 * @param  {Object} buttonSpan The jQuery object containing the button span.
 */
function toggleChevron(buttonSpan) {
    if(buttonSpan.hasClass('glyphicon-chevron-down')) {
       buttonSpan.removeClass("glyphicon-chevron-down")
                .addClass("glyphicon-chevron-right");
    } else {
        buttonSpan.removeClass("glyphicon-chevron-right")
                .addClass("glyphicon-chevron-down");
    }
}

export default Ember.Component.extend({
    collapsed: true,

    actions: {
        toggleAdditionalOptions() {
            toggleChevron(Ember.$('button.toggle-additional span.additional'));
            this.set("collapsed", !this.collapsed);
        }
    }
});
