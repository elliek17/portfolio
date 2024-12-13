var clicks = 0

function checkNav(){
    clicks = clicks+1;
    if (clicks%2 == 1){
        document.getElementById("navBar").style.display="block";
        document.getElementById("bars").style.color="#FFFFFF";
        document.getElementById("navBtn").style.backgroundColor="#A07353";
        console.log("Show");
    }
    else{
        document.getElementById("navBar").style.display="none";
        document.getElementById("bars").style.color="#000000";
        document.getElementById("navBtn").style.backgroundColor="#EDD4BF";
        console.log("Hide");
    }
    return clicks;
}
