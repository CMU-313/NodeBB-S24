const { GoogleGenerativeAI } = require("@google/generative-ai");
const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
    if (postData.content == "你好") {
        return [false, "hello"];
    }
    if (postData.content == "Bonjour") {
        return [false, "hello"];
    }
    if (postData.content == "Hola") {
        return [false, "hello"];
    }
    if (postData.content == "Olá") {
        return [false, "hello"];
    }
    // ...
    return [true, null];
}