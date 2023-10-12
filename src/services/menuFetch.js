import menuLinks from "../services/menuMeals.json"
const getCsvFromGoogleSheet = ({ googleSheetURL }) => {
    return fetch(googleSheetURL)
        .then(response => response.text())
        .then(data => {
            return data.replaceAll('"', '')
        })
        .catch(error => {
            console.error('Error al obtener los datos de Google Sheets:', error);
        });
}
const transformCsvToJson = (csv) => {
    const csvArr = csv.split('\n')
    // Obtiene los encabezados (primera fila)
    const headers = csvArr[0].split(',');
    // Inicializa un arreglo para almacenar los datos en formato JSON
    const csvJsonData = [];

    // Itera sobre las filas de datos (excluyendo la primera fila con los encabezados)
    for (let i = 1; i < csvArr.length; i++) {
        const row = csvArr[i].split(',');
        const entry = {};

        // Itera sobre las columnas y crea un objeto JSON
        for (let j = 0; j < headers.length; j++) {
            entry[headers[j]] = row[j];
        }

        // Agrega el objeto JSON al arreglo
        csvJsonData.push(entry);

    }
    return csvJsonData
}

export function getMenuCategory({ csvItem }) {
    let googleSheetURL = `https://docs.google.com/spreadsheets/d/1-zZtPT0B0vC-bbic55ulKfgXX3mXh8BTxXA3tBSKhBM/gviz/tq?tqx=out:csv&gid=${csvItem}`
    //return fetch(googleSheetURL)
    return getCsvFromGoogleSheet({ googleSheetURL })
        .then(data => {
            return transformCsvToJson(data)

        })

}
