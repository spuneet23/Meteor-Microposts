Meteor.subscribe("posts");

Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");


Meteor.startup(function () {
    AccountsEntry.config({

      homeRoute: '/',                            
      dashboardRoute: '/',         
      passwordSignupFields:'USERNAME_AND_EMAIL'
      
    });

    Accounts.ui.config({
      passwordSignupFields:'USERNAME_AND_EMAIL'
    });
  });


Template.registerHelper('getProfileImg', function(userId){
   var ImgUrl = UserImages.findOne({userId:userId}).image;
   return ImgUrl;
});