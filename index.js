const loadData = () => {
    const url = '/api/forbes400.json'
    fetch(url).then(res => res.json()).then(data => displayData(data))
}


const container = document.getElementById('billionaire-container')
const personDiv = document.getElementById('persondiv')
const personDivBody = document.getElementById('persondivbody')
const displayData = data => {
    data.forEach(element => {
        // console.log(element)
        const { person: {name},state, position, squareImage, countryOfCitizenship, rank, industries, finalWorth } = element

        const newItem = document.createElement('tr')

        newItem.innerHTML = `
        <td>
            <div class="flex items-center space-x-3 person-item cursor-pointer" for="forSingleperson" id="forSingleperson" item-position="${position}">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src="${squareImage}"
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div class="font-bold">${name}</div>
                    
                </div>
            </div>
        </td>
        <td>
            <div class="text-md">${countryOfCitizenship}</div>
        </td>
        <td>
           ${industries[0]}
           
        </td>
        <td> <div class="text-md">#${rank}</div> </td>
        <th>
        
            <div class="text-md">$${finalWorth}</div> 
            
        </th>
        `
        container.appendChild(newItem)

    });
    execute()
}


loadData()

const showSingleInfo = n => {
    const url = '/api/forbes400.json'
    fetch(url).then(res => res.json()).then(data => displaySingleInfo(data, n))
}


const displaySingleInfo = (data, n) => {
    const person = data.find(a => a.rank == n)
    const {financialAssets : [{exchange,numberOfShares,sharePrice,ticker}], person: {name},bios,birthDate ,source, city,gender,state, position,abouts, thumbnail, squareImage, countryOfCitizenship, rank, industries, finalWorth } = person
    console.log(person)
    const day = new Date(birthDate);
    const formattedDate = day.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });


    // ${bios.map(a => {
    //     return `<li>${a}</li>`
    // }).join('')}
    personDivBody.innerHTML = ` 
   <h3 class="font-bold text-3xl text-center">${name}</h3>
   <h4 class="text-2xl text-center">Biography</h4>
 <p class="py-4 text-center">${abouts}</p>
<ul >

</ul>
<div class="flex justify-between p-10 gap-10" >
<div>
<img class="rounded" src="${squareImage}">
<p><b>Source: </b>${source} </p>
 </div>
 <div class="text-left w-5/12">
<h3 class="text-2xl font-bold">General Information </h3>
<hr>
<p class="text-lg mt-4"><b class="font-bold">Citizenship:</b>  ${countryOfCitizenship}</p>
<p class="text-xl"><b class="font-bold">State:  </b> ${state}</p>
<p class="text-xl"><b class="font-bold">City:  </b> ${city}</p>
<p class="text-xl"><b class="font-bold">Birthday: </b> ${formattedDate}</p>
<p class="text-xl"><b class="font-bold">Gender: </b>${gender}</p>
<p class="text-xl"><b class="font-bold">Worth: </b> ${finalWorth} </p>




<h3 class="text-2xl font-bold mt-5">Financial Information</h3>
<hr>

<p class="text-xl"><b class="font-bold">Exchange:  </b> ${exchange}</p>
<p class="text-xl"><b class="font-bold">Ticker: </b> ${ticker} </p>
<p class="text-xl"><b class="font-bold">Total Shares:  </b>${numberOfShares}</p>
<p class="text-xl"><b class="font-bold">Share Price:  </b>$${sharePrice} </p>













  </div>

</div>

   `
    personDiv.style.display = "flex";
}



function execute() {
    const personItems = document.getElementsByClassName('person-item')
    for (let i = 0; i < personItems.length; i++) {
        personItems[i].addEventListener('click', function (e) {
            showSingleInfo(personItems[i].getAttribute('item-position'))
        })

    }
}


document.getElementById('persondivhide').addEventListener('click', function () {
    personDiv.style.display = 'none'
})

