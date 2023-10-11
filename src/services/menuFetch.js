import menuLinks from "../services/MenuLinks.json"
const getCsvFromGoogleSheet = ({ googleSheetURL }) => {
    return fetch(googleSheetURL)
        .then(response => response.text())
        .then(data => {
            console.log(data)
            return data.replaceAll('"', '')
        })
        .catch(error => {
            console.error('Error al obtener los datos de Google Sheets:', error);
        });
}
const transformCsvToJson = (csv) => {
    const csvArr = csv.split('\n')
    console.log(csvArr)
    // Obtiene los encabezados (primera fila)
    const headers = csvArr[0].split(',');
    console.log
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

export function getMenuCategory({ categoryMenu }) {
    let googleSheetURL = menuLinks[categoryMenu]
    console.log(googleSheetURL)

    //return fetch(googleSheetURL)
    return getCsvFromGoogleSheet({ googleSheetURL })
        .then(data => {
            console.log(data)
            return transformCsvToJson(data)

        })

}
