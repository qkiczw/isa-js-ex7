let offices = [
    { id: "GD", name: "Gdansk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

let workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];

const company = { offices: [] };

company.offices  = offices.map( (office) => {
    return {
        id: office.id,
        name: office.name,
        headquarter: office.headquarter || false ,
        workers: workers.filter(  (worker) =>  { return worker.office.includes(office.id); } )
}
});

const getTotalSalary = (city) => {
    let totalSalary = 0;
    for (let i = 0; i < getCity(city).workers.length; i++) {
        totalSalary += getCity(city).workers[i].salary;

    }
    return totalSalary;
};

const getAverageSalary = (city) => {
    return (getTotalSalary(city) / getCity(city).workers.length).toFixed(2);
};

// 1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracownik�w, srednia pensja),

const getCity = (city) => {
    return company.offices.find( (office) => {
        return office.name.includes(city);
})
};

const getOfficeInfo = (city) => {
    return {
        name: getCity(city).name,
        localization : getCity(city).name,
        workers: getCity(city).workers.length,
        headquarter: getCity(city).headquarter,
        averageSalary: getAverageSalary(city)
    };
};
console.log(getOfficeInfo('Gliwice'));

// 2) Dodaj nowe biuro (w Poznaniu)

const addOffice = (id, name, headquarter) => {
    company.offices.push( { id:id, name: name, headquarter: headquarter, workers: []  } );
};

addOffice('PO', 'Poznan', false, );

// 3) Dodaj nowego pracownika do biura w Poznaniu: { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 }

const newWorker = (id, name, type, office, salary) => {
    return {id: id, name: name, type: type, office: office, salary: salary };
};

let newWorkerPoznan = newWorker(16, 'Olek', 'M', 'PO', 500);

const addWorker = () => {
    company.offices[3].workers.push(newWorkerPoznan);
};
addWorker();

// 4) Wyswietl, informacje o biurze w Poznaniu

console.log(getOfficeInfo('Poznan'));

// 5) Wyswietl srednia pensje w calej firmie,

const getTotalCompanySalary  = () => {
    return getTotalSalary('Gdansk') + getTotalSalary('Gliwice') + getTotalSalary('Koszalin') +
        getTotalSalary('Poznan');
};

const getAverageCompanySalary = () => {
    return getTotalCompanySalary() / company.offices.length;
};

console.log('Average salary in company: ' + getAverageCompanySalary() );

// 6) Wyswietl najlepiej oplacanego pracownika w poszczeg�lnych biurach




// 7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.