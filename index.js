const loadData = () => {
    const url = 'https://forbes400.onrender.com/api/forbes400'
    fetch(url).then(res => res.json()).then(data => displayData(data))
}



const displayData = data => {
    console.log(data)
}



loadData()