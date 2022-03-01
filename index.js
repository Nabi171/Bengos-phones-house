// searchphones onclick 
const searchphones = () => {
    const inputField = document.getElementById('search-field');
    const searchInputText = inputField.value.toLowerCase();;
    if (searchInputText === '') {
        document.getElementById('unavailable-text').style.display = 'block';
        document.getElementById('loading-spinner').style.display = 'none';

    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;
        fetch(url).then(res => res.json()).then(data => displaysearchPhones(data.data));
        document.getElementById('unavailable-text').style.display = 'none';
    }
    inputField.value = '';
}
// display phones in card 
const displaysearchPhones = phones => {
    const objectiveNumber = document.getElementById('objective-number');
    objectiveNumber.innerText = `The total result is ${phones.length}`;
    document.getElementById('loading-spinner').style.display = 'none';
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    if (!phones) {
        document.getElementById('unavailable-text').style.display = 'block';
    }
    else {
        phones.slice(0, 9).forEach(phone => {
            const div = document.createElement('div');
            div.classList.add = ('col');
            div.innerHTML = `
                    <div class="card h-100 p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.brand}</h5>
                            <h6>${phone.phone_name}</h6>
                            <button onclick="phoneDetails('${phone.slug}')" class="btn btn-danger ">Details</button>
                        </div>
                    </div>
                     `;
            cardContainer.appendChild(div);

        });

    }
};
//dispalay details in card
const phoneDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url).then(res => res.json()).then(data => showdisplaydetails(data.data));
}
const showdisplaydetails = (detail) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.textContent = '';
    detailsContainer.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${detail.image}" class="img-fluid rounded-start p-3" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">NAME:${detail.name}</h5>
                    <h6>RELEASE:${detail.releaseDate ? detail.releaseDate : "not avaialable"}<h6>
                    <h6>STORAGE:${detail.mainFeatures.storage}<h6>
                    <h6>OTHERS:BT:${detail.others.Bluetooth},WLAN:${detail.others.WLAN}<h6>
                    <h6>DISPLAYSIZE:${detail.mainFeatures.displaySize}<h6>
                    <h6>MEMORY:${detail.mainFeatures.memory}<h6>
                    <h6>SENSORS:${detail.mainFeatures.sensors[0]},${detail.mainFeatures.sensors[0]},
                        ${detail.mainFeatures.sensors[1]},
                        ${detail.mainFeatures.sensors[2]},${detail.mainFeatures.sensors[3]},${detail.mainFeatures.sensors[4]},${detail.mainFeatures.sensors[5]},${detail.mainFeatures.sensors[6]}<h6>                       
                </div>
            </div>
        </div>
    </div>
                       `;
};

// //************************** see all phones ***************
const seeallphones = () => {
    const inputField = document.getElementById('search-field');
    const searchInputText = inputField.value.toLowerCase();
    if (searchInputText === '') {
        document.getElementById('unavailable-text').style.display = 'block';
        document.getElementById('loading-spinner').style.display = 'none';
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;
        fetch(url).then(res => res.json()).then(data => seephonedetails(data.data));
        document.getElementById('unavailable-text').style.display = 'none';
    }
    inputField.value = '';
};
//display in deatails in card
const seephonedetails = phones => {
    const objectiveNumber = document.getElementById('objective-number');
    objectiveNumber.innerText = `The total result is ${phones.length}`;
    document.getElementById('loading-spinner').style.display = 'none';
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    if (!phones) {
        document.getElementById('unavailable-text').style.display = 'block';
    }
    else {
        phones.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add = ('col');
            div.innerHTML = `
                    <div class="card h-100 p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.brand}</h5>
                            <h6>${phone.phone_name}</h6>
                            <button onclick="phoneDetailsForall('${phone.slug}')" class="btn btn-danger ">Details</button>
                        </div>
                    </div>
                     `;
            cardContainer.appendChild(div);
        });
    }
};
//phone details in card
const phoneDetailsForall = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url).then(res => res.json()).then(data => showdisplaydetailsforall(data.data));
}
//show details in card
const showdisplaydetailsforall = (detail) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.textContent = '';
    detailsContainer.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${detail.image}" class="img-fluid rounded-start p-3" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">NAME:${detail.name}</h5>
                    <h6>RELEASE:${detail.releaseDate ? detail.releaseDate : "not avaialable"}<h6>
                    <h6>STORAGE:${detail.mainFeatures.storage}<h6>
                    <h6>OTHERS:BT:${detail.others.Bluetooth},WLAN:${detail.others.WLAN}<h6>
                    <h6>DISPLAYSIZE:${detail.mainFeatures.displaySize}<h6>
                    <h6>MEMORY:${detail.mainFeatures.memory}<h6>
                    <h6>SENSORS:${detail.mainFeatures.sensors[0]},${detail.mainFeatures.sensors[0]},
                        ${detail.mainFeatures.sensors[1]},
                        ${detail.mainFeatures.sensors[2]},${detail.mainFeatures.sensors[3]},${detail.mainFeatures.sensors[4]},${detail.mainFeatures.sensors[5]},${detail.mainFeatures.sensors[6]}<h6>
                </div>
            </div>
        </div>
    </div>
                       `;
};





