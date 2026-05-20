let isloggedIn = true;
let isUserRole = "Editor";

if (isloggedIn) {

    if (isUserRole === "Admin") {
        console.log("Admin can do all the things. ");
    } else if (isUserRole === "Editor") {
        console.log("Editor can edit the content. ");
    } else if (isUserRole === "Viewer") {
        console.log("Viewer can only view the content. ");
    } else {
        console.log("Guest user has limited access. ");
    }

} else {
    console.log("you are not logged in");
}