(function(Models) {
    // User model
    // ------------------
    
    // User
    Models.UserModel = Backbone.Model.extend({
        
        type     : 'user',
        defaults : {
            username : 'anonymous',
            avatar   : '/images/undefined.png',
            status   : 'offline',
            messages : [],
        },
        
        initialize : function(options) {
        
        }
    });
    
    // User Collection
    Models.UserCollection = Backbone.Collection.extend({
        
        model : Models.UserModel,
        type  : 'user',
        url   : 'users',
        
        // Initialize
        initialize : function(options) {
        }
    });
})(Models)