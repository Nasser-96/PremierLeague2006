const Body = document.querySelector("body")
//  const bigDiv = document.createElement("div")




fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2006&sort=asc')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
      for(i=0;i<json.data.standings.length;i++){
        var gitBigDiv = document.querySelector(".bigOne")
        const par = document.createElement("p");
        const midDiv = document.querySelector(".divGrid")
        const smDiv = document.createElement("div")
        const img = document.createElement("img")
        const btn = document.createElement("button")
        btn.innerHTML = "More Details"
        btn.id = i.toString()
        par.innerHTML = json.data.standings[i].team.name
        smDiv.id = i.toString();
        // bigDiv.append(smDiv);
        img.src = json.data.standings[i].team.logos[0].href;
        img.id=i.toString();  
        img.style = "width: 10rem; height: 10rem;"
        
        smDiv.style.display = "grid"
        smDiv.style.justifyContent="center"
        smDiv.style.alignItems = "center"
        par.style.display = "grid"
        // par.style.gridTemplateColumns="1fr"
        par.style.justifyContent = "center"
        par.style.alignItems = "center"
        img.style.display = "grid"
        img.style.justifyContent = "center"
        img.style.alignItems = "center"
        // smDiv.style.background = "url(back.png)";
        smDiv.style.backgroundSize = "300px 400px"
        smDiv.style.margin="10%"
        btn.style.transition = ".2s"
        smDiv.style.height = "18rem";
        smDiv.style.width = "18rem";
        btn.style.height = "2.5rem";
        btn.style.width = "10rem";
        btn.style.fontSize = "medium"
                // img.style.gridTemplateColumns="1fr"

        // btn.onmouseover= function(){
        //   btn.style.height = "3rem";
        //   btn.style.width = "12rem";
        // }
        // btn.onmouseout=function(){
        //   btn.style.height = "18rem";
        //   btn.style.width = "18rem";
        // }

        btn.onmouseover = function(){
          btn.style.height = "3rem";
          btn.style.width = "12rem";
          img.style.justifyContent = "center"
          img.style.alignItems = "center"
          btn.style.background = "#3498db"
        }
        btn.onmouseout = function(){
          btn.style.height = "2.5rem";
          btn.style.width = "10rem";
          img.style.justifyContent = "center"
          img.style.alignItems = "center"
          btn.style.background = "#2980b9"
        }

        smDiv.style.fontSize= "large"
        smDiv.style.fontFamily ="Times New Roman"
        btn.style.fontFamily = "Times New Roman"
        btn.style.boxShadow = "0px 6px 6px #121214;"
        btn.style.padding ="10px 20px 10px 20px"
        btn.style.borderRadius = "28px"
                
        par.style.color = "gray"
        img.style.justifyContent = "center"
        img.style.alignItems = "center"
        btn.style.background="#2980b9"
        btn.style.color = "white"

        smDiv.style.backgroundRepeat = "no-repeat"
        // smDiv.style.backgroundAttachment = "fixed"
        smDiv.style.backgroundPosition = "center"

        smDiv.append(img);
        smDiv.append(par)
        smDiv.append(btn)
         midDiv.append(smDiv)

        // ------------------------ Pop Up content ---------------------------------------
        // const closeMod = document.createElement("span")
        // const getBody = document.querySelector("body")
        const modal1 = document.createElement("div");        
        // const span = document.querySelector(".close");
        const parRank = document.createElement("p")
        const parDes = document.createElement("p")
        const parWins = document.createElement("p")
        const parLosses = document.createElement("p")
        const parDraws = document.createElement("p")
        const parGoalsFor = document.createElement("p")
        const parGoalsAgainst = document.createElement("p")
        const parGoalDiff = document.createElement("p")
        const parPoints = document.createElement("p")
        const parTotal = document.createElement("p")
        const closeMod = document.createElement("span")
        const divCont = document.createElement("div")
        const parName = document.createElement("p")
        const imgD = document.createElement("img")
        // const btnBiId = document.getElementById(i.toString())

        
        
        
        parName.innerHTML = json.data.standings[i].team.displayName;
          parName.className = "pInModel  name"
          parRank.innerHTML = "Team Rank: "+json.data.standings[i].stats[8].value;
          parRank.className = "pInModel"
          
          parWins.innerHTML = "Wins in this season: " + json.data.standings[i].stats[0].value;
          parWins.className = "pInModel"
          parLosses.innerHTML = "Losses in this season: " + json.data.standings[i].stats[1].value;
          parLosses.className = "pInModel"
          parDraws.innerHTML = "Draws in this season: " + json.data.standings[i].stats[2].value;
          parDraws.className = "pInModel"
          parGoalsFor.innerHTML = "Goals Scored this season: " + json.data.standings[i].stats[4].value;
          parGoalsFor.className = "pInModel"
          parGoalsAgainst.innerHTML = "Goals Scored Against this season: " + json.data.standings[i].stats[5].value;
          parGoalsAgainst.className = "pInModel"
          parGoalDiff.innerHTML = "Goal Difference for this season: " + json.data.standings[i].stats[9].value;
          parGoalDiff.className = "pInModel"
          parPoints.innerHTML = "Total points this season: " + json.data.standings[i].stats[6].value;
          parPoints.className = "pInModel"
          parTotal.innerHTML = "Overall: "+ json.data.standings[i].stats[12].summary;
          parTotal.className = "pInModel"
          // closeMod.style.alignItems = "left"
          imgD.src = json.data.standings[i].team.logos[0].href;
          imgD.style = "width: 20rem; height: 20rem;"
          // imgD.style.justifyContent = "right"
          // imgD.style.alignItems = "center"
          // imgD.style.textAlign ="right"
          imgD.style.float ="right"
        try{
          parDes.innerHTML = "Qualification: " + json.data.standings[i].note.description;
          parDes.className = "pInModel"
          // closeMod.innerHTML = "&times;"
          // closeMod.style.display = "grid"
          // closeMod.style.justifyContent = "right"
          
          // console.log(json.data.standings[i].note.description)
        } catch(e){
          // console.log("Hellllloooo");
        }
        
        modal1.id = "myModal"+i
        modal1.className = "modal "+i
        closeMod.className = "close"
        
        divCont.className = "modal-content"
        divCont.style.display = "grid"
        divCont.style.justifyContent ="center"
        divCont.style.alignItems = "center"
        closeMod.className = "close"

        
        parName.style.justifyContent = "center"
        parName.style.textAlign = "center"
        

        
        btn.onclick = function(){
          modal1.style.display = "grid";
          window.onclick = function(event) {
            if (event.target == modal1) {
              modal1.style.display = "none";
            }
          }
          
        }
        
        closeMod.onclick = function() {
          modal1.style.display = "none";
        }
        
        // modal1.append(closeMod)
        // const parRank = document.createElement("p")
        // const parDes = document.createElement("p")
        // const parWins = document.createElement("p")
        // const parLosses = document.createElement("p")
        // const parDraws = document.createElement("p")
        // const parGoalsFor = document.createElement("p")
        // const parGoalsAgainst = document.createElement("p")
        // const parGoalDiff = document.createElement("p")
        // const parPoints = document.createElement("p")
        // const parTotal = document.createElement("p")
        // const closeMod = document.createElement("span")
        // const divCont = document.createElement("div")
        divCont.append(imgD)
        divCont.append(parName)
        divCont.append(parRank)
        divCont.append(parDes)
        divCont.append(parWins)
        divCont.append(parLosses)
        divCont.append(parDraws)
        divCont.append(parGoalsFor)
        divCont.append(parGoalsAgainst)
        divCont.append(parGoalDiff)
        divCont.append(parPoints)
        divCont.append(parTotal)        
        modal1.append(divCont)
        gitBigDiv.append(modal1)
        
// console.log(json.data.standings[i].team.displayName);
       //------------------------------ pop Up for table ---------------------------------
        
      }
      Body.append(gitBigDiv)



       // ---------------------------search--------------------------------
      const getBtn = document.querySelector(".search")
      const txtSearch = document.querySelector(".txtSearch")
      // const getPar = document.querySelector("p")
      // console.log( getPar.value);
      // console.log( parName.value);
      getBtn.onclick=function(){
        for(j=0;j<json.data.standings.length;j++){

        if(txtSearch.value.toLowerCase() === json.data.standings[j].team.displayName.toLowerCase()){
          // try{
            const getDiv = document.getElementById("myModal"+j)

            // catch (e){
          
          // }
          // console.log(getDiv);
          getDiv.style.display = "grid";
        window.onclick = function(event) {
          if (event.target == getDiv) {
            getDiv.style.display = "none";
          }
        }
      }
       
      }
      }
//--------------------------------------------------------------------------
    // const par = document.createElement("p");
    //     const smDiv = document.createElement("div");
    //     const img = document.createElement("img")
    // par.innerHTML = json.standings.team.name
    // smDiv.append(img);
    //      smDiv.append(par)
    //       Body.append(smDiv)

    
    //  console.log(json.results[1].image);
  })
