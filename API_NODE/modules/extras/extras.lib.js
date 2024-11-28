const fs = require('fs');
const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

const CreateTemplate = async (data) => {
    try {
        let nameFile = "nombreDelArchivo";
        let content = rootPath + '/utils/pdf/templates/test.template.html';
        let templateHtml = fs.readFileSync(content, 'utf8');

        templateHtml = templateHtml.replace('{{ title }}', "Prueba para generar PDF usando Puppeteer Js");

        return { 
            template : templateHtml,
            path : rootPath + 'public/static/pdfs/' + nameFile + '.pdf', 
            fullPath : `/static/pdfs/${nameFile}.pdf`
        };
        
    } catch (e) {
        console.log("Err CreateTemplate: ", e);
        throw new Error(e);
    }
}

module.exports.CreateTemplate = CreateTemplate;