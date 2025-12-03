function getUserDetails(id,getUserSubjects){
    console.log("getting user detailsby userId", id);
    getUserSubjects({userroll: "1285"})
};
function getUserSubjects(userRoll, getUserMarks){
    console.log("getting user subjects by roll number", userRoll);
    getUserMarks({subid: "en-1"})
}
function getUserMarks(userSubId){
    console.log("getting user marks with subid", userSubId)
}
getUserDetails("123", function(userRoll){
    getUserSubjects(userRoll, function(userSubId){
        getUserMarks(userSubId)
    })
});