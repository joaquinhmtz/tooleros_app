const ExtraLib = require("./extras.lib");
const HelperPdf = require("./../../utils/pdf/puppeteer.pdf");

const GenerateTestPdf = async (req, res, next) => {
    try {
        let data = req.body;
        let template = await ExtraLib.CreateTemplate(data);
        let pdf = await HelperPdf.CreatePDF(template);

        res.status(200).send(pdf);

    } catch (e) {
        console.log("Error - GenerateTestPdf: ", e);
        next(e);
    }
}

module.exports.GenerateTestPdf = GenerateTestPdf;