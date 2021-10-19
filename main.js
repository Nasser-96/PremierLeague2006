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
                
        par.style.color = "white"
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

      const getBtnT = document.querySelector(".tableS")
      getBtnT.onclick =function(){
        const createT = document.createElement("table")
        const addHeadTable = createT.insertRow(0)
        const cell1 = addHeadTable.insertCell(0)
        const cell2 = addHeadTable.insertCell(1)
        const cell3 = addHeadTable.insertCell(2)
        const cell4 = addHeadTable.insertCell(3)
        const cell5 = addHeadTable.insertCell(4)
        const cell6 = addHeadTable.insertCell(5)
        const cell7 = addHeadTable.insertCell(6)
        const cell8 = addHeadTable.insertCell(7)
        const cell9 = addHeadTable.insertCell(8)
        const cell10 = addHeadTable.insertCell(9)
        const size1 = window.matchMedia("(max-width: 567px)")
        const size2 = window.matchMedia("(max-width: 768px)")
        const size3 = window.matchMedia("(max-width: 1290px)")

        createT.className= "tableGrid"
        if(size1.matches || size2.matches ){
        // const cell1 = addHeadTable.insertCell(0)
        // const cell2 = addHeadTable.insertCell(1)
        // const cell10 = addHeadTable.insertCell(2)
        // const cell4 = addHeadTable.insertCell(3)
        cell1.innerHTML = "Rank"
        cell1.className = "row-content"
        cell2.innerHTML = "Team"
        cell2.className = "row-content"
        // cell3.innerHTML = "Q"
        // cell3.className = "row-content"
        const cell10 = addHeadTable.insertCell(9)
        cell10.innerHTML = "Points"
        cell10.className = "row-content"
          
        }
        else{
        addHeadTable.className = "row-content"

        cell1.innerHTML = "Rank"
        cell1.className = "row-content"
        cell2.innerHTML = "Team"
        cell2.className = "row-content"
        cell3.innerHTML = "Qualification"
        cell3.className = "row-content"
        cell4.innerHTML = "W"
        cell4.className = "row-content"
        cell5.innerHTML = "L"
        cell5.className = "row-content"
        cell6.innerHTML = "D"
        cell6.className = "row-content"
        cell7.innerHTML = "Goals For"
        cell7.className = "row-content"
        cell8.innerHTML = "Goals Against"
        cell8.className = "row-content"
        cell9.innerHTML = "Goal Diff"
        cell9.className = "row-content"
        cell10.innerHTML = "Points"
        cell10.className = "row-content"
      }
        // myModal
        const modalT = document.createElement("div");
        modalT.className = "modal"
        for(z=0;z<json.data.standings.length;z++){
                  
          // const span = document.querySelector(".close");
          // const parRankT = document.createElement("p")
          // const parDesT = document.createElement("p")
          // const imgQ =document.createElement("img")
          // const parWinsT = document.createElement("p")
          // const parLossesT = document.createElement("p")
          // const parDrawsT = document.createElement("p")
          // const parGoalsForT = document.createElement("p")
          // const parGoalsAgainstT = document.createElement("p")
          // const parGoalDiffT = document.createElement("p")
          // const parPointsT = document.createElement("p")
          // const parTotalT = document.createElement("p")
          // const closeModT = document.createElement("span")
          var divContT = document.createElement("div")
          const parNameT = document.createElement("p")
          const imgDT = document.createElement("img")
          divContT.className = "modal-content"
            parNameT.innerHTML = json.data.standings[z].team.displayName;
            // parRankT.innerHTML = json.data.standings[z].stats[8].value;
            // parRankT.className = "pInModel"
            // parNameT.className = "pInModel  name"
            // parWinsT.innerHTML = 
            // parWinsT.className = "pInModel"
            // parLossesT.innerHTML = json.data.standings[z].stats[1].value;
            // parLossesT.className = "pInModel"
            // parDrawsT.innerHTML = 
            // parDrawsT.className = "pInModel"
            // parGoalsForT.innerHTML = json.data.standings[z].stats[4].value;
            // parGoalsForT.className = "pInModel"
            // parGoalsAgainstT.innerHTML = json.data.standings[z].stats[5].value;
            // parGoalsAgainstT.className = "pInModel"
            // parGoalDiffT.innerHTML = json.data.standings[z].stats[9].value;
            // parGoalDiffT.className = "pInModel"
            // parPointsT.innerHTML = json.data.standings[z].stats[6].value;
            // parPointsT.className = "pInModel"
            // parTotalT.innerHTML = json.data.standings[z].stats[12].summary;
            // parTotalT.className = "pInModel"
            
          for(let o=0 ;o<json.data.standings.length;o++){
            if (json.data.standings[z].stats[8].value === o+1){
              // const divName = document.createElement("div")
              const addHeadTable = createT.insertRow(-1)
              const cell1 = addHeadTable.insertCell(0)
              const cell2 = addHeadTable.insertCell(1)
              const cell3 = addHeadTable.insertCell(2)
              const cell4 = addHeadTable.insertCell(3)
              const cell5 = addHeadTable.insertCell(4)
              const cell6 = addHeadTable.insertCell(5)
              const cell7 = addHeadTable.insertCell(6)
              const cell8 = addHeadTable.insertCell(7)
              const cell9 = addHeadTable.insertCell(8)
              const cell10 = addHeadTable.insertCell(9)
              cell1.innerHTML = z+1
              cell1.className = "row-content"
              imgDT.src =  json.data.standings[z].team.logos[0].href
              imgDT.className = "imageT"
              // divName.append(imgDT)
              // divName.append(parNameT)
              // parNameT.className="name3"
              
              const size1 = window.matchMedia("(max-width: 567px)")
              const size2 = window.matchMedia("(max-width: 768px)")
              const size3 = window.matchMedia("(max-width: 1290px)")
              if (size1.matches || size2.matches){
                cell2.append(imgDT)
                cell2.append(parNameT) 
                
              //   try{
              //     // if(json.data.standings[i].note.description.toString() === "Champions League qualifying"){
              //   cell2.className = "row-content name2"
              //   cell3.innerHTML = json.data.standings[z].note.description
              
              // }catch(e){
  
              // }
                cell3.className = "row-content"
                // cell4.innerHTML = json.data.standings[z].stats[0].value;
                // cell4.className = "row-content"
                // cell5.innerHTML = json.data.standings[z].stats[1].value;
                // cell5.className = "row-content"
                // cell6.innerHTML = json.data.standings[z].stats[2].value;
                // cell6.className = "row-content"
                // cell7.innerHTML = json.data.standings[z].stats[4].value;
                // cell7.className = "row-content"
                // cell8.innerHTML =  json.data.standings[z].stats[5].value;
                // cell8.className = "row-content"
                // cell9.innerHTML = json.data.standings[z].stats[9].value;
                // cell9.className = "row-content"
                cell10.innerHTML = json.data.standings[z].stats[6].value;
                cell10.className = "row-content"
                modalT.style.display = "grid";
                window.onclick = function(event) {
                  if (event.target == modalT) {
                    modalT.style.display = "none";
                  }
                }
              }
              else{
                cell2.append(imgDT)
              cell2.append(parNameT) 
              
              try{
                // if(json.data.standings[i].note.description.toString() === "Champions League qualifying"){
              cell2.className = "row-content name2"
              cell3.innerHTML = json.data.standings[z].note.description
            
            }catch(e){

            }
              cell3.className = "row-content"
              cell4.innerHTML = json.data.standings[z].stats[0].value;
              cell4.className = "row-content"
              cell5.innerHTML = json.data.standings[z].stats[1].value;
              cell5.className = "row-content"
              cell6.innerHTML = json.data.standings[z].stats[2].value;
              cell6.className = "row-content"
              cell7.innerHTML = json.data.standings[z].stats[4].value;
              cell7.className = "row-content"
              cell8.innerHTML =  json.data.standings[z].stats[5].value;
              cell8.className = "row-content"
              cell9.innerHTML = json.data.standings[z].stats[9].value;
              cell9.className = "row-content"
              cell10.innerHTML = json.data.standings[z].stats[6].value;
              cell10.className = "row-content"
              modalT.style.display = "grid";
              window.onclick = function(event) {
                if (event.target == modalT) {
                  modalT.style.display = "none";
                }
              }
            }
          }
              
              

              }
            
        }
        divContT.append(createT)        
        modalT.append(divContT)
        gitBigDiv.append(modalT)
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
