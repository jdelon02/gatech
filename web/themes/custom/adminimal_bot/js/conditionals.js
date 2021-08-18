(function ($, Drupal) {
    Drupal.behaviors.adminimalBOTConditionals = {
        attach: function (context, settings) {
            
            $('#edit-field-resource-type-37', context).change(function(e){    
                if ($(this).is(':checked')) {
                    $( "#edit-field-education-wrapper" ).show();
                } 
                else {
                    $( "#edit-field-education-wrapper" ).hide();
                }
            }).trigger('change');
            
            $('#edit-field-resource-type-40', context).change(function(e){    
                if ($(this).is(':checked')) {
                    $( "#edit-field-risk-management-wrapper" ).show();
                } 
                else {
                    $( "#edit-field-risk-management-wrapper" ).hide();
                }
            }).trigger('change');
            
            $('#edit-field-resource-type-41', context).change(function(e){
                if ($(this).is(':checked')) {
                    $( "#edit-field-board-development-wrapper" ).show();
                } 
                else {
                    $( "#edit-field-board-development-wrapper" ).hide();
                }
            }).trigger('change');
            
            $('#edit-field-resource-type-43', context).change(function(e){    
                if ($(this).is(':checked')) {
                    $( "#edit-field-collaborations-wrapper" ).show();
                } 
                else {
                    $( "#edit-field-collaborations-wrapper" ).hide();
                }
            }).trigger('change');
            
            $('#edit-field-resource-type-39', context).change(function(e){    
                if ($(this).is(':checked')) {
                    $( "#edit-field-compliance-wrapper" ).show();
                } 
                else {
                    $( "#edit-field-compliance-wrapper" ).hide();
                }
            }).trigger('change');
            $('#edit-field-resource-type-42', context).change(function(e){    
                if ($(this).is(':checked')) {
                    $( "#edit-field-organizational-development-wrapper" ).show();
                } 
                else {
                    $( "#edit-field-organizational-development-wrapper" ).hide();
                }
            }).trigger('change');
            $('#edit-field-resource-type-131', context).change(function(e){    
                if ($(this).is(':checked')) {
                    $( "#edit-field-diversity-inclusion-wrapper" ).show();
                } 
                else {
                    $( "#edit-field-diversity-inclusion-wrapper" ).hide();
                }
            }).trigger('change');

            
            
        }
    };
})(jQuery, Drupal);