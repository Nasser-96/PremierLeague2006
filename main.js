const Body = document.querySelector("body")




fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2006&sort=asc')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
      for(i=0;i<json.data.standings.length;i++){
// git picture and name of the team and display it with button for each one


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
        img.src = json.data.standings[i].team.logos[0].href;
        img.id=i.toString();  
        img.style = "width: 10rem; height: 10rem;"
        
        smDiv.style.display = "grid"
        smDiv.style.justifyContent="center"
        smDiv.style.alignItems = "center"
        par.style.display = "grid"
        par.style.justifyContent = "center"
        par.style.alignItems = "center"
        img.style.display = "grid"
        img.style.justifyContent = "center"
        img.style.alignItems = "center"
        smDiv.style.backgroundSize = "300px 400px"
        smDiv.style.margin="10%"
        btn.style.transition = ".2s"
        smDiv.style.height = "18rem";
        smDiv.style.width = "18rem";
        btn.style.height = "2.5rem";
        btn.style.width = "10rem";
        btn.style.fontSize = "medium"
    

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
        par.style.fontSize = "1.5rem"
        par.style.fontWeight ="bold"
        img.style.justifyContent = "center"
        img.style.alignItems = "center"
        btn.style.background="#2980b9"
        btn.style.color = "white"
        

        smDiv.style.backgroundRepeat = "no-repeat"
        smDiv.style.backgroundPosition = "center"

        smDiv.append(img);
        smDiv.append(par)
        smDiv.append(btn)
         midDiv.append(smDiv)

         // git picture and name of the team and display it with button for each one END



        // ------------------------ Pop Up content for each team states ---------------------------------------
        
        const modal1 = document.createElement("div");        
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
        const divCont = document.createElement("div")
        const parName = document.createElement("p")
        const imgD = document.createElement("img")
        
        
        
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
          imgD.src = json.data.standings[i].team.logos[0].href;
          imgD.style = "width: 20rem; height: 20rem;"
          imgD.style.float ="right"
        try{
          parDes.innerHTML = "Qualification: " + json.data.standings[i].note.description;
          parDes.className = "pInModel"
          
          
          
        } catch(e){
          
        }
        
        modal1.id = "myModal"+i
        modal1.className = "modal "+i
        
        
        divCont.className = "modal-content"
        divCont.style.display = "grid"
        divCont.style.justifyContent ="center"
        divCont.style.alignItems = "center"
        

        
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
        // ------------------------ Pop Up content for each team states END ---------------------------------------


       
      }
      Body.append(gitBigDiv)


      //------------------------------ pop Up for table ---------------------------------

      //---------------table Head-----------------------
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
        cell1.innerHTML = "Rank"
        cell1.className = "row-content"
        cell2.innerHTML = "Team"
        cell2.className = "row-content"
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
      //---------------table Head END-----------------------



      //--------------table content---------------------
        // myModal
        const modalT = document.createElement("div");
        modalT.className = "modal"
        for(z=0;z<json.data.standings.length;z++){
                  
          
          var divContT = document.createElement("div")
          const parNameT = document.createElement("p")
          const imgDT = document.createElement("img")
            divContT.className = "modal-content"
            parNameT.innerHTML = json.data.standings[z].team.displayName;
        
            
          for(let o=0 ;o<json.data.standings.length;o++){
            if (json.data.standings[z].stats[8].value === o+1){
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
            
              
              const size1 = window.matchMedia("(max-width: 567px)")
              const size2 = window.matchMedia("(max-width: 768px)")
              if (size1.matches || size2.matches){
                cell2.append(imgDT)
                cell2.append(parNameT) 
                
              
                cell3.className = "row-content"
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
        //--------------table content END ---------------------
        
      }
      Body.append(gitBigDiv)
      //------------------------------ pop Up for table END ---------------------------------

      
       // ---------------------------search--------------------------------
      const getBtn = document.querySelector(".search")
      const txtSearch = document.querySelector(".txtSearch")
      getBtn.onclick=function(){
        for(j=0;j<json.data.standings.length;j++){

        if(txtSearch.value.toLowerCase() === json.data.standings[j].team.displayName.toLowerCase()){
          
            const getDiv = document.getElementById("myModal"+j)
          getDiv.style.display = "grid";
        window.onclick = function(event) {
          if (event.target == getDiv) {
            getDiv.style.display = "none";
          }
        }
      }
      
      }
      }


    txtSearch.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
          getBtn.click();
    }
});
// --------------------------- search END --------------------------------
  })
