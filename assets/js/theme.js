const addresses = {
    address1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139177.941119867!2d23.964269961175862!3d56.971836327720645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2z0KDQuNCz0LA!5e0!3m2!1sru!2slv!4v1694356368605!5m2!1sru!2slv",
    address2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70199.52579401784!2d23.62913579873475!3d56.64441902578427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ef254b6eed168f%3A0x400cfcd68f31c60!2z0JXQu9GA0LUsIE9ncmVzIHBpbHPEk3RhLCDQntCz0YDRgdC60LjQuSDQutGA0LDQuQ!5e0!3m2!1sru!2slv!4v1694356499767!5m2!1sru!2slv",
    address3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34944.59097344561!2d24.569400420239525!3d56.81099744892265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e9256ecb04739b%3A0x400cfcd68f31a60!2z0J7Qs9GA0LUsIE9ncmVzIHBpbHPEk3RhLCDQntCz0YDRgdC60LjQuSDQutGA0LDQuQ!5e0!3m2!1sru!2slv!4v1694356658393!5m2!1sru!2slv",
};

const types = {
    type1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.4588057285637!2d24.188414677193123!3d56.95807299851947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfc688c3e5c7%3A0x84936101b6e9bb9f!2sPURCH!5e0!3m2!1sru!2slv!4v1694359778797!5m2!1sru!2slv",
    type2: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17406.883609994213!2d24.100134797399406!3d56.95119210955825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKurts%20coffee%20%20C%C4%93su%20iela%2020%2C%20T%C4%93rbatas%20iela%202i!5e0!3m2!1sru!2slv!4v1694361244968!5m2!1sru!2slv",
    type3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.00867281968!2d24.162980603635248!3d56.972524545956254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece8d74b0b553%3A0x7425218ed323e8cb!2zQWtyb3BvbGUg0JDQu9GM0YTQsA!5e0!3m2!1sru!2slv!4v1694363354882!5m2!1sru!2slv",
};

const locationDropdown = document.getElementById("locationDropdown");
const typeDropdown = document.getElementById("typeDropdown");
const mapContainer = document.querySelector(".atbalsta-map");

locationDropdown.addEventListener("change", function () {
    const selectedLocation = locationDropdown.value;
    if (addresses[selectedLocation]) {
        const mapUrl = addresses[selectedLocation];
        mapContainer.innerHTML = `<iframe src="${mapUrl}" width="100%" height="600" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    } else {
        mapContainer.innerHTML = "";
    }
});

typeDropdown.addEventListener("change", function () {
    const selectedType = typeDropdown.value;
    if (types[selectedType]) {
        const mapUrl = types[selectedType];
        mapContainer.innerHTML = `<iframe src="${mapUrl}" width="100%" height="600" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    } else {
        mapContainer.innerHTML = "";
    }
});
