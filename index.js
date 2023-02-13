//code for use to get JS to show up on website

//declare global varibales
let currentLeague;
let leagueList = document.querySelector("#individual-leagues");
let leagueImage = document.querySelector("#league-logo");
let leagueName = document.querySelector("#league-name");
let leagueCountry = document.querySelector("#league-country");
let leagueStandings = document.querySelector("#league-standings");

fetch("http://localhost:3000/leagues")
.then(response => response.json())
.then(leagueData => {
    console.log(leagueData);

    //Our wishlist for the code
    addLeagues(leagueData)
    setLeague(leagueData[0])
})
function addLeagues(leagueData) {
    leagueData.forEach(league => {
        let leagueItem = document.createElement("li");
        leagueItem.textContent = league.name;
        
        leagueList.appendChild(leagueItem);

        leagueItem.addEventListener("click", () => {
            setLeague(league)
            


        })
//adding a mouseover event to change from home to away colors for the logo
    });
}
function setLeague(nextLeague) {
 currentLeague = nextLeague;

 leagueName.textContent = nextLeague.name;
 leagueCountry.textContent = nextLeague.country;
 leagueImage.src = nextLeague.leagueLogo;
leagueStandings.textContent = nextLeague.teamStandings;
 
}
function getLeagueStandings() {

}
