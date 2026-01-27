let userContainer = document.querySelector('.userContainer')

let searchInput = document.querySelector("#searchInput");

//user array
const users = [
    {
        ProfilerUrl: 'https://images.squarespace-cdn.com/content/v1/5d2346cbe7875300014eeb79/1674738312554-9NCZQV6OIE9AU0FW4F5T/fda507cd073a9fb801943590aa9620ac--male-models-dame.jpg" alt="image is loading',
        name: 'Nikhil',
        email: "nikhilkhan78@gmail.com",


    },
    {
        ProfilerUrl: 'https://www.nfi.edu/wp-content/uploads/2023/02/image25.png',
        name: 'Roshani',
        email: "roshninikhil143@gmail.com",


    },
    {
        ProfilerUrl: 'https://s3.r29static.com/bin/entry/216/0,0,2000,2400/720x864,85/2033374/image.webp',
        name: 'sana khera',
        email: "sanakhera78@gmail.com",


    },
    {
        ProfilerUrl: ' https://assets.vogue.in/photos/5ce4173445074aaf299059b1/2:3/w_2560%2Cc_limit/Top-Male-Models-of-All-Time.jpg ',
        name: 'Yesh shukhla',
        email: "yeshpandit78@gmail.com",
    },
    {
        ProfilerUrl: '  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEIAVet3lcLw5t9lFvmKwlQRToRf9dOFaueOf8P64BA&s ',
        name: 'Nandita',
        email: "nanditapndit78@gmail.com",
    },
]

function userRender(arr) {

    userContainer.innerHTML = ""

    arr.map(function (obj) {

        let { ProfilerUrl, name, email } = obj

        let divElt = document.createElement('div');
        divElt.className = "userItem"
        divElt.innerHTML = `
            <div class="userItem"> 
                <img src=${ProfilerUrl} alt="image is loading">
                    <div class="text">
                        <h3>${name}</h3>
                        <p>${email} </p>
                    </div>
            </div>  
        `   

        userContainer.append(divElt);
    })

}
userRender(users);

function handleSearch(e) {
    let searchValue = (e.target.value)
    let filterUser = users.filter(obj => {
        return obj.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    userRender(filterUser);
}
searchInput.addEventListener('input', handleSearch)