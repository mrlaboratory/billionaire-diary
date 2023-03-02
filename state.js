const moreperson = document.getElementById('moreperson')

const loadData = (data,n) => {
    const url = `/api/state/${data}.json`
    fetch(url).then(res => res.json()).then(data => displayData(data,n))
    moreperson.innerHTML = `
    <button onclick="loadData('${data}',${n+12})" class="btn btn-wide">Show more</button>
    `
}



const container = document.getElementById('person-contaner')

const displayData = (data,n) => {
    container.innerHTML =''
    data = data.slice(0, n)
 
    data.forEach(element => {
        // console.log(element)
      
        const { financialAssets: [{ exchange, numberOfShares, sharePrice, ticker } = {}] = [], person: { name } = {},
            state,
            city,
            source,
            position,
            squareImage,
            countryOfCitizenship,
            rank,
            industries,
            finalWorth
        } = element ;
        console.log(element)




        const newItem = document.createElement('div')
        newItem.classList.add("col", "shadow", "bg-black", "text-white", "rounded-lg", "shadow-lg", "p-3")
        newItem.innerHTML = `
        <h2 class="text-2xl font-bold text-center">${name}</h2>
        <div class="flex justify-between gap-3 mt-3">
            <div class="w-3/6">
                <img class="w-full rounded-lg" src="${squareImage}" alt="">
                <p><b>Source: </b> ${source}</p>
            </div>
            <div class="w-3/6 border-l-2 border-white pl-4">
                <h4><b>Citizenship: </b> ${countryOfCitizenship} </h4>
                <h4><b>State:</b>  ${state}</h4>
                <h4><b>City:</b>  ${city}</h4>
                <h4><b>Total Shares:</b> ${numberOfShares} </h4>
                <h4><b>Price :</b>  ${sharePrice} </h4>
            </div>
        </div>
        
        `
        container.appendChild(newItem)
    })



}





document.getElementById('stateid').addEventListener('change',function(e){
loadData(e.target.value,12)
})


loadData('hawaii',12)