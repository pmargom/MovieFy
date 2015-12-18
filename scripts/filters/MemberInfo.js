
angular.module("jeviteca").filter("MemberInfo", function(Properties) {

   return function getMemberInfo(memberName) {
      //debugger;
      var query = encodeURIComponent(memberName.toLowerCase());
      return Properties.urlSearchMembers + query;
   };

});